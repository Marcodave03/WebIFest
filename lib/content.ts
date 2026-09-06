import type { Island } from '@/components/island-index';
import type { Slide } from '@/components/coverflow';

export const PILLARS = [
  {
    image: '/img/home1.webp',
    title: 'Nusa Tenggara Timur',
    body: 'The eastern end of the Lesser Sundas: 22 regencies spread across a province that is more sea than land.',
  },
  {
    image: '/img/home2.webp',
    title: 'Landscapes that change hourly',
    body: 'Savannah hills that burn gold in August, three crater lakes that shift colour without warning, reefs you can read a book through.',
  },
  {
    image: '/img/home3.webp',
    title: 'Culture kept in the hands',
    body: 'Ikat dyed with roots and bark, caci whip duels, megalithic villages on Sumba still built the way they were six centuries ago.',
  },
];

export const HIGHLIGHTS = [
  {
    image: '/img/cardhome1.webp',
    kicker: 'National Park',
    title: 'Komodo & Rinca',
    body: 'The only place on earth with wild Komodo dragons, wrapped around some of the densest reef in the Coral Triangle.',
    meta: '2 days from Labuan Bajo',
  },
  {
    image: '/img/cardhome2.webp',
    kicker: 'Volcanic Flores',
    title: 'Kelimutu Lakes',
    body: 'Three crater lakes on one summit, each a different colour, each one changing on its own schedule. Arrive before sunrise.',
    meta: 'Sunrise trek · Moni',
  },
  {
    image: '/img/cardhome3.webp',
    kicker: 'Living heritage',
    title: 'Sumba Ikat Villages',
    body: 'Peaked-roof clan houses, stone tombs in the courtyard, and looms where a single cloth can take a weaver eight months.',
    meta: 'Waikabubak · Praiyawang',
  },
];

export const ITINERARY = [
  {
    day: 'Day 1—2',
    place: 'Labuan Bajo',
    body: 'Land, get on the water the same afternoon, and watch the flying foxes leave Kalong Island at dusk.',
  },
  {
    day: 'Day 3—4',
    place: 'Komodo National Park',
    body: 'Padar at first light, dragons on Rinca with a ranger, then an afternoon drifting with mantas at Karang Makassar.',
  },
  {
    day: 'Day 5',
    place: 'Overland to Ende',
    body: 'The Trans-Flores road: spider-web rice fields at Cancar, hot springs, coffee villages, and 300 kilometres of switchbacks.',
  },
  {
    day: 'Day 6—7',
    place: 'Kelimutu & home',
    body: 'Up at four for the crater rim, down for blue-stone beaches at Penggajawa, out through Ende.',
  },
];

export const NUMBERS = [
  { icon: '/img/count3.svg', value: 501, suffix: '+', label: 'Islands', decimals: 0 },
  { icon: '/img/count2.svg', value: 1001, suffix: '+', label: 'Living cultures', decimals: 0 },
  { icon: '/img/count1.svg', value: 5.5, suffix: 'M+', label: 'People', decimals: 1 },
];

export const POSTCARDS = [2, 3, 4, 6, 7, 8].map((n) => ({
  src: `/img/carou-${n}.webp`,
  alt: `Scene from East Nusa Tenggara`,
}));

export const VOICES = [
  {
    quote:
      'I came for the dragons and left talking about the coffee. Nobody warns you that Flores is a mountain island first and a dive destination second.',
    name: 'Renata A.',
    from: 'Seven days, Labuan Bajo → Ende',
  },
  {
    quote:
      'Padar at 5am is the only sunrise I have ever queued for that was worth the queue. Bring water. Bring more water.',
    name: 'Tomas L.',
    from: 'Liveaboard, Komodo National Park',
  },
  {
    quote:
      'The weaver in Praiyawang showed me a cloth she had been working on since the previous rainy season. That reframed the whole trip.',
    name: 'Ayu P.',
    from: 'East Sumba',
  },
];

export const ISLANDS: Island[] = [
  {
    name: 'Padar',
    region: 'Komodo National Park',
    known: 'Three bays, three different coloured sands, one very steep staircase.',
    image: '/img/padar.webp',
  },
  {
    name: 'Rinca',
    region: 'Komodo National Park',
    known: 'The reliable island for dragons — smaller, drier and far less crowded than Komodo itself.',
    image: '/img/explore.webp',
  },
  {
    name: 'Taka Makassar',
    region: 'Flores Sea',
    known: 'A crescent sandbar that appears at low tide, sitting on top of a manta cleaning station.',
    image: '/img/ev1.webp',
  },
  {
    name: 'Kanawa',
    region: 'Flores Sea',
    known: 'Reef that starts at the end of the jetty. The easiest good snorkelling in the province.',
    image: '/img/resort-3.webp',
  },
  {
    name: 'Sumba',
    region: 'East Nusa Tenggara',
    known: 'Megalithic villages, Pasola horseback festivals, and the emptiest surf in Indonesia.',
    image: '/img/resort-5.webp',
  },
];

export const STAYS: Slide[] = [
  {
    src: '/img/resort-1.webp',
    name: 'Ayana Komodo',
    location: 'Waecicu Beach',
    price: '$260',
    note: 'Private jetty, sunset deck facing the bay, boats leave from the property.',
  },
  {
    src: '/img/resort-2.webp',
    name: 'Plataran Komodo',
    location: 'Waecicu Beach',
    price: '$310',
    note: 'Hillside villas in a private cove, twelve minutes by boat from town.',
  },
  {
    src: '/img/resort-3.webp',
    name: 'Kanawa Island Resort',
    location: 'Kanawa Island',
    price: '$95',
    note: 'Beach bungalows with the house reef ten steps away. No wifi, deliberately.',
  },
  {
    src: '/img/resort-4.webp',
    name: 'Sudamala Seraya',
    location: 'Seraya Kecil',
    price: '$180',
    note: 'Fifteen cottages on a sandbar island. Dinner is whatever came in that morning.',
  },
  {
    src: '/img/resort-5.webp',
    name: 'Nihi Sumba',
    location: 'Southwest Sumba',
    price: '$1,200',
    note: 'Horses on the beach at dawn and a left-hand break reserved for ten guests a day.',
  },
];
