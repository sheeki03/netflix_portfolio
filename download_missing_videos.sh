#!/bin/bash

echo "🎯 Manual Download Script for Missing ProfileBanner Videos/GIFs"
echo "============================================================="
echo ""
echo "Since we can't automatically fetch the URLs, here's how to get them manually:"
echo ""
echo "1. Open your browser and go to: http://localhost:3000"
echo "2. Open Developer Tools (F12) -> Network tab"
echo "3. Filter by: Media or type '.gif' in filter"
echo "4. Navigate to /profile/recruiter"
echo "5. Look for any GIF/video loading from datocms-assets.com"
echo "6. Right-click -> Copy -> Copy link address"
echo ""
echo "Once you have the URLs, paste them here:"
echo ""

# Placeholder for the two missing videos
echo "📹 Video 1 (Recruiter ProfileBanner):"
read -p "Paste URL here: " VIDEO1_URL

echo "📹 Video 2 (Stalker ProfileBanner):"  
read -p "Paste URL here: " VIDEO2_URL

# Download the videos if URLs provided
if [ ! -z "$VIDEO1_URL" ]; then
    echo "Downloading recruiter ProfileBanner video..."
    curl -L -o "public/assets/backgrounds/profilebanner_recruiter.gif" "$VIDEO1_URL"
    echo "✅ Downloaded to: public/assets/backgrounds/profilebanner_recruiter.gif"
fi

if [ ! -z "$VIDEO2_URL" ]; then
    echo "Downloading stalker ProfileBanner video..."
    curl -L -o "public/assets/backgrounds/profilebanner_stalker.gif" "$VIDEO2_URL"
    echo "✅ Downloaded to: public/assets/backgrounds/profilebanner_stalker.gif"
fi

echo ""
echo "🎉 Downloads complete! Now updating portfolio.json..."

# Update the JSON to use these new files
cat > update_profilebanner.js << 'EOF'
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/portfolio.json', 'utf8'));

// Update to use the new ProfileBanner backgrounds
data.profilebanner.backgroundImage.url = '/assets/backgrounds/profilebanner_recruiter.gif';

// You can also add profile-specific backgrounds
data.profilebannerRecruiter = {
  ...data.profilebanner,
  backgroundImage: { url: '/assets/backgrounds/profilebanner_recruiter.gif' }
};

data.profilebannerStalker = {
  ...data.profilebanner,
  backgroundImage: { url: '/assets/backgrounds/profilebanner_stalker.gif' }
};

fs.writeFileSync('src/data/portfolio.json', JSON.stringify(data, null, 2));
console.log('✅ Updated portfolio.json with new ProfileBanner videos!');
EOF

node update_profilebanner.js

echo "✅ All done! Restart the dev server to see the changes."