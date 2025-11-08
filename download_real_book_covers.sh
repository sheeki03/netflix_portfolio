#!/bin/bash

# Create books directory if it doesn't exist
mkdir -p public/assets/books

echo "📚 Downloading actual book covers from online sources..."
echo "========================================================"
echo ""

# Function to download with fallback
download_cover() {
    local filename=$1
    local url=$2
    local description=$3
    
    echo "Downloading: $description"
    if curl -L -s -f -o "public/assets/books/$filename" "$url"; then
        echo "✅ Downloaded: $filename"
    else
        echo "⚠️  Failed to download: $filename (using placeholder)"
    fi
}

# Download actual book covers from various sources
# Using Open Library covers and other public domain sources

# Philosophy & Classic Literature
download_cover "thus_spoke_zarathustra.jpg" "https://covers.openlibrary.org/b/isbn/0140441182-L.jpg" "Thus Spoke Zarathustra"
download_cover "mahabharat.jpg" "https://m.media-amazon.com/images/I/91YUvC1eetL._AC_UF1000,1000_QL80_.jpg" "Mahabharat"
download_cover "bhagavad_gita.jpg" "https://covers.openlibrary.org/b/isbn/0140449183-L.jpg" "Bhagavad Gita"
download_cover "chanakya_neeti.jpg" "https://m.media-amazon.com/images/I/71K3Uu3VVVL._AC_UF1000,1000_QL80_.jpg" "Chanakya Neeti"
download_cover "arthashastra.jpg" "https://covers.openlibrary.org/b/isbn/0140446036-L.jpg" "Arthashastra"
download_cover "book_of_secrets.jpg" "https://m.media-amazon.com/images/I/81bVHtFaH2L._AC_UF1000,1000_QL80_.jpg" "The Book of Secrets - Osho"
download_cover "sailor_who_fell.jpg" "https://covers.openlibrary.org/b/isbn/0679750150-L.jpg" "The Sailor Who Fell from Grace with the Sea"
download_cover "sun_and_steel.jpg" "https://covers.openlibrary.org/b/isbn/0870112392-L.jpg" "Sun and Steel"
download_cover "brave_new_world.jpg" "https://covers.openlibrary.org/b/isbn/0060850523-L.jpg" "Brave New World"
download_cover "1984.jpg" "https://covers.openlibrary.org/b/isbn/0452284236-L.jpg" "1984"
download_cover "crime_and_punishment.jpg" "https://covers.openlibrary.org/b/isbn/0143058142-L.jpg" "Crime and Punishment"
download_cover "the_idiot.jpg" "https://covers.openlibrary.org/b/isbn/0140447938-L.jpg" "The Idiot"
download_cover "house_of_dead.jpg" "https://covers.openlibrary.org/b/isbn/0140444564-L.jpg" "The House of the Dead"
download_cover "we.jpg" "https://covers.openlibrary.org/b/isbn/0140185852-L.jpg" "We"
download_cover "the_dead.jpg" "https://m.media-amazon.com/images/I/71KcOPf1MrL._AC_UF1000,1000_QL80_.jpg" "The Dead - James Joyce"
download_cover "analects.jpg" "https://covers.openlibrary.org/b/isbn/0140443487-L.jpg" "The Analects"
download_cover "i_ching.jpg" "https://covers.openlibrary.org/b/isbn/0140440882-L.jpg" "I Ching"
download_cover "direct_truth.jpg" "https://m.media-amazon.com/images/I/41y3T9eqjLL.jpg" "Direct Truth - Kapil Gupta"
download_cover "snow_crash.jpg" "https://covers.openlibrary.org/b/isbn/0553380958-L.jpg" "Snow Crash"
download_cover "beginning_of_infinity.jpg" "https://covers.openlibrary.org/b/isbn/0143121359-L.jpg" "The Beginning of Infinity"
download_cover "khasak.jpg" "https://m.media-amazon.com/images/I/71nG1gSqCyL._AC_UF1000,1000_QL80_.jpg" "The Saga of Khasak"
download_cover "heavy_weather.jpg" "https://covers.openlibrary.org/b/isbn/1841591017-L.jpg" "Heavy Weather"
download_cover "jnana_yoga.jpg" "https://m.media-amazon.com/images/I/71yYuN6j8QL._AC_UF1000,1000_QL80_.jpg" "Jnana Yoga"
download_cover "art_of_war.jpg" "https://covers.openlibrary.org/b/isbn/1590302257-L.jpg" "The Art of War"
download_cover "the_prince.jpg" "https://covers.openlibrary.org/b/isbn/0140449159-L.jpg" "The Prince"
download_cover "five_rings.jpg" "https://covers.openlibrary.org/b/isbn/1590302486-L.jpg" "The Book of Five Rings"
download_cover "selfish_gene.jpg" "https://covers.openlibrary.org/b/isbn/0199291152-L.jpg" "The Selfish Gene"
download_cover "harlequin.jpg" "https://m.media-amazon.com/images/I/51M7uZPO9wL.jpg" "Repent, Harlequin!"
download_cover "neuromancer.jpg" "https://covers.openlibrary.org/b/isbn/0441569595-L.jpg" "Neuromancer"
download_cover "last_lecture.jpg" "https://covers.openlibrary.org/b/isbn/1401323251-L.jpg" "The Last Lecture"
download_cover "influence.jpg" "https://covers.openlibrary.org/b/isbn/006124189X-L.jpg" "Influence"
download_cover "poor_charlies.jpg" "https://m.media-amazon.com/images/I/71vt1aeY5VL._AC_UF1000,1000_QL80_.jpg" "Poor Charlie's Almanack"
download_cover "twelve_against_gods.jpg" "https://m.media-amazon.com/images/I/71RwGPc5zDL._AC_UF1000,1000_QL80_.jpg" "Twelve Against the Gods"
download_cover "iliad_odyssey.jpg" "https://covers.openlibrary.org/b/isbn/0140275363-L.jpg" "Iliad and Odyssey"
download_cover "miraculous.jpg" "https://covers.openlibrary.org/b/isbn/0156007460-L.jpg" "In Search of the Miraculous"
download_cover "onions_to_pearls.jpg" "https://m.media-amazon.com/images/I/51lEZGTqUML.jpg" "From Onions to Pearls"
download_cover "cryptonomicon.jpg" "https://covers.openlibrary.org/b/isbn/0380973464-L.jpg" "Cryptonomicon"
download_cover "48_laws.jpg" "https://covers.openlibrary.org/b/isbn/0140280197-L.jpg" "48 Laws of Power"
download_cover "the_prophet.jpg" "https://covers.openlibrary.org/b/isbn/0394404289-L.jpg" "The Prophet"
download_cover "jed_mckenna.jpg" "https://m.media-amazon.com/images/I/41FOzVUmcpL.jpg" "Jed McKenna Trilogy"
download_cover "anselm.jpg" "https://m.media-amazon.com/images/I/51fLnPz8sYL.jpg" "Anselm Proslogion"
download_cover "godel.jpg" "https://covers.openlibrary.org/b/isbn/0465026567-L.jpg" "Gödel, Escher, Bach"
download_cover "tao_te_ching.jpg" "https://covers.openlibrary.org/b/isbn/0140441336-L.jpg" "Tao Te Ching"
download_cover "awareness.jpg" "https://m.media-amazon.com/images/I/71dNVvXa-tL._AC_UF1000,1000_QL80_.jpg" "Awareness - Anthony de Mello"
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
download_cover "ted_chiang.jpg" "https://covers.openlibrary.org/b/isbn/1101947883-L.jpg" "Stories of Your Life and Others"
download_cover "dune.jpg" "https://covers.openlibrary.org/b/isbn/0441172717-L.jpg" "Dune"
download_cover "ai_superpowers.jpg" "https://covers.openlibrary.org/b/isbn/132854639X-L.jpg" "AI Superpowers"
download_cover "finite_infinite.jpg" "https://covers.openlibrary.org/b/isbn/1476731713-L.jpg" "Finite and Infinite Games"
download_cover "untethered_soul.jpg" "https://covers.openlibrary.org/b/isbn/1572245379-L.jpg" "The Untethered Soul"
download_cover "order_of_time.jpg" "https://covers.openlibrary.org/b/isbn/0735216105-L.jpg" "The Order of Time"
download_cover "story_civilization.jpg" "https://m.media-amazon.com/images/I/71tD5SmNgaL._AC_UF1000,1000_QL80_.jpg" "The Story of Civilization"
download_cover "three_body.jpg" "https://covers.openlibrary.org/b/isbn/0765382032-L.jpg" "The Three-Body Problem"
download_cover "elephant_brain.jpg" "https://m.media-amazon.com/images/I/71BWvpz4o0L._AC_UF1000,1000_QL80_.jpg" "The Elephant in the Brain"
download_cover "rational_optimist.jpg" "https://covers.openlibrary.org/b/isbn/0061452055-L.jpg" "The Rational Optimist"
download_cover "god_not_great.jpg" "https://covers.openlibrary.org/b/isbn/0446697966-L.jpg" "God Is Not Great"
download_cover "way_of_world.jpg" "https://m.media-amazon.com/images/I/51M0S5Q0K3L.jpg" "The Way of the World"
download_cover "alice.jpg" "https://covers.openlibrary.org/b/isbn/0141439769-L.jpg" "Alice's Adventures in Wonderland"
download_cover "blood_streets.jpg" "https://m.media-amazon.com/images/I/51HFeWdtOBL.jpg" "Blood in the Streets"
download_cover "great_reckoning.jpg" "https://m.media-amazon.com/images/I/51BFA2Jb7ML.jpg" "The Great Reckoning"
download_cover "sovereign_individual.jpg" "https://m.media-amazon.com/images/I/71vK1cSQQyL._AC_UF1000,1000_QL80_.jpg" "The Sovereign Individual"

echo ""
echo "✅ Finished downloading actual book covers!"
echo ""
echo "Note: Some covers may have failed if the URLs changed."
echo "You can manually replace any missing covers."