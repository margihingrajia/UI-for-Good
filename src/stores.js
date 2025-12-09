import { writable } from 'svelte/store';

export const currentScreen = writable('welcome'); 
export const activeTab = writable('home');

// NEW: Stores the data of the pantry clicked on the map
export const selectedPantry = writable(null);