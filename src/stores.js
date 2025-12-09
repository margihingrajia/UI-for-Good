import { writable } from 'svelte/store';
import { initialPantries } from './lib/data.js';

export const currentScreen = writable('welcome'); 
export const activeTab = writable('home');
export const selectedPantry = writable(null);

// Sorting logic for pantries
const sortedPantries = [...initialPantries].sort((a, b) => {
  const distA = parseFloat(a.distance);
  const distB = parseFloat(b.distance);
  return distA - distB; 
});

export const pantriesStore = writable(sortedPantries);

// --- NEW USER STORE ---
export const userStatsStore = writable({
  name: "Alex Doe",
  joined: "Member since 2023",
  impact: 12, // Starting donations
  points: 350, // Starting karma
  history: [
    { id: 1, pantry: "Freestore Foodbank", date: "Oct 24", items: "Canned Goods x5" },
    { id: 2, pantry: "SEM Food Pantry", date: "Sep 12", items: "Fresh Produce x3" },
    { id: 3, pantry: "Mercy Neighborhood", date: "Aug 05", items: "Hygiene Pack x1" }
  ]
});