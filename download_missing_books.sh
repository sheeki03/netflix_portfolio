#!/bin/bash

echo "📚 Downloading missing book covers from alternative sources..."
echo "============================================================"
echo ""

# Function to download with fallback
download_cover() {
    local filename=$1
    local url=$2
    local description=$3
    
    echo "Downloading: $description"
    if curl -L -s -f --max-time 15 -o "public/assets/books/$filename" "$url"; then
        echo "✅ Downloaded: $filename"
    else
        echo "⚠️  Failed: $filename"
    fi
}

# Try alternative URLs for failed books

# Indian Philosophy Books
download_cover "mahabharat.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459878016i/29891832.jpg" "Mahabharat"
download_cover "chanakya_neeti.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404565794i/22453520.jpg" "Chanakya Neeti"
download_cover "jnana_yoga.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348695601i/656626.jpg" "Jnana Yoga"
download_cover "khasak.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1443424973i/919006.jpg" "The Legends of Khasak"

# Spiritual/Philosophy Books
download_cover "book_of_secrets.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348363151i/168216.jpg" "The Book of Secrets"
download_cover "direct_truth.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1539623754i/42486659.jpg" "Direct Truth"
download_cover "krishnamurti.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403181872i/143877.jpg" "Freedom from the Known"
download_cover "awareness.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361113081i/94318.jpg" "Awareness"
download_cover "jed_mckenna.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320423975i/337967.jpg" "Jed McKenna"
download_cover "anselm.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387748305i/492245.jpg" "Anselm Proslogion"
download_cover "onions_to_pearls.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1372308088i/18158513.jpg" "From Onions to Pearls"

# Business/Finance Books
download_cover "poor_charlies.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1360812737i/944652.jpg" "Poor Charlie's Almanack"
download_cover "twelve_against_gods.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544568115i/42270835.jpg" "Twelve Against the Gods"
download_cover "sovereign_individual.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348765144i/82256.jpg" "The Sovereign Individual"
download_cover "blood_streets.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403192447i/698754.jpg" "Blood in the Streets"
download_cover "great_reckoning.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403192471i/698746.jpg" "The Great Reckoning"

# Other Missing Books
download_cover "the_dead.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328866556i/683125.jpg" "The Dead - Joyce"
download_cover "harlequin.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1312003113i/760160.jpg" "Repent Harlequin"
download_cover "story_civilization.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1445905166i/78670.jpg" "Story of Civilization"
download_cover "elephant_brain.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1461774308i/28820444.jpg" "The Elephant in the Brain"
download_cover "way_of_world.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348408127i/209607.jpg" "The Way of the World"

echo ""
echo "✅ Finished downloading missing book covers!"
echo ""
echo "Check which books still need covers:"
ls -la public/assets/books/ | grep -E "jpg$" | wc -l
echo "book cover files found"