
import { Book, BookCategory } from './types';

export const NAVY_MOTTO = "Karmasu Kaushalam"; 
export const LIBRARY_INTRO = "The INS Shivaji Library stands as a beacon of knowledge and tradition, serving officers, sailors, and their families. It houses a vast collection of technical, historical, and literary works, fostering a culture of continuous learning and excellence within the Indian Navy.";

export const CONTACT_INFO = {
  librarian: {
    name: "Mr. Sunil Kumar",
    designation: "Station Librarian",
    contact: "+91 02114 284245"
  },
  asstLibrarian: {
    name: "Mrs. Anjali Sharma",
    designation: "Assistant Librarian"
  }
};

export const CONTACT_GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600", // Library Shelf
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600", // Books on shelf
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600", // Open book
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600", // Books stack
  "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&q=80&w=600", // Books and coffee
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600", // Moody library
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=600", // Open book reading
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600", // Stack of books
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600"  // Pen and notebook
];

export const ABOUT_US_CONTENT = {
  history: `INS Shivaji is the Indian Navy's premier Technical Training Establishment. Nestled in the Sahyadri ranges at Lonavala, Maharashtra, it serves as the alma mater for all Marine Engineer Officers of the Indian Navy.

Commissioned: February 15, 1945
Original Name: HMIS Shivaji (His Majesty's Indian Ship)
Renamed: Became INS Shivaji on January 26, 1950, coinciding with India becoming a Republic.
Motto: Karmasu Kaushalam (Skill at Work)
Primary Role: To impart technical training to officers and sailors of the Indian Navy, Indian Coast Guard, and friendly foreign navies in Marine Engineering, Nuclear, Biological and Chemical Defence (NBCD), and Damage Control.`,
  celebrations: `INS Shivaji celebrates India's national festivals with deep patriotic fervor, combining military tradition with community engagement.

Republic Day (26th January)
Ceremonial Parade: The day typically begins with a grand Ceremonial Parade reviewed by the Station Commander. The turnout includes platoons of officers and sailors displaying immaculate drill movements.

Wreath-Laying Ceremony: A solemn wreath-laying ceremony is held at the War Memorial within the establishment to pay homage to the "Sea Warriors" and freedom fighters who made the supreme sacrifice.

Independence Day (15th August)
Flag Hoisting: The National Flag is hoisted with full naval honors.
Tribute to Martyrs: A floral tribute is offered at the War Memorial by the Commanding Officer.`,
  heritage: `The President’s Colour Award (Presidential Standard)
On February 13, 2020, the President of India awarded the President’s Colour to INS Shivaji. This is the highest honor bestowed upon any military unit.

The "Keep"
The central administrative building, known as the "Keep," is a heritage structure that resembles a fortress. It stands as a silent witness to the transformation of the Royal Indian Navy into the modern Indian Navy.`
};

export const STATION_LIBRARY_INFO = `The Naval Reference Library at INS Shivaji, one of the oldest in the Navy, has transitioned from a Technical Library to a comprehensive Station Reference Library serving all personnel, families, and children. The facility houses a vast collection of approximately 32,000 books, with 700 new additions inducted this year.`;

export const HISTORY_SECTIONS = [
  {
    title: "The Genesis",
    text: "INS Shivaji was commissioned in 1945 as HMIS Shivaji. Located in Lonavala, it serves as the premier technical training establishment of the Indian Navy.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Evolution of Excellence",
    text: "Over the decades, the establishment has evolved from a steam engineering centre to a hub of modern marine technology.",
    image: "https://images.unsplash.com/photo-1507733108721-c4d0b1bc6fe7?auto=format&fit=crop&q=80&w=800"
  }
];

// Helper to generate mock books if no manual data is provided
const generateMockBooks = (categoryName: string) => {
  return Array.from({ length: 10 }).map((_, i) => ({
    id: `${categoryName.replace(/\s/g, '')}-${i}`,
    title: `${categoryName} Essentials Vol. ${i + 1}`,
    author: `Expert Author ${i + 1}`,
    edition: `202${i % 5} Edition`,
    summary: `A comprehensive guide covering fundamental and advanced concepts in ${categoryName}. Essential reading for personnel.`,
    image: `https://picsum.photos/seed/${categoryName}${i}/300/450`
  }));
};

const CATEGORY_NAMES = [
  "Children Section",
  "E-Lounge",
  "English Fiction",
  "Psychology",
  "Motivational",
  "History",
  "Defence",
  "CNS Reading List",
  "Engineering",
  "Mathematics",
  "Management Law & Education",
  "Mechanical Engineering",
  "Electronic & Electrical Engg",
  "Mathematics & Science",
  "Thermal Dynamics"
];

const categoryDescriptions: Record<string, string> = {
  "Children Section": "Imaginative worlds and learning resources for young ones.",
  "E-Lounge": "Cyber security, programming, Linux, and 8051 chipsets.",
  "English Fiction": "Classic and contemporary literary works.",
  "Psychology": "Understanding human behavior and mind.",
  "Motivational": "Inspiring stories and leadership principles.",
  "History": "Chronicles of the past, naval and global.",
  "Defence": "Strategic studies, warfare, and military science.",
  "CNS Reading List": "Recommended reading by the Chief of Naval Staff.",
  "Engineering": "General engineering principles and applications.",
  "Mathematics": "Pure and applied mathematics resources.",
  "Management Law & Education": "Administration, maritime law, and pedagogy.",
  "Mechanical Engineering": "Mechanics, thermodynamics, and structural analysis.",
  "Electronic & Electrical Engg": "Circuits, systems, and power engineering.",
  "Mathematics & Science": "Foundational scientific theories.",
  "Thermal Dynamics": "Heat transfer and energy systems."
};

