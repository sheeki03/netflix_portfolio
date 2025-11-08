// Reading.tsx

import React from 'react';
import './Reading.css';

const books = [
  {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    imgSrc: "/assets/books/thus_spoke_zarathustra.jpg",
    description: "A philosophical masterpiece on the death of God and the Übermensch.",
  },
  {
    title: "Mahabharat",
    author: "Prashant Lal (Transcreation)",
    imgSrc: "/assets/books/mahabharat.jpg",
    description: "Epic transcreation of India's greatest mythology.",
  },
  {
    title: "Bhagavad Gita",
    author: "Ancient Text",
    imgSrc: "/assets/books/bhagavad_gita.jpg",
    description: "Sacred Hindu scripture on duty, righteousness, and spiritual wisdom.",
  },
  {
    title: "Chanakya Neeti",
    author: "B.K. Chaturvedi",
    imgSrc: "/assets/books/chanakya_neeti.jpg",
    description: "Ancient Indian treatise on statecraft and political wisdom.",
  },
  {
    title: "Arthashastra",
    author: "Kautilya",
    imgSrc: "/assets/books/arthashastra.jpg",
    description: "Ancient Indian text on economics, politics, and military strategy.",
  },
  {
    title: "The Book of Secrets",
    author: "Osho",
    imgSrc: "/assets/books/book_of_secrets.jpg",
    description: "112 meditation techniques from the ancient Vigyan Bhairav Tantra.",
  },
  {
    title: "The Sailor Who Fell from Grace with the Sea",
    author: "Yukio Mishima",
    imgSrc: "/assets/books/sailor_who_fell.jpg",
    description: "A dark tale of innocence lost and nihilistic philosophy.",
  },
  {
    title: "Sun and Steel",
    author: "Yukio Mishima",
    imgSrc: "/assets/books/sun_and_steel.jpg",
    description: "Autobiographical essay on art, action, and the body.",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    imgSrc: "/assets/books/brave_new_world.jpg",
    description: "Dystopian masterpiece on technological totalitarianism.",
  },
  {
    title: "1984",
    author: "George Orwell",
    imgSrc: "/assets/books/1984.jpg",
    description: "The definitive dystopian novel on surveillance and totalitarianism.",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    imgSrc: "/assets/books/crime_and_punishment.jpg",
    description: "Psychological exploration of guilt, redemption, and morality.",
  },
  {
    title: "The Idiot",
    author: "Fyodor Dostoyevsky",
    imgSrc: "/assets/books/the_idiot.jpg",
    description: "A Christ-like figure navigates Russian society's corruption.",
  },
  {
    title: "The House of the Dead",
    author: "Fyodor Dostoyevsky",
    imgSrc: "/assets/books/house_of_dead.jpg",
    description: "Semi-autobiographical account of Siberian prison life.",
  },
  {
    title: "We",
    author: "Yevgeny Zamyatin",
    imgSrc: "/assets/books/we.jpg",
    description: "The dystopian novel that inspired Orwell's 1984.",
  },
  {
    title: "The Dead",
    author: "James Joyce",
    imgSrc: "/assets/books/the_dead.jpg",
    description: "Joyce's masterful short story on mortality and epiphany.",
  },
  {
    title: "The Analects",
    author: "Confucius",
    imgSrc: "/assets/books/analects.jpg",
    description: "Foundational text of Confucian philosophy.",
  },
  {
    title: "The I Ching",
    author: "Ancient Chinese Text",
    imgSrc: "/assets/books/i_ching.jpg",
    description: "The Book of Changes - ancient divination and philosophy.",
  },
  {
    title: "Direct Truth",
    author: "Kapil Gupta",
    imgSrc: "/assets/books/direct_truth.jpg",
    description: "Uncompromising truths about human nature and excellence.",
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    imgSrc: "/assets/books/snow_crash.jpg",
    description: "Cyberpunk novel that coined the term 'Metaverse'.",
  },
  {
    title: "The Beginning of Infinity",
    author: "David Deutsch",
    imgSrc: "/assets/books/beginning_of_infinity.jpg",
    description: "Explanations that transform the world through knowledge.",
  },
  {
    title: "The Saga of Khasak",
    author: "O.V. Vijayan",
    imgSrc: "/assets/books/khasak.jpg",
    description: "Malayalam masterpiece blending myth and modernity.",
  },
  {
    title: "Heavy Weather",
    author: "P.G. Wodehouse",
    imgSrc: "/assets/books/heavy_weather.jpg",
    description: "Classic British humor at Blandings Castle.",
  },
  {
    title: "Jnana Yoga",
    author: "Swami Vivekananda",
    imgSrc: "/assets/books/jnana_yoga.jpg",
    description: "The path of knowledge to spiritual realization.",
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    imgSrc: "/assets/books/art_of_war.jpg",
    description: "Ancient Chinese military strategy applicable to life.",
  },
  {
    title: "The Prince",
    author: "Niccolò Machiavelli",
    imgSrc: "/assets/books/the_prince.jpg",
    description: "Controversial treatise on political power and pragmatism.",
  },
  {
    title: "The Book of Five Rings",
    author: "Miyamoto Musashi",
    imgSrc: "/assets/books/five_rings.jpg",
    description: "Samurai philosophy on strategy and martial arts.",
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    imgSrc: "/assets/books/selfish_gene.jpg",
    description: "Revolutionary perspective on evolution and altruism.",
  },
  {
    title: "Repent, Harlequin! Said the Ticktockman",
    author: "Harlan Ellison",
    imgSrc: "/assets/books/harlequin.jpg",
    description: "Dystopian short story on time, conformity, and rebellion.",
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    imgSrc: "/assets/books/neuromancer.jpg",
    description: "The novel that launched the cyberpunk genre.",
  },
  {
    title: "The Last Lecture",
    author: "Randy Pausch",
    imgSrc: "/assets/books/last_lecture.jpg",
    description: "Life lessons from a dying professor.",
  },
  {
    title: "Influence: Science and Practice",
    author: "Robert Cialdini",
    imgSrc: "/assets/books/influence.jpg",
    description: "Psychology of persuasion and compliance.",
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Charlie Munger",
    imgSrc: "/assets/books/poor_charlies.jpg",
    description: "Wit and wisdom from Warren Buffett's partner.",
  },
  {
    title: "Twelve Against the Gods",
    author: "William Bolitho",
    imgSrc: "/assets/books/twelve_against_gods.jpg",
    description: "Biographies of history's greatest adventurers.",
  },
  {
    title: "Iliad and Odyssey",
    author: "Homer",
    imgSrc: "/assets/books/iliad_odyssey.jpg",
    description: "Epic poems foundational to Western literature.",
  },
  {
    title: "In Search of the Miraculous",
    author: "P.D. Ouspensky",
    imgSrc: "/assets/books/miraculous.jpg",
    description: "Gurdjieff's teachings on consciousness and spiritual development.",
  },
  {
    title: "From Onions to Pearls",
    author: "Satyam Nadeen",
    imgSrc: "/assets/books/onions_to_pearls.jpg",
    description: "Journey from seeking to awakening.",
  },
  {
    title: "Cryptonomicon",
    author: "Neal Stephenson",
    imgSrc: "/assets/books/cryptonomicon.jpg",
    description: "Epic novel weaving cryptography, war, and treasure.",
  },
  {
    title: "48 Laws of Power",
    author: "Robert Greene",
    imgSrc: "/assets/books/48_laws.jpg",
    description: "Machiavellian guide to power dynamics.",
  },
  {
    title: "The Prophet",
    author: "Kahlil Gibran",
    imgSrc: "/assets/books/the_prophet.jpg",
    description: "Poetic wisdom on life, love, and spirituality.",
  },
  {
    title: "Spiritual Enlightenment Trilogy",
    author: "Jed McKenna",
    imgSrc: "/assets/books/jed_mckenna.jpg",
    description: "Radical perspective on spiritual awakening.",
  },
  {
    title: "Proslogion",
    author: "Anselm of Canterbury",
    imgSrc: "/assets/books/anselm.jpg",
    description: "Medieval philosophy and the ontological argument.",
  },
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    imgSrc: "/assets/books/godel.jpg",
    description: "Exploration of consciousness through math, art, and music.",
  },
  {
    title: "Tao Te Ching",
    author: "Lao Tzu",
    imgSrc: "/assets/books/tao_te_ching.jpg",
    description: "Foundational text of Taoism on the Way.",
  },
  {
    title: "Awareness",
    author: "Anthony de Mello",
    imgSrc: "/assets/books/awareness.jpg",
    description: "Wake up to life through spiritual insights.",
  },
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    imgSrc: "/assets/books/siddhartha.jpg",
    description: "Spiritual journey of self-discovery in ancient India.",
  },
  {
    title: "Freedom from the Known",
    author: "Jiddu Krishnamurti",
    imgSrc: "/assets/books/krishnamurti.jpg",
    description: "Radical inquiry into the nature of thought and freedom.",
  },
  {
    title: "The Way of Zen",
    author: "Alan Watts",
    imgSrc: "/assets/books/alan_watts.jpg",
    description: "Western introduction to Zen Buddhism.",
  },
  {
    title: "Foundation Series",
    author: "Isaac Asimov",
    imgSrc: "/assets/books/foundation.jpg",
    description: "Epic science fiction on psychohistory and empire.",
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    imgSrc: "/assets/books/cosmos.jpg",
    description: "Journey through space, time, and human understanding.",
  },
  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    imgSrc: "/assets/books/leaves_of_grass.jpg",
    description: "American poetry celebrating democracy and nature.",
  },
  {
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    imgSrc: "/assets/books/black_swan.jpg",
    description: "Impact of rare events and our blindness to randomness.",
  },
  {
    title: "Doctor Faustus",
    author: "Christopher Marlowe",
    imgSrc: "/assets/books/doctor_faustus.jpg",
    description: "Tragic tale of knowledge, power, and damnation.",
  },
  {
    title: "The Strategy of Conflict",
    author: "Thomas Schelling",
    imgSrc: "/assets/books/strategy_conflict.jpg",
    description: "Game theory and nuclear deterrence strategy.",
  },
  {
    title: "Our Final Invention",
    author: "James Barrat",
    imgSrc: "/assets/books/final_invention.jpg",
    description: "AI and the end of the human era.",
  },
  {
    title: "Lord of Light",
    author: "Roger Zelazny",
    imgSrc: "/assets/books/lord_of_light.jpg",
    description: "Science fiction meets Hindu mythology.",
  },
  {
    title: "Labyrinths",
    author: "Jorge Luis Borges",
    imgSrc: "/assets/books/labyrinths.jpg",
    description: "Mind-bending short stories on infinity and paradox.",
  },
  {
    title: "Stories of Your Life and Others",
    author: "Ted Chiang",
    imgSrc: "/assets/books/ted_chiang.jpg",
    description: "Philosophical science fiction at its finest.",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    imgSrc: "/assets/books/dune.jpg",
    description: "Epic science fiction of politics, religion, and ecology.",
  },
  {
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    imgSrc: "/assets/books/ai_superpowers.jpg",
    description: "China, Silicon Valley, and the new world order.",
  },
  {
    title: "Finite and Infinite Games",
    author: "James P. Carse",
    imgSrc: "/assets/books/finite_infinite.jpg",
    description: "Life as play between boundaries and horizons.",
  },
  {
    title: "The Untethered Soul",
    author: "Michael Singer",
    imgSrc: "/assets/books/untethered_soul.jpg",
    description: "Journey beyond yourself to inner freedom.",
  },
  {
    title: "The Order of Time",
    author: "Carlo Rovelli",
    imgSrc: "/assets/books/order_of_time.jpg",
    description: "Physics and philosophy of time's true nature.",
  },
  {
    title: "The Story of Civilization",
    author: "Will & Ariel Durant",
    imgSrc: "/assets/books/story_civilization.jpg",
    description: "Monumental 11-volume history of human civilization.",
  },
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    imgSrc: "/assets/books/three_body.jpg",
    description: "Hard science fiction on first contact and cosmic sociology.",
  },
  {
    title: "The Elephant in the Brain",
    author: "Kevin Simler & Robin Hanson",
    imgSrc: "/assets/books/elephant_brain.jpg",
    description: "Hidden motives in everyday life.",
  },
  {
    title: "The Rational Optimist",
    author: "Matt Ridley",
    imgSrc: "/assets/books/rational_optimist.jpg",
    description: "How prosperity evolves through exchange and specialization.",
  },
  {
    title: "God Is Not Great",
    author: "Christopher Hitchens",
    imgSrc: "/assets/books/god_not_great.jpg",
    description: "Critique of religion and defense of secular humanism.",
  },
  {
    title: "The Way of the World",
    author: "William Congreve",
    imgSrc: "/assets/books/way_of_world.jpg",
    description: "Restoration comedy on love, marriage, and society.",
  },
  {
    title: "Alice's Adventures in Wonderland & Through the Looking-Glass",
    author: "Lewis Carroll",
    imgSrc: "/assets/books/alice.jpg",
    description: "Surreal journey through logic, language, and imagination.",
  },
  {
    title: "Blood in the Streets",
    author: "James Dale Davidson & Lord William Rees-Mogg",
    imgSrc: "/assets/books/blood_streets.jpg",
    description: "Investment profits in a world gone mad.",
  },
  {
    title: "The Great Reckoning",
    author: "James Dale Davidson & Lord William Rees-Mogg",
    imgSrc: "/assets/books/great_reckoning.jpg",
    description: "How the world will change in the depression of the 1990s.",
  },
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson & Lord William Rees-Mogg",
    imgSrc: "/assets/books/sovereign_individual.jpg",
    description: "Mastering the transition to the information age.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Essential Reading List</h2>
      <p className="reading-intro">A curated collection of books on philosophy, technology, spirituality, and human nature.</p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.02}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;