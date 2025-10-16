// Change this in utils/streamUrlUtils.js
export const modifyStreamUrl = (originalUrl, options = {}) => {
  const url = new URL(originalUrl);
  const params = new URLSearchParams(url.search);
  
  const {
    muted = true,
    preload = 'metadata',
    loop = true,
    autoplay = false,
    controls = true  // CHANGE THIS TO true - enable controls by default
  } = options;
  
  params.set('muted', muted.toString());
  params.set('preload', preload);
  params.set('loop', loop.toString());
  params.set('autoplay', autoplay.toString());
  params.set('controls', controls.toString());  // This will enable controls
  
  url.search = params.toString();
  return url.toString();
};

// Simplify the playVideo function
export const playVideo = (iframe) => {
  if (iframe) {
    // Just send play command and unmute
    iframe.contentWindow.postMessage(JSON.stringify({
      method: 'play',
      value: true
    }), '*');
    
    // Unmute the video
    iframe.contentWindow.postMessage(JSON.stringify({
      method: 'setMuted', 
      value: false
    }), '*');
  }
};