const MANUAL_BOOK_DATA: Record<string, Book[]> = {
  "History": [
    {
      id: 'hist-1',
      title: 'Why I am an Atheist and Other Works',
      author: 'Bhagat Singh',
      edition: '1st',
      summary: 'Bhagat Singh is a name that became synonymous with revolution in India’s struggle for independence. This young boy brought about a change in the way people thought about freedom. He was well read and fought extensively for rights – his own, his comrades’ and his countrymen’s. A discussion with a friend soon turned into a matter of self-assessment for Bhagat Singh, leading to a discourse on why he chose to be an atheist. ',
      image: 'https://m.media-amazon.com/images/I/61MCDl9XbqL._SL1360_.jpg'
    },
    {
      id: 'hist-2',
      title: 'Nationalism',
      author: 'Rabindranath Tagore',
      edition: '2006',
      summary: 'Nationalism is a comprehensive exploration of the historical, political, and cultural phenomenon of nationalism. Written by Rabindranath Tagore, a renowned poet and philosopher, this thought-provoking book delves into the complexities and consequences of nationalistic fervor. Engaging readers with insightful analysis, Tagore challenges prevailing notions of patriotism and encourages a broader understanding of humanity.',
      image: 'https://m.media-amazon.com/images/I/71AHE-9OSlL._SL1500_.jpg'
    },
    {
      id: 'hist-3',
      title: 'The Communist Manifesto',
      author: ' Karl Marx , Friedrich Engels',
      edition: '2018',
      summary: 'The Communist Manifesto by Karl Marx and Friedrich Engels is a seminal work that explores the principles of communism and critiques capitalist society.',
      image: 'https://m.media-amazon.com/images/I/51QMNSetI0L._SL1400_.jpg'
    },
    {
       id: 'hist-4',
       title: 'Operation X',
       author: 'Capt. M.N.R. Samant',
       edition: '2019',
       summary: 'The untold story of India\'s covert naval war in East Pakistan.',
       image: 'https://m.media-amazon.com/images/I/61TgYAEiSzL._SL1400_.jpg'
    },
    {
       id: 'hist-5',
       title: 'The Last Stand of the Tin Can Sailors',
       author: 'James D. Hornfischer',
       edition: '2004',
       summary: 'The extraordinary World War II story of the U.S. Navy\'s finest hour.',
       image: 'https://m.media-amazon.com/images/I/51qUPmwJ5yL._SY445_SX342_FMwebp_.jpg'
    }
  ],
  "Defence": [
     {
        id: 'def-1',
        title: 'Sea Power: The History and Geopolitics of the World\'s Oceans',
        author: 'Admiral James Stavridis',
        edition: '2017',
        summary: 'A guide to the history and geostrategic importance of the oceans.',
        image: 'https://m.media-amazon.com/images/I/41CXmdK3UwL._SY445_SX342_FMwebp_.jpg'
     },
     {
        id: 'def-2',
        title: 'The Future of War',
        author: 'Lawrence Freedman',
        edition: '2017',
        summary: 'A history of the concept of war and its future.',
        image: 'https://m.media-amazon.com/images/I/81aXrZFTKqL._SL1500_.jpg'
     },
     {
        id: 'def-3',
        title: 'Fleet Tactics and Coastal Combat',
        author: 'Wayne P. Hughes Jr.',
        edition: '3rd',
        summary: 'A definitive guide to naval tactics and strategy.',
        image: 'https://m.media-amazon.com/images/I/51NEDTZS0NL.jpg'
     },
     {
        id: 'def-4',
        title: 'Seapower States',
        author: 'Andrew Lambert',
        edition: '2018',
        summary: 'Maritime Culture, Continental Empires and the Conflict That Made the Modern World.',
        image: 'https://m.media-amazon.com/images/I/41Ac6Um3jwL._SY445_SX342_QL70_FMwebp_.jpg'
     },
     {
        id: 'def-5',
        title: 'Red Star Over the Pacific',
        author: 'Toshi Yoshihara',
        edition: '2nd',
        summary: 'China\'s Rise and the Challenge to U.S. Maritime Strategy.',
        image: 'https://m.media-amazon.com/images/I/51Khcrt9BSL._SY445_SX342_FMwebp_.jpg'
     }
  ],
  "English Fiction": [
      {
          id: 'fic-1',
          title: 'The Hunt for Red October',
          author: 'Tom Clancy',
          edition: '1984',
          summary: 'The classic submarine thriller.',
          image: 'https://m.media-amazon.com/images/I/71VFGvmnX6L._SL1500_.jpg'
      },
      {
          id: 'fic-2',
          title: 'The Caine Mutiny',
          author: 'Herman Wouk',
          edition: '1951',
          summary: 'A Pulitzer Prize-winning novel of World War II.',
          image: 'https://m.media-amazon.com/images/I/715L-2VjMNL._SL1500_.jpg'
      },
      {
          id: 'fic-3',
          title: 'Das Boot',
          author: 'Lothar-Günther Buchheim',
          edition: '1973',
          summary: 'The Harrowing account of a German U-boat patrol.',
          image: 'https://m.media-amazon.com/images/I/41atQqfT4aL._SY445_SX342_QL70_FMwebp_.jpg'
      },
      {
          id: 'fic-4',
          title: 'The Cruel Sea',
          author: 'Nicholas Monsarrat',
          edition: '1951',
          summary: 'A gripping novel about the Battle of the Atlantic.',
          image: 'https://m.media-amazon.com/images/I/51+NBVdlC4L._SY445_SX342_FMwebp_.jpg'
      },
      {
          id: 'fic-5',
          title: 'Master and Commander',
          author: 'Patrick O\'Brian',
          edition: '1969',
          summary: 'First in the Aubrey-Maturin series.',
          image: 'https://m.media-amazon.com/images/I/81qdLdPe74L._SL1500_.jpg'
      }
  ],
  "Children Section": [
      {
          id: 'child-1',
          title: 'The Theory Of Everything',
          author: 'Stephen Hawking',
          edition: '2000',
          summary: 'An English cosmologist, theoretical physicist, author as well as the Director of Research at the Centre for Theoretical Cosmology under the University of Cambridge, Stephen Hawking is a scholar with more than a dozen of honorary degrees. In was in 1963 that Stephen Hawking contracted a rare motor neuron disorder which gave him just two years to live, yet he went to Cambridge to become what he is today..',
          image: 'https://m.media-amazon.com/images/I/61fR6OnVBUL._SL1276_.jpg'
      },
      {
          id: 'child-2',
          title: 'Divine Five: Vol-1 Motherland [Paperback]',
          author: 'Ratikant Behera and Abhishek Krishnan',
          edition: '2000',
          summary: ' Mythological Fantasy Adventure of Courage, Magic & Virtual Reality, Action Fiction for Teenagers & Anime Fans, Novel & Storybook.',
          image: 'https://m.media-amazon.com/images/I/81li1ZiZN+L._SL1500_.jpg'
      },
          {
          id: 'child-3',
          title: 'The Secret Garden',
          author: ' Frances Hodgson Burnett',
          edition: '2000',
          summary: ' The Secret Garden by Frances Hodgson Burnett is a timeless classic that has enchanted readers of all ages. It tells the story of young Mary Lennox, a girl who discovers a neglected garden and unlocks its hidden magic. This book is an essential addition to any collection of books, from kids books to classic fiction books that stand the test of time.',
          image: 'https://m.media-amazon.com/images/I/71yW1vXD2xL.jpg'
      },
      {
          id: 'child-4',
          title: 'Ignited Minds (R/J)',
          author: 'A.P.J Abdul Kalam',
          edition: '2000',
          summary: ' Dr. Kalam shares his dream of a nation that is unrivaled, he discusses how he has, from his experience, met such skilled people whose visions can transform the nation.',
          image: 'https://m.media-amazon.com/images/I/81y66NkOkpL._SL1500_.jpg'
      },    {
          id: 'child-5',
          title: 'Malgudi Adventures',
          author: 'NARAYAN R.K.',
          edition: '2000',
          summary: ' Mythological Fantasy Adventure of Courage, Magic & Virtual Reality, Action Fiction for Teenagers & Anime Fans, Novel & Storybook.',
          image: 'https://m.media-amazon.com/images/I/81li1ZiZN+L._SL1500_.jpg'
      },
  ],
  "E-Lounge": [
      {
          id: 'el-1',
          title: 'Cyber Warfare',
          author: 'Tirth Patel',
          edition: '2022',
          summary: 'Digital defense strategies.',
          image: 'https://m.media-amazon.com/images/I/71O4wGBAGhL._SY342_.jpg'
      },
      {
          id: 'el-2',
          title: 'Ghost in the Wires',
          author: 'Kevin Mitnick',
          edition: '2011',
          summary: 'My Adventures as the World\'s Most Wanted Hacker.',
          image: 'https://m.media-amazon.com/images/I/41Hr0UyPsZL._SY445_SX342_FMwebp_.jpg'
      },
      {
          id: 'el-3',
          title: 'The Cuckoo\'s Egg',
          author: 'Cliff Stoll',
          edition: '1989',
          summary: 'Tracking a Spy Through the Maze of Computer Espionage.',
          image: 'https://m.media-amazon.com/images/I/41wW2EODXJL._SY445_SX342_FMwebp_.jpg'
      },
      {
          id: 'el-4',
          title: 'Sandworm',
          author: 'Andy Greenberg',
          edition: '2019',
          summary: 'A New Era of Cyberwar and the Hunt for the Kremlin\'s Most Dangerous Hackers.',
          image: 'https://m.media-amazon.com/images/I/51wb-9bJtIL._SY445_SX342_FMwebp_.jpg'
      },
      {
          id: 'el-5',
          title: 'Countdown to Zero Day',
          author: 'Kim Zetter',
          edition: '2014',
          summary: 'Stuxnet and the Launch of the World\'s First Digital Weapon.',
          image: 'https://m.media-amazon.com/images/I/51b7x1xRb2L._SY445_SX342_FMwebp_.jpg'
      }
  ],
  "Psychology": [
      {
          id: 'psy-1',
          title: 'Thinking Fast and Slow',
          author: 'Daniel Kahneman',
          edition: '2011',
          summary: 'The two systems that drive the way we think.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'psy-2',
          title: 'Influence: The Psychology of Persuasion',
          author: 'Robert Cialdini',
          edition: '2006',
          summary: 'Understanding the psychology of why people say "yes".',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'psy-3',
          title: 'Grit',
          author: 'Angela Duckworth',
          edition: '2016',
          summary: 'The Power of Passion and Perseverance.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'psy-4',
          title: 'Quiet',
          author: 'Susan Cain',
          edition: '2012',
          summary: 'The Power of Introverts in a World That Can\'t Stop Talking.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'psy-5',
          title: 'Man\'s Search for Meaning',
          author: 'Viktor Frankl',
          edition: '1946',
          summary: 'A psychologist\'s experience in concentration camps and logotherapy.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Motivational": [
      {
          id: 'mot-1',
          title: 'Atomic Habits',
          author: 'James Clear',
          edition: '2018',
          summary: 'Tiny Changes, Remarkable Results.',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mot-2',
          title: 'Can\'t Hurt Me',
          author: 'David Goggins',
          edition: '2018',
          summary: 'Master Your Mind and Defy the Odds.',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mot-3',
          title: 'The 5 AM Club',
          author: 'Robin Sharma',
          edition: '2018',
          summary: 'Own Your Morning. Elevate Your Life.',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mot-4',
          title: 'Deep Work',
          author: 'Cal Newport',
          edition: '2016',
          summary: 'Rules for Focused Success in a Distracted World.',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mot-5',
          title: 'Mindset',
          author: 'Carol S. Dweck',
          edition: '2006',
          summary: 'The New Psychology of Success.',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "CNS Reading List": [
      {
          id: 'cns-1',
          title: 'Maritime Strategy',
          author: 'Naval HQ',
          edition: '2023',
          summary: 'Official reading material for officers.',
          image: 'https://images.unsplash.com/photo-1533036423985-7872d8e0e854?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'cns-2',
          title: 'Monsoon',
          author: 'Robert D. Kaplan',
          edition: '2010',
          summary: 'The Indian Ocean and the Future of American Power.',
          image: 'https://images.unsplash.com/photo-1533036423985-7872d8e0e854?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'cns-3',
          title: '2034: A Novel of the Next World War',
          author: 'Elliot Ackerman',
          edition: '2021',
          summary: 'A geopolitical thriller about a future war.',
          image: 'https://images.unsplash.com/photo-1533036423985-7872d8e0e854?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'cns-4',
          title: 'Carrier Killer',
          author: 'Gerry Doyle',
          edition: '2020',
          summary: 'China\'s anti-ship ballistic missiles.',
          image: 'https://images.unsplash.com/photo-1533036423985-7872d8e0e854?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'cns-5',
          title: 'Freedom\'s Forge',
          author: 'Arthur Herman',
          edition: '2012',
          summary: 'How American Business Produced Victory in World War II.',
          image: 'https://images.unsplash.com/photo-1533036423985-7872d8e0e854?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Engineering": [
      {
          id: 'eng-1',
          title: 'Engineering Mechanics',
          author: 'Timoshenko',
          edition: '5th',
          summary: 'Foundational text on mechanics.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eng-2',
          title: 'Structures',
          author: 'J.E. Gordon',
          edition: '1978',
          summary: 'Or Why Things Don\'t Fall Down.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eng-3',
          title: 'To Engineer Is Human',
          author: 'Henry Petroski',
          edition: '1985',
          summary: 'The Role of Failure in Successful Design.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eng-4',
          title: 'Skunk Works',
          author: 'Ben R. Rich',
          edition: '1994',
          summary: 'A Personal Memoir of My Years at Lockheed.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eng-5',
          title: 'The Design of Everyday Things',
          author: 'Don Norman',
          edition: '2013',
          summary: 'Revised and Expanded Edition.',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Mathematics": [
      {
          id: 'math-1',
          title: 'Advanced Engineering Mathematics',
          author: 'Erwin Kreyszig',
          edition: '10th',
          summary: 'Comprehensive math resource for engineers.',
          image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'math-2',
          title: 'Calculus: Early Transcendentals',
          author: 'James Stewart',
          edition: '8th',
          summary: 'Standard calculus textbook.',
          image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'math-3',
          title: 'Introduction to Linear Algebra',
          author: 'Gilbert Strang',
          edition: '5th',
          summary: 'Fundamental linear algebra concepts.',
          image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'math-4',
          title: 'Infinite Powers',
          author: 'Steven Strogatz',
          edition: '2019',
          summary: 'How Calculus Reveals the Secrets of the Universe.',
          image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'math-5',
          title: 'The Man Who Knew Infinity',
          author: 'Robert Kanigel',
          edition: '1991',
          summary: 'A Life of the Genius Ramanujan.',
          image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Management Law & Education": [
      {
          id: 'mle-1',
          title: 'The Law of the Sea',
          author: 'UN',
          edition: '1982',
          summary: 'UN Convention on the Law of the Sea.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mle-2',
          title: 'Leaders Eat Last',
          author: 'Simon Sinek',
          edition: '2014',
          summary: 'Why Some Teams Pull Together and Others Don\'t.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mle-3',
          title: 'Measure What Matters',
          author: 'John Doerr',
          edition: '2018',
          summary: 'How Google, Bono, and the Gates Foundation Rock the World with OKRs.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mle-4',
          title: 'High Output Management',
          author: 'Andrew S. Grove',
          edition: '1983',
          summary: 'Management principles from Intel\'s former CEO.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mle-5',
          title: 'Educational Psychology',
          author: 'Anita Woolfolk',
          edition: '14th',
          summary: 'Theory and Practice.',
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Mechanical Engineering": [
      {
          id: 'mech-1',
          title: 'Fluid Mechanics',
          author: 'Frank M. White',
          edition: '8th',
          summary: 'Analysis of fluid flow.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mech-2',
          title: 'Shigley\'s Mechanical Engineering Design',
          author: 'Richard Budynas',
          edition: '11th',
          summary: 'Standard machine design text.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mech-3',
          title: 'Fundamentals of Thermodynamics',
          author: 'Borgnakke & Sonntag',
          edition: '10th',
          summary: 'Classic thermodynamics.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mech-4',
          title: 'Machine Design',
          author: 'Robert L. Norton',
          edition: '5th',
          summary: 'An Integrated Approach.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'mech-5',
          title: 'Mechanics of Materials',
          author: 'Russell C. Hibbeler',
          edition: '10th',
          summary: 'Stress and strain analysis.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Electronic & Electrical Engg": [
      {
          id: 'eee-1',
          title: 'The Art of Electronics',
          author: 'Horowitz & Hill',
          edition: '3rd',
          summary: 'The bible of electronics.',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eee-2',
          title: 'Microelectronic Circuits',
          author: 'Adel S. Sedra',
          edition: '8th',
          summary: 'Standard text for microelectronics.',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eee-3',
          title: 'Electric Machinery Fundamentals',
          author: 'Stephen J. Chapman',
          edition: '5th',
          summary: 'Electric machines and transformers.',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eee-4',
          title: 'Signals and Systems',
          author: 'Oppenheim & Willsky',
          edition: '2nd',
          summary: 'Signal processing foundations.',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'eee-5',
          title: 'Power System Analysis',
          author: 'Hadi Saadat',
          edition: '3rd',
          summary: 'Power grid analysis.',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Mathematics & Science": [
      {
          id: 'ms-1',
          title: 'A Brief History of Time',
          author: 'Stephen Hawking',
          edition: '1988',
          summary: 'From the Big Bang to Black Holes.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'ms-2',
          title: 'Cosmos',
          author: 'Carl Sagan',
          edition: '1980',
          summary: 'The story of cosmic evolution.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'ms-3',
          title: 'Sapiens: A Brief History of Humankind',
          author: 'Yuval Noah Harari',
          edition: '2011',
          summary: 'History of the human species.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'ms-4',
          title: 'The Gene: An Intimate History',
          author: 'Siddhartha Mukherjee',
          edition: '2016',
          summary: 'History of genetics.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'ms-5',
          title: 'Astrophysics for People in a Hurry',
          author: 'Neil deGrasse Tyson',
          edition: '2017',
          summary: 'Essential guide to the universe.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
      }
  ],
  "Thermal Dynamics": [
      {
          id: 'td-1',
          title: 'Thermodynamics: An Engineering Approach',
          author: 'Cengel & Boles',
          edition: '9th',
          summary: 'Basic principles of thermodynamics.',
          image: 'https://images.unsplash.com/photo-1526666360229-415516a245f7?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'td-2',
          title: 'Heat and Mass Transfer',
          author: 'Incropera & DeWitt',
          edition: '7th',
          summary: 'Fundamentals of Heat and Mass Transfer.',
          image: 'https://images.unsplash.com/photo-1526666360229-415516a245f7?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'td-3',
          title: 'Introduction to Thermal Systems Engineering',
          author: 'Moran & Shapiro',
          edition: '2002',
          summary: 'Thermodynamics, Fluid Mechanics, and Heat Transfer.',
          image: 'https://images.unsplash.com/photo-1526666360229-415516a245f7?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'td-4',
          title: 'Thermal Physics',
          author: 'Charles Kittel',
          edition: '2nd',
          summary: 'Introduction to thermal physics.',
          image: 'https://images.unsplash.com/photo-1526666360229-415516a245f7?auto=format&fit=crop&q=80&w=400'
      },
      {
          id: 'td-5',
          title: 'Gas Turbine Theory',
          author: 'Saravanamuttoo',
          edition: '7th',
          summary: 'Principles of gas turbine operation.',
          image: 'https://images.unsplash.com/photo-1526666360229-415516a245f7?auto=format&fit=crop&q=80&w=400'
      }
  ]
};

export const CATEGORIES: BookCategory[] = CATEGORY_NAMES.map((name, idx) => {
  const manualBooks = MANUAL_BOOK_DATA[name];
  return {
    id: `cat-${idx}`,
    title: name,
    description: categoryDescriptions[name] || `Resources for ${name}`,
    image: `https://picsum.photos/seed/${name}/600/400`,
    books: manualBooks ? manualBooks : generateMockBooks(name)
  };
});

// --- AUDIO BOOKS DATA ---

const AUDIO_CATEGORY_NAMES = ["War Memoirs", "Technical Lectures", "Historical Archives"];

const AUDIO_DESCRIPTIONS: Record<string, string> = {
  "War Memoirs": "First-hand accounts of naval battles and operations from veterans.",
  "Technical Lectures": "Deep dives into marine engineering, propulsion, and weapon systems.",
  "Historical Archives": "Chronicles of the Indian Navy's evolution from 1612 to present."
};

const MANUAL_AUDIO_DATA: Record<string, Book[]> = {
  "War Memoirs": [
    { id: 'wm-1', audioUrl: 'https://ia801309.us.archive.org/19/items/prince_bn_librivox/prince_01_machiavelli_64kb.mp3', title: "The Prince", author: " Niccolò Machiavelli", edition: "Audio", summary: "The author explains in simple language about the nature of great men and the characters of the government. ", image: "https://www.loyalbooks.com/image/detail/81.jpg" },
    { id: 'wm-2', audioUrl: 'http://www.archive.org/download/story_of_doctor_dolittle_librivox/doctor_dolittle_01_lofting_64kb.mp3', title: "The Story of Doctor Dolittle", author: " Hugh Lofting", edition: "Audio", summary: "The novel depicts the many adventures of Dr. John Dolittle as he learns the language of animals and takes on various feats including exotic travel, a dangerous encounter with pirates, and a mission to set right from wrong.", image: "https://www.loyalbooks.com/image/detail/Story-of-Doctor-Dolittle.jpg" },
    { id: 'wm-3', audioUrl: 'http://www.archive.org/download/three_musketeers_0712_librivox/three_musketeers_01_dumas_64kb.mp3', title: "The Three Musketeers", author: " Alexandre Dumas", edition: "Audio", summary: "The main protagonist of the story is D’Artagnan who travels to Paris to realize his dreams of becoming one of the musketeers for the king. But things start to fall apart from the very beginning when his cherished letter of introduction is stolen by a mysterious gentleman", image: "https://www.loyalbooks.com/image/detail/Three-Musketeers.jpg" },
    { id: 'wm-4', audioUrl: 'http://www.archive.org/download/man_thursday_zach_librivox/man_who_was_thursday_01_chesterton_64kb.mp3', title: "The Man Who was Thursday", author: " G. K. Chesterton", edition: "Audio", summary: "Two poets in a London park at sunset, debating on the attributes of poetry and whether it's really a metaphor for anarchy. A group that meets in secret, planning to overthrow the world order. Disguises and deceptions, ideals and ideology. A medley of themes and genres makes this a great read for anyone who's a fan of Chesterton and his iconic Father Brown.", image: "https://www.loyalbooks.com/image/detail/Man-Who-Was-Thursday-Nightmar.jpg" },
    { id: 'wm-5', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', title: "Kargil from the Sea", author: "Adm. Sushil Kumar", edition: "Audio", summary: "How Operation Talwar kept the pressure on Pakistan during the Kargil War.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" },
    { id: 'wm-6', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', title: "Goa Liberation", author: "Comm. K.P. Nair", edition: "Audio", summary: "Operation Vijay and the naval action to liberate Goa from Portuguese rule.", image: "https://images.unsplash.com/photo-1548625906-8d5f30325d97?auto=format&fit=crop&q=80&w=400" },
    { id: 'wm-7', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', title: "The Silent Service", author: "V.Adm. A.K. Chawla", edition: "Audio", summary: "Life onboard Indian submarines: the challenges of long patrols.", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400" },
    { id: 'wm-8', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', title: "Carrier Operations", author: "Capt. R. Sharma", edition: "Audio", summary: "Flying from the deck of INS Vikrant and Viraat: A pilot's perspective.", image: "https://images.unsplash.com/photo-1605218427368-35b81a3dd01c?auto=format&fit=crop&q=80&w=400" },
    { id: 'wm-9', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', title: "Coastal Security Diaries", author: "DIG S.P. Singh", edition: "Audio", summary: "Post-26/11 coastal security architecture and patrolling the maritime boundary.", image: "https://images.unsplash.com/photo-1563206767-5b1d972f9fb4?auto=format&fit=crop&q=80&w=400" },
    { id: 'wm-10', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', title: "Life at Sea", author: "MCPO R.K. Yadav", edition: "Audio", summary: "The unspoken bond between sailors and the sea: tales from the lower deck.", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=400" }
  ],
  "Technical Lectures": [
    { id: 'tl-1', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3', title: "Gas Turbine Operations", author: "Technical Wing", edition: "Audio", summary: "Principles of marine gas turbines, maintenance cycles, and troubleshooting.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-2', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3', title: "Marine Diesel Maintenance", author: "Diesel School", edition: "Audio", summary: "Overhauling routines for large marine diesel engines used in the fleet.", image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-3', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3', title: "Steam Propulsion Basics", author: "Steam Centre", edition: "Audio", summary: "Understanding boilers, turbines, and the steam cycle in legacy ships.", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-4', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3', title: "Nuclear Propulsion Safety", author: "NBCD School", edition: "Audio", summary: "Safety protocols and operational theory for nuclear submarine propulsion.", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-5', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3', title: "Electrical Power Dist.", author: "Electrical Wing", edition: "Audio", summary: "Managing high voltage switchboards and load shedding logic on warships.", image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-6', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3', title: "Weapon Control Systems", author: "Weapon Wing", edition: "Audio", summary: "Integration of sensors and shooters: The Fire Control Solution.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-7', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: "Radar Technology", author: "Radar School", edition: "Audio", summary: "Wave propagation, detection theory, and modern naval radar applications.", image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-8', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', title: "Sonar Operations", author: "ASW School", edition: "Audio", summary: "Sound propagation in water and detecting submarines.", image: "https://images.unsplash.com/photo-1518364538800-6bae3c2db092?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-9', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', title: "Damage Control Drills", author: "NBCD School", edition: "Audio", summary: "Standard operating procedures for fire, flood, and toxic gas emergencies.", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400" },
    { id: 'tl-10', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', title: "Firefighting on Ships", author: "NBCD School", edition: "Audio", summary: "Chemistry of fire and specific firefighting techniques in confined spaces.", image: "https://images.unsplash.com/photo-1552084117-56a9876679b6?auto=format&fit=crop&q=80&w=400" }
  ],
  "Historical Archives": [
    { id: 'ha-1', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', 
    title: "Royal Indian Navy Mutiny", 
    author: "History Cell", 
    edition: "Audio", 
    summary: "The 1946 naval mutiny that accelerated India's independence.", 
    image: "https://images.unsplash.com/photo-1569429583637-67c268846c4e?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-2', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', title: "History of INS Shivaji", author: "INS Shivaji", edition: "Audio", summary: "From HMIS Shivaji to the premier technical training establishment.", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-3', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', title: "Maratha Navy Tactics", author: "Historian P.K. Gokhale", edition: "Audio", summary: "Guerrilla warfare at sea: How Shivaji Maharaj built a navy.", image: "https://images.unsplash.com/photo-1590059523293-13f59c991a04?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-4', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', title: "Colonial Naval History", author: "Archives", edition: "Audio", summary: "The Bombay Marine and the transition to Royal Indian Navy.", image: "https://images.unsplash.com/photo-1585860447387-9290dfc37108?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-5', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', title: "Post-Independence Navy", author: "Naval HQ", edition: "Audio", summary: "Dividing the fleet in 1947 and rebuilding a national navy.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-6', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', title: "Indigenisation Journey", author: "DND", edition: "Audio", summary: "From buying ships to building aircraft carriers: The Make in India story.", image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-7', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3', title: "Presidents Fleet Review", author: "Protocol", edition: "Audio", summary: "The tradition and significance of the PFR throughout history.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-8', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3', title: "Naval Aviation History", author: "Naval Aviation", edition: "Audio", summary: "Wings of the Navy: From Sealanders to MiG-29Ks.", image: "https://images.unsplash.com/photo-1483304528321-0674f0040030?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-9', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3', title: "Submarine Arm History", author: "Submarine Arm", edition: "Audio", summary: "Golden Jubilee of the submarine arm: 50 years of silent service.", image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=400" },
    { id: 'ha-10', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3', title: "Evolution of Warships", author: "DND", edition: "Audio", summary: "From steam frigates to stealth destroyers: technological leaps.", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" }
  ]
};

export const AUDIO_BOOK_LIST: BookCategory[] = AUDIO_CATEGORY_NAMES.map((name, idx) => ({
  id: `audio-cat-${idx}`,
  title: name,
  description: AUDIO_DESCRIPTIONS[name] || "",
  image: `https://picsum.photos/seed/${name}/600/400`,
  books: MANUAL_AUDIO_DATA[name] || []
}));

export const MAGAZINE_LIST: BookCategory[] = [
  {
    id: 'm1',
    title: "Naval Despatch",
    description: "Latest naval journals and station periodicals.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
    books: [
      { 
        id: 'mag-1', 
        title: "Time Magazine 1965", 
        author: "Time Magazine", 
        edition: "Vol 1", 
        summary: "Official technical journal.", 
        image: "https://ia801706.us.archive.org/BookReader/BookReaderImages.php?zip=/10/items/1965-images/1965_jp2.zip&file=1965_jp2/1965_0000.jp2&id=1965-images&scale=1&rotate=0",
        pdfUrl: "https://archive.org/download/1965-images/1965.pdf"
      },
      { 
        id: 'mag-2', 
        title: "Sainik Samachar", 
        author: "MoD", 
        edition: "Aug 2024", 
        summary: "Armed Forces News.", 
        image: "https://archive.org/download/sced-50146/PlayStation%202%20Magazine%20CD%2011/1.jpg",
        pdfUrl: "https://archive.org/download/win-magazine-academy-mega-gennaio-febbraio-2026/Win%20Magazine%20Academy%20Mega%20-%20Gennaio-Febbraio%202026.pdf"
      },
      { 
        id: 'mag-3', 
        title: "Quarterdeck", 
        author: "Navy Foundation", 
        edition: "2024", 
        summary: "Veterans journal.", 
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-4', 
        title: "Blue Water Gazette", 
        author: "Maritime Cell", 
        edition: "Issue 5", 
        summary: "Strategic affairs.", 
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-5', 
        title: "The Sea Warrior", 
        author: "Personnel Branch", 
        edition: "Special", 
        summary: "Life at sea.", 
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-6', 
        title: "Technical Bulletin", 
        author: "INS Shivaji", 
        edition: "Tech 2024", 
        summary: "Engineering updates.", 
        image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-7', 
        title: "Marine Engineering Vol", 
        author: "IMEI", 
        edition: "Vol 88", 
        summary: "Industry standards.", 
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-8', 
        title: "Electrical Journal", 
        author: "Valsura", 
        edition: "Issue 12", 
        summary: "Power systems.", 
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-9', 
        title: "Weapon Systems Review", 
        author: "Dronacharya", 
        edition: "Confidential", 
        summary: "Gunnery updates.", 
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      { 
        id: 'mag-10', 
        title: "INS Shivaji Annual", 
        author: "Training Team", 
        edition: "Yearbook", 
        summary: "Course passing out.", 
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    ]
  }
];

export const NEW_ARRIVALS: Book[] = [
  { id: 'na-1', title: "15 Secret Successful People Know", author: "Kevin Eiken", summary: "Explores the unique habits and mindsets used by high achievers to reach their goals.", edition: "1st", image: "https://m.media-amazon.com/images/I/61awVG13JnL._UF1000,1000_QL80_.jpg", badge: "Self Help" },
  { id: 'na-2', title: "40 years with Abdul Kalam", author: "Pillai", summary: "Provides a personal account of the life and legacy of Indias former president through the eyes of an associate.", edition: "1st", image: "https://m.media-amazon.com/images/I/51sMT4Zw0PL._SY425_.jpg", badge: "Biography" },
  { id: 'na-3', title: "A Higher Loyalty", author: "Comey", summary: "Examines the principles of ethical leadership and the search for truth in high stakes government environments.", edition: "1st", image: "https://m.media-amazon.com/images/I/51L+n4UD99L._SY445_SX342_FMwebp_.jpg", badge: "Memoir" },
  { id: 'na-4', title: "A Hundred Horizons: The Indian Ocean", author: "Bose", summary: "Explores the historical and cultural connections across the Indian Ocean beyond colonial boundaries.", edition: "1st", image: "https://m.media-amazon.com/images/I/61lVhHAfWqL.jpg", badge: "History" },
  { id: 'na-5', title: "A Slip of the Line", author: "Premdas", summary: "Analyzes how human errors and small mistakes can lead to major failures in complex operational systems.", edition: "1st", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGu2qPYXoLiB5VFrudaHsKbW_3kvZQythvp8ygizo2zySQeb0g", badge: "Non-Fiction" },
  { id: 'na-6', title: "Advent Think Independent", author: "Singh", summary: "Offers strategies for independent thinking and problem solving in challenging situations.", edition: "1st", image: "https://img.notionusercontent.com/ext/https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51iDsdBdIBL._SY385_.jpg/size/w=2000?exp=1769955626&sig=M4M2XopsWV5rwwUXq_ITLT-g7Mr6M6HV9CQIGJkuUFc&id=2f82263b-0491-81aa-b9df-d45182e11790&table=block", badge: "Self Help" },
  { id: 'na-7', title: "Asia's Caution", author: "Kapler", summary: "Tells a story focused on the importance of vigilance and careful decision making.", edition: "1st", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_esNJAsNc8-dzArmNB183wiSc2NzjQQcMvmWDPqN7vvABS8-XH0qAgt7TtwcVRJ3cDvDy1_qhSbfUNYlELbgN9CNzc1MG2WPznpmSA&s=10", badge: "Fiction" },
  { id: 'na-8', title: "Boyd: The fighter Pilot who changed the Art of War", author: "Camen", summary: "Chronicles the heroic military career and impact of a distinguished Indian aviator.", edition: "1st", image: "https://m.media-amazon.com/images/I/61hmRQmi+VL._AC_UF1000,1000_QL80_.jpg", badge: "History" },
  { id: 'na-9', title: "Breaking the Code SSB: Psychological Tests", author: "Sinha", summary: "Discusses the behavioral patterns and regulatory challenges within financial markets.", edition: "1st", image: "https://m.media-amazon.com/images/I/61DtpfnEvtL._SY445_SX342_FMwebp_.jpg", badge: "Finance" },
  { id: 'na-10', title: "Chaos: Making a New Science", author: "James Gleick", summary: "Explains how scientists discovered order and patterns within seemingly random natural systems.", edition: "1st", image: "https://m.media-amazon.com/images/I/41gSdt7RO-L._SY445_SX342_FMwebp_.jpg", badge: "Science" },
  { id: 'na-11', title: "Creating Implementing and Managing Effective Training & Development", author: "Kurt Keiger", summary: "Provides a framework for developing and maintaining robust organizational strategies.", edition: "1st", image: "https://m.media-amazon.com/images/I/41oZj0PPpPL._SY445_SX342_QL70_FMwebp_.jpg", badge: "Management" },
  { id: 'na-12', title: "Dead Wake: The Last Crossing of Lusitania", author: "Larsen", summary: "Explores the historical and cultural significance of Indias ancient trade routes.", edition: "1st", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgQWoV8jNwAKdCGUaORJ83v36LaBw8rnyoVMPgM8Y8RqPVL6sGe2rEcMGn_lYau9by-E8U1JxPHew_97Vak13TMXbdKXJ9zLMXrI0Y_o&s=10", badge: "History" },
  { id: 'na-13', title: "Debt of Honour", author: "Clancy", summary: "A political thriller involving a conflict between global powers that leads to a massive security crisis.", edition: "1st", image: "https://m.media-amazon.com/images/I/41hmrp2O9YL._SY445_SX342_FMwebp_.jpg", badge: "Fiction" },
  { id: 'na-14', title: "Defense Logistics for the 21st Century", author: "Tuttle", summary: "Examines the evolving strategies and technologies used to manage military supply chains.", edition: "1st", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94Il1t_v1Wv85ttFss1gawMHCHjI7p8aNoQ&s", badge: "Military" },
  { id: 'na-15', title: "Drive", author: "Pink", summary: "Challenges traditional ideas of motivation by arguing that autonomy and purpose are the true drivers of performance.", edition: "1st", image: "https://m.media-amazon.com/images/I/41PivWdg6GL._SY445_SX342_FMwebp_.jpg", badge: "Psychology" },
  { id: 'na-16', title: "Eisenhower in War and Peace", author: "Smith", summary: "A comprehensive biography of the general and president who shaped the twentieth century.", edition: "1st", image: "https://m.media-amazon.com/images/I/41kFnqNrFTL._SY445_SX342_FMwebp_.jpg", badge: "Biography" },
  { id: 'na-17', title: "Empire of the Seas", author: "Lavery", summary: "Follows a young boys struggle to survive in a Japanese internment camp during World War II.", edition: "1st", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-0x88eRnjzJEuHFBOMlrjk-efnlA8sHkWg&s", badge: "Fiction" },
  { id: 'na-18', title: "Field Marshal Sam Manekshaw (Hindi)", author: "Sood", summary: "Captures the life and legendary military leadership of Indias first field marshal.", edition: "1st", image: "https://m.media-amazon.com/images/I/81+M8-6y7BL._AC_UF1000,1000_QL80_.jpg", badge: "Biography" }
];
