import { writable } from 'svelte/store';
import { initialPantries } from './lib/data.js';

export const currentScreen = writable('welcome'); 
export const activeTab = writable('home');
export const selectedPantry = writable(null);

// Sorting logic
const sortedPantries = [...initialPantries].sort((a, b) => {
  const distA = parseFloat(a.distance);
  const distB = parseFloat(b.distance);
  return distA - distB; 
});

export const pantriesStore = writable(sortedPantries);

export const userStatsStore = writable({
  name: "Margaret Williams",
  joined: "Member since 2023",
  impact: 12, 
  points: 350, 
  history: [
    { id: 1, pantry: "UC Bearcats Pantry", date: "Oct 24", items: "Canned Goods x5" },
    { id: 2, pantry: "St. Monica-St. George (UC)", date: "Sep 12", items: "Fresh Produce x3" },
    { id: 3, pantry: "UC Bearcats Pantry", date: "Aug 05", items: "Hygiene Pack x1" }
  ]
});

// --- THIS IS THE MISSING PIECE ---
export const preSelectedPantryId = writable(null);