#!/bin/bash

# Create books directory if it doesn't exist
mkdir -p public/assets/books

echo "📚 Downloading book cover placeholders..."
echo "==========================================="
echo ""

# List of book cover files to download
books=(
    "thus_spoke_zarathustra.jpg"
    "mahabharat.jpg"
    "bhagavad_gita.jpg"
    "chanakya_neeti.jpg"
    "arthashastra.jpg"
    "book_of_secrets.jpg"
    "sailor_who_fell.jpg"
    "sun_and_steel.jpg"
    "brave_new_world.jpg"
    "1984.jpg"
    "crime_and_punishment.jpg"
    "the_idiot.jpg"
    "house_of_dead.jpg"
    "we.jpg"
    "the_dead.jpg"
    "analects.jpg"
    "i_ching.jpg"
    "direct_truth.jpg"
    "snow_crash.jpg"
    "beginning_of_infinity.jpg"
    "khasak.jpg"
    "heavy_weather.jpg"
    "jnana_yoga.jpg"
    "art_of_war.jpg"
    "the_prince.jpg"
    "five_rings.jpg"
    "selfish_gene.jpg"
    "harlequin.jpg"
    "neuromancer.jpg"
    "last_lecture.jpg"
    "influence.jpg"
    "poor_charlies.jpg"
    "twelve_against_gods.jpg"
    "iliad_odyssey.jpg"
    "miraculous.jpg"
    "onions_to_pearls.jpg"
    "cryptonomicon.jpg"
    "48_laws.jpg"
    "the_prophet.jpg"
    "jed_mckenna.jpg"
    "anselm.jpg"
    "godel.jpg"
    "tao_te_ching.jpg"
    "awareness.jpg"
    "siddhartha.jpg"
    "krishnamurti.jpg"
    "alan_watts.jpg"
    "foundation.jpg"
    "cosmos.jpg"
    "leaves_of_grass.jpg"
    "black_swan.jpg"
    "doctor_faustus.jpg"
    "strategy_conflict.jpg"
    "final_invention.jpg"
    "lord_of_light.jpg"
    "labyrinths.jpg"
    "ted_chiang.jpg"
    "dune.jpg"
    "ai_superpowers.jpg"
    "finite_infinite.jpg"
    "untethered_soul.jpg"
    "order_of_time.jpg"
    "story_civilization.jpg"
    "three_body.jpg"
    "elephant_brain.jpg"
    "rational_optimist.jpg"
    "god_not_great.jpg"
    "way_of_world.jpg"
    "alice.jpg"
    "blood_streets.jpg"
    "great_reckoning.jpg"
    "sovereign_individual.jpg"
)

# Counter for progress
count=0
total=${#books[@]}

# Download each book cover using Lorem Picsum with book-themed seeds
for filename in "${books[@]}"; do
    ((count++))
    
    # Use Lorem Picsum with a seed based on the filename for consistent, book-like images
    # Using portrait dimensions typical for book covers (300x450)
    seed="book_${filename%.*}"
    url="https://picsum.photos/seed/$seed/300/450"
    
    echo "[$count/$total] Downloading: $filename"
    curl -L -s -o "public/assets/books/$filename" "$url"
    
    # Small delay to be respectful to the service
    sleep 0.05
done

echo ""
echo "✅ Downloaded $count book cover placeholders!"
echo ""
echo "Note: These are placeholder images from Lorem Picsum."
echo "To get actual book covers, you can replace them with real covers later."