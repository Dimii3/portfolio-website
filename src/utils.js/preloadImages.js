export const preloadImages = (urls) => {
  return Promise.all(
    urls.map((url) => {
      if (url.endsWith(".webm") || url.endsWith(".mp4")) {
        return new Promise((resolve, reject) => {
          const video = document.createElement("video");
          video.src = url;
          video.onloadeddata = () => resolve();
          video.onerror = reject;
        });
      } else {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      }
    })
  );
};
