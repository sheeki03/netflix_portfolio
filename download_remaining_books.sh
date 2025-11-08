#!/bin/bash

echo "📚 Continuing to download remaining book covers..."
echo "================================================"
echo ""

# Function to download with fallback
download_cover() {
    local filename=$1
    local url=$2
    local description=$3
    
    echo "Downloading: $description"
    if curl -L -s -f --max-time 10 -o "public/assets/books/$filename" "$url"; then
        echo "✅ Downloaded: $filename"
    else
        echo "⚠️  Failed: $filename"
    fi
}

# Continue from where we left off
download_cover "siddhartha.jpg" "https://covers.openlibrary.org/b/isbn/0553208845-L.jpg" "Siddhartha"
download_cover "krishnamurti.jpg" "https://m.media-amazon.com/images/I/71HKKHTeplL._AC_UF1000,1000_QL80_.jpg" "Freedom from the Known"
download_cover "alan_watts.jpg" "https://covers.openlibrary.org/b/isbn/0375705104-L.jpg" "The Way of Zen"
download_cover "foundation.jpg" "https://covers.openlibrary.org/b/isbn/0553293354-L.jpg" "Foundation"
download_cover "cosmos.jpg" "https://covers.openlibrary.org/b/isbn/0345331354-L.jpg" "Cosmos"
download_cover "leaves_of_grass.jpg" "https://covers.openlibrary.org/b/isbn/0143039768-L.jpg" "Leaves of Grass"
download_cover "black_swan.jpg" "https://covers.openlibrary.org/b/isbn/1400063515-L.jpg" "The Black Swan"
download_cover "doctor_faustus.jpg" "https://covers.openlibrary.org/b/isbn/0486282082-L.jpg" "Doctor Faustus"
download_cover "strategy_conflict.jpg" "https://covers.openlibrary.org/b/isbn/0674840313-L.jpg" "The Strategy of Conflict"
download_cover "final_invention.jpg" "https://covers.openlibrary.org/b/isbn/1250058783-L.jpg" "Our Final Invention"
download_cover "lord_of_light.jpg" "https://covers.openlibrary.org/b/isbn/0060567236-L.jpg" "Lord of Light"
download_cover "labyrinths.jpg" "https://covers.openlibrary.org/b/isbn/0811216993-L.jpg" "Labyrinths"
download_cover "ted_chiang.jpg" "https://covers.openlibrary.org/b/isbn/1101947883-L.jpg" "Stories of Your Life"
download_cover "dune.jpg" "https://covers.openlibrary.org/b/isbn/0441172717-L.jpg" "Dune"
download_cover "ai_superpowers.jpg" "https://covers.openlibrary.org/b/isbn/132854639X-L.jpg" "AI Superpowers"
download_cover "finite_infinite.jpg" "https://covers.openlibrary.org/b/isbn/1476731713-L.jpg" "Finite and Infinite Games"
download_cover "untethered_soul.jpg" "https://covers.openlibrary.org/b/isbn/1572245379-L.jpg" "The Untethered Soul"
download_cover "order_of_time.jpg" "https://covers.openlibrary.org/b/isbn/0735216105-L.jpg" "The Order of Time"
download_cover "story_civilization.jpg" "https://m.media-amazon.com/images/I/71tD5SmNgaL._AC_UF1000,1000_QL80_.jpg" "Story of Civilization"
download_cover "three_body.jpg" "https://covers.openlibrary.org/b/isbn/0765382032-L.jpg" "The Three-Body Problem"
download_cover "elephant_brain.jpg" "https://m.media-amazon.com/images/I/71BWvpz4o0L._AC_UF1000,1000_QL80_.jpg" "Elephant in the Brain"
download_cover "rational_optimist.jpg" "https://covers.openlibrary.org/b/isbn/0061452055-L.jpg" "The Rational Optimist"
download_cover "god_not_great.jpg" "https://covers.openlibrary.org/b/isbn/0446697966-L.jpg" "God Is Not Great"
download_cover "way_of_world.jpg" "https://m.media-amazon.com/images/I/51M0S5Q0K3L.jpg" "The Way of the World"
download_cover "alice.jpg" "https://covers.openlibrary.org/b/isbn/0141439769-L.jpg" "Alice in Wonderland"
download_cover "blood_streets.jpg" "https://m.media-amazon.com/images/I/51HFeWdtOBL.jpg" "Blood in the Streets"
download_cover "great_reckoning.jpg" "https://m.media-amazon.com/images/I/51BFA2Jb7ML.jpg" "The Great Reckoning"
download_cover "sovereign_individual.jpg" "https://m.media-amazon.com/images/I/71vK1cSQQyL._AC_UF1000,1000_QL80_.jpg" "Sovereign Individual"

echo ""
echo "✅ Finished processing remaining books!"