// captureMedia.js - Helper to capture any media URLs being loaded
// Add this to your browser console to capture the missing video URLs

(function() {
  console.log('🎯 Media Capture Started - Looking for videos/GIFs...');
  
  // Store original fetch
  const originalFetch = window.fetch;
  
  // Override fetch to log media URLs
  window.fetch = function(...args) {
    const url = args[0];
    
    // Check if it's a media file
    if (typeof url === 'string' && 
        (url.includes('.gif') || url.includes('.mp4') || url.includes('.webm') || 
         url.includes('datocms') || url.includes('cloudinary'))) {
      console.log('📹 FOUND MEDIA URL:', url);
      
      // Copy to clipboard automatically
      navigator.clipboard.writeText(url).then(() => {
        console.log('📋 Copied to clipboard:', url);
      });
    }
    
    return originalFetch.apply(this, args);
  };
  
  // Also monitor image elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'IMG' || node.nodeName === 'VIDEO') {
          const src = node.src || node.currentSrc;
          if (src && (src.includes('datocms') || src.includes('.gif') || src.includes('.mp4'))) {
            console.log('🎬 FOUND MEDIA ELEMENT:', src);
          }
        }
      });
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  console.log('✅ Media capture is active! Navigate to recruiter and stalker profiles to capture URLs.');
})();