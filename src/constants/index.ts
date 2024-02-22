import {
  atm,
  busStop,
  policeStation,
  clinic,
  fireStation,
  waterSource,
  toilets,
  festival1,
  festival2,
  festivalLogo,
  jagannath1,
  jagannath2,
  jagannath3,
  jagannathLogo,
  trade1,
  trade2,
  trade3,
  sunsetLogo,
  lightHouseLogo,
  templeLogo,
  parkLogo,
  lightHouse1,
  lightHouse2,
  beachLogo,
  jagannathTemple1,
  jagannathTemple2,
  park1,
  park2,
  park3,
  beach1,
  beach2,
} from "@assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "nearbyTouristSpots",
    title: "Nearby Tourist Spots",
  },
  {
    id: "facilities",
    title: "Facilities",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const history = [
  {
    title: "Trade Port",
    position: "top-[12%] right-2",
    intial: { x: -100, opacity: 0 },
    icon: sunsetLogo,
    description: [
      "The old trade port at Puri Beach was a bustling hub of commerce and cultural exchange, where merchants from distant lands converged to trade goods and ideas. It served as a gateway to the sea, connecting the coastal city of Puri to the maritime trade routes of the ancient world.",
    ],
    mainDescription: [
      "In antiquity, the trade port at Puri Beach stood as a testament to the rich tapestry of maritime commerce that defined the Indian subcontinent. Situated along the eastern coast of India, Puri Beach served as a vital nexus for trade, connecting the bustling city to the vast expanse of the Indian Ocean. The port's origins trace back centuries, echoing the footsteps of merchants and seafarers who navigated the seas in search of prosperity and adventure.",
      "The allure of Puri Beach as a trading post stemmed from its strategic location along ancient maritime routes. Ships from distant lands, laden with exotic spices, textiles, and precious metals, would dock at the port, their billowing sails casting shadows against the sun-kissed waters. The air resonated with the melodic cadence of diverse languages and the vibrant exchange of goods, fostering an atmosphere of cultural dynamism and cosmopolitanism.",
    ],
    images: [trade1, trade2, trade3],
  },
  {
    title: "Incarnation of Lord Jagannath",
    position: "left-2 top-[40%] translate-y-[-50%]",
    intial: { x: 100, opacity: 0 },
    icon: jagannathLogo,
    description: [
      "The incarnation of Lord Jagannath in Puri Beach refers to the Rath Yatra, a Hindu festival where the deities Lord Jagannath, Lord Balabhadra, and Devi Subhadra are taken out in grand processions on chariots from the Jagannath Temple to the Gundicha Temple located at the Puri Beach. ",
    ],
    mainDescription: [
      "The incarnation of Lord Jagannath in Puri Beach is a grand spectacle known as the Rath Yatra, a significant Hindu festival celebrated with fervor and devotion in the coastal town of Puri, Odisha, India. This festival marks the annual journey of Lord Jagannath, an incarnation of Lord Vishnu, along with his siblings, Lord Balabhadra, and Devi Subhadra, from the Jagannath Temple to the Gundicha Temple, situated at the Puri Beach.",
      "The Rath Yatra holds deep spiritual significance in Hindu mythology. According to Hindu scriptures, Lord Jagannath along with his siblings visit their aunt's house at Gundicha Temple during this time. The chariots used in the procession are intricately designed and are symbolic of different aspects of spirituality and cosmology.",
    ],
    images: [jagannath1, jagannath2, jagannath3],
  },
  {
    title: "Puri Festival",
    position: "right-2 top-[70%] translate-y-[-50%]",
    intial: { x: -100, opacity: 0 },
    icon: festivalLogo,
    description: [
      "The Puri Beach Festival held annually at Puri Beach in India is a vibrant celebration of Odisha's rich culture, showcasing traditional music, dance, art, and cuisine.",
    ],
    mainDescription: [
      "The Puri Beach Festival is a renowned event held annually on the golden shores of Puri Beach in Odisha, India. This festival serves as a melting pot of cultural extravagance, where the rich tapestry of Odisha's heritage comes alive against the backdrop of the expansive Bay of Bengal.",
      "Lasting for several days, the festival is a kaleidoscope of traditional music, dance, art, and cuisine, offering visitors a glimpse into the soul of Odisha. The rhythmic beats of Odissi music, the graceful movements of classical Odissi dance, and the vibrant colors of local handicrafts create an immersive experience for attendees.",
    ],
    images: [festival1, festival2],
  },
];

const ImportantPlaces = [
  {
    title: "Puri Light House",
    position: "top-[55%] left-2",
    intial: { x: -100, opacity: 0 },
    icon: lightHouseLogo,
    description: [
      "Perched gracefully on the coastline of Puri Beach, the Puri Lighthouse stands tall as both a symbol of maritime safety and a captivating tourist attraction. Rising against the azure backdrop of the Bay of Bengal, this iconic structure casts its guiding light over the waters, aiding ships in navigation while adding to the scenic charm of the coastal landscape.",
      "Built to withstand the test of time, the Puri Lighthouse has become an integral part of the city's skyline, attracting visitors from far and wide to witness its grandeur and explore the panoramic vistas it offers. As one ascends its spiraling staircase, a sense of anticipation builds, leading to the ultimate reward: a breathtaking view that stretches as far as the eye can see.",
    ],
    images: [lightHouse1, lightHouse2],
  },
  {
    title: "Jagannath Temple",
    position: "right-20 top-[15%] translate-y-[-50%]",
    intial: { x: 100, opacity: 0 },
    icon: templeLogo,
    description: [
      "The Jagannath Temple stands as a symbol of religious fervor and architectural brilliance on the shores of Puri Beach in the Indian state of Odisha. Constructed in the 12th century by King Anantavarman Chodaganga Deva, the temple is dedicated to Lord Jagannath, one of the incarnations of the Hindu deity Vishnu.",
      "The temple complex is a sprawling architectural marvel, characterized by its towering spires, intricately carved pillars, and a vast courtyard bustling with devotees. The main shrine, known as the sanctum sanctorum houses the idols of Lord Jagannath, his brother Balabhadra, and their sister Subhadra. These idols, made of wood and adorned with precious ornaments, are ceremoniously replaced every 12 to 19 years in a grand ritual known as the Nabakalebara.",
    ],
    images: [jagannathTemple1, jagannathTemple2],
  },
  {
    title: "Mahatma Gandhi Park",
    position: "right-2 top-[40%] translate-y-[-50%]",
    intial: { x: -100, opacity: 0 },
    icon: parkLogo,
    description: [
      "Mahatma Gandhi Park stands as a serene oasis in the bustling coastal town of Puri, situated adjacent to the majestic Puri Beach along the eastern coast of India. This public park, dedicated to the memory of Mahatma Gandhi, embodies the essence of tranquility and reverence.",
      "As one enters the park, a sense of calm envelops the surroundings, with the gentle rustle of leaves and the melody of birdsong creating a soothing ambiance. The park's design is thoughtfully crafted to offer visitors a respite from the clamor of daily life, inviting them to immerse themselves in nature's embrace.",
    ],
    images: [park1, park2, park3],
  },
  {
    title: "Puri Golden Beach",
    position: "right-2 top-[70%] translate-y-[-50%]",
    intial: { x: -100, opacity: 0 },
    icon: beachLogo,
    description: [
      "Puri Golden Beach, nestled along the eastern coast of India in the historic city of Puri, is a pristine stretch of shoreline that epitomizes the allure of coastal beauty. With its shimmering golden sands stretching as far as the eye can see, gently caressed by the waves of the Bay of Bengal, this beach stands as an idyllic retreat for travelers seeking tranquility and rejuvenation.",
      "As the sun rises over the horizon, casting its warm hues across the waters, Puri Golden Beach awakens to a symphony of sights and sounds. Fishermen set out in their colorful boats, casting nets into the glistening sea, while locals and tourists alike embark on leisurely strolls along the shore, reveling in the cool sea breeze and the soothing rhythm of the waves.",
    ],
    images: [beach1, beach2],
  },
];

const Advertisement = [
  {
    title: "Food and Sweets",
    position: "top-[12%] right-2",
    intial: { x: -100, opacity: 0 },
    Links: "",
    images: [trade1, trade2, trade3],
  },
];

const facilities = [
  { src: busStop, alt: "Busstop", name: "Busstop", text: "BUS\nSTOP" },
  {
    src: policeStation,
    alt: "policeStation",
    name: "Policestation",
    text: "POLICE\nSTATION",
  },
  { src: clinic, alt: "Hospital", name: "Hospital", text: "HOSPITAL" },
  {
    src: fireStation,
    alt: "fireStation",
    name: "Firestation",
    text: "FIRE\nSTATION",
  },
  {
    src: waterSource,
    alt: "waterSource",
    name: "Watersource",
    text: "WATER\nSOURCE",
  },
  { src: toilets, alt: "Toilet", name: "Toilet", text: "TOILETS" },
  { src: atm, alt: "atm", name: "Atm", text: "ATM" },
];

const validNames = [
  "Busstop",
  "Watersource",
  "Policestation",
  "Toilet",
  "Firestation",
  "Hospital",
  "Atm",
];

export { history, facilities, validNames, ImportantPlaces, Advertisement };
