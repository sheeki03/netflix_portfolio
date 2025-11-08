# 📹 How to Capture the Missing 2 Videos/GIFs

## Method 1: Browser Developer Tools (Easiest)

1. **Open Chrome/Firefox DevTools** 
   - Press `F12` or right-click → Inspect
   
2. **Go to Network Tab**
   - Filter by: `Media` or `Img` 
   - Or type `.gif` or `.mp4` in the filter box
   
3. **Navigate to the pages**
   - Click on **Recruiter** profile
   - Click on **Stalker** profile
   
4. **Look for URLs containing:**
   - `datocms-assets.com`
   - `.gif` or `.mp4` or `.webm`
   - Any video/animation files
   
5. **Right-click the URL** → Copy → Copy link address

## Method 2: Console Script (Automated)

Paste this in your browser console while on the portfolio:

```javascript
// This will log ALL media URLs being loaded
const originalFetch = window.fetch;
window.fetch = function(...args) {
  const url = args[0];
  if (typeof url === 'string' && url.includes('datocms')) {
    console.log('🎬 DATOCMS MEDIA FOUND:', url);
    // Auto-copy to clipboard
    navigator.clipboard.writeText(url);
  }
  return originalFetch.apply(this, args);
};

// Now navigate to recruiter and stalker profiles
console.log('✅ Ready! Navigate to recruiter and stalker profiles');
```

## Method 3: Check Browser Cache

1. In DevTools → **Application** tab
2. Look for **Storage** → **Cache Storage**
3. Find entries from `datocms-assets.com`
4. Copy the full URLs

## Method 4: Use IDM (Internet Download Manager)

1. Install IDM browser extension
2. Navigate to recruiter/stalker profiles
3. IDM will detect the videos automatically
4. Click the IDM download button that appears

## Method 5: Direct DatoCMS API Query

If you have the API token, you can query directly:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_DATOCMS_TOKEN" \
  -d '{"query": "{ profilebanner { backgroundImage { url } } }"}' \
  https://graphql.datocms.com/
```

## Once You Have the URLs:

Share them with me and I'll download them for you, or download manually:

```bash
# For each URL:
curl -L -o "video_name.gif" "PASTE_URL_HERE"
```

Then save to: `/public/assets/backgrounds/`