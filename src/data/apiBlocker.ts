// apiBlocker.ts - Prevents any external API calls
// This ensures the portfolio runs 100% locally

// Override fetch to block external calls (except localhost)
const originalFetch = window.fetch;

window.fetch = function(...args) {
  const url = args[0] as string;
  
  // Allow local assets and localhost only
  if (url.startsWith('/') || url.includes('localhost') || url.includes('127.0.0.1')) {
    return originalFetch.apply(this, args);
  }
  
  // Block all external APIs
  console.warn(`🚫 BLOCKED external API call: ${url}`);
  return Promise.reject(new Error(`External API calls are blocked. URL: ${url}`));
};

// Block XMLHttpRequest to external APIs  
const originalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = class extends originalXHR {
  open(method: string, url: string | URL, async: boolean = true, user?: string | null, password?: string | null) {
    const urlString = url.toString();
    if (!urlString.startsWith('/') && !urlString.includes('localhost') && !urlString.includes('127.0.0.1')) {
      console.warn(`🚫 BLOCKED external XHR call: ${urlString}`);
      throw new Error(`External API calls are blocked. URL: ${urlString}`);
    }
    return super.open(method, url as string, async, user, password);
  }
};

export {};