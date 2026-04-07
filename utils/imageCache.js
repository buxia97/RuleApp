const CACHE_KEY = 'imgCacheMap'; // App 本地缓存映射表 key

// ===================== H5 安全缓存配置 =====================
const H5_CACHE_PREFIX = 'imgCache_';
const H5_CACHE_INDEX_KEY = 'imgCache_index';
const MAX_CACHE_COUNT = 30; // 防止 localStorage 爆掉

// ===================== 工具：iOS 判断 =====================
const isIOS = () => {
  return /iP(ad|hone|od)/.test(navigator.userAgent);
};

// ===================== H5 缓存索引 =====================
const getCacheIndex = () => {
  const str = localStorage.getItem(H5_CACHE_INDEX_KEY);
  return str ? JSON.parse(str) : [];
};

const saveCacheIndex = (arr) => {
  localStorage.setItem(H5_CACHE_INDEX_KEY, JSON.stringify(arr));
};

// ===================== App缓存映射 =====================
const getCacheMap = () => {
  const mapStr = plus.storage.getItem(CACHE_KEY);
  return mapStr ? JSON.parse(mapStr) : {};
};

const saveCacheMap = (map) => {
  plus.storage.setItem(CACHE_KEY, JSON.stringify(map));
};

// ===================== H5 图片压缩 =====================
export const compressImage = (imgUrl, maxSize = 1000) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // ⚠️ iOS + 跨域优化
    img.crossOrigin = 'anonymous';

    img.src = imgUrl;

    img.onload = () => {
      let { width, height } = img;
      const ratio = width / height;

      if (Math.max(width, height) > maxSize) {
        if (width > height) {
          width = maxSize;
          height = Math.round(maxSize / ratio);
        } else {
          height = maxSize;
          width = Math.round(maxSize * ratio);
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, width, height);

      try {
        const base64 = canvas.toDataURL('image/jpeg', 0.8);
        resolve(base64);
      } catch (e) {
        reject(e);
      }
    };

    img.onerror = (err) => reject(err);
  });
};

// ===================== H5 缓存（安全版） =====================
export const cacheImageH5 = async (imgUrl, maxSize = 1000) => {
  if (!imgUrl) return '';

  // 🔥 iOS 直接降级（避免 Safari 内存 + storage 问题）
  if (isIOS()) {
    return imgUrl;
  }

  const key = H5_CACHE_PREFIX + imgUrl;

  try {
    const cached = localStorage.getItem(key);
    if (cached) return cached;

    const compressedBase64 = await compressImage(imgUrl, maxSize);

    // ======= LRU 控制缓存数量 =======
    const index = getCacheIndex();

    index.push(key);

    // 超过限制删除最旧
    if (index.length > MAX_CACHE_COUNT) {
      const removeKey = index.shift();
      localStorage.removeItem(removeKey);
    }

    saveCacheIndex(index);

    try {
      localStorage.setItem(key, compressedBase64);
    } catch (e) {
      // 🔥 storage 满了兜底：清空一半
      console.warn('localStorage 已满，清理缓存');

      const half = Math.floor(index.length / 2);

      for (let i = 0; i < half; i++) {
        const k = index[i];
        localStorage.removeItem(k);
      }

      const newIndex = index.slice(half);
      saveCacheIndex(newIndex);
    }

    return compressedBase64;
  } catch (err) {
    console.warn('H5 图片压缩失败，回退原图：', err);
    return imgUrl;
  }
};

// ===================== App 缓存（原逻辑保留优化） =====================
export const cacheImageApp = async (imgUrl) => {
  const map = getCacheMap();

  if (map[imgUrl]) {
    try {
      await new Promise((resolve, reject) => {
        plus.io.resolveLocalFileSystemURL(map[imgUrl], resolve, reject);
      });
      return map[imgUrl];
    } catch (e) {
      console.warn('缓存文件不存在，重新下载:', e);
    }
  }

  return new Promise((resolve, reject) => {
    const filename =
      '_doc/imgCache/' +
      Date.now() +
      '_' +
      Math.random().toString(36).slice(2) +
      '.jpg';

    const dtask = plus.downloader.createDownload(
      imgUrl,
      { filename },
      (task, status) => {
        if (status === 200) {
          const localPath = task.filename;

          map[imgUrl] = localPath;
          saveCacheMap(map);

          resolve(localPath);
        } else {
          reject('下载失败，status=' + status);
        }
      }
    );

    dtask.start();
  });
};

// ===================== 通用入口 =====================
export const cacheImage = async (imgUrl, maxSize = 1000) => {
  if (!imgUrl) return '';

  if (process.env.UNI_PLATFORM === 'h5') {
    return await cacheImageH5(imgUrl, maxSize);
  }

  if (process.env.UNI_PLATFORM === 'app-plus') {
    return await cacheImageApp(imgUrl);
  }

  return imgUrl;
};