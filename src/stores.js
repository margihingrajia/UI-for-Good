import { writable } from 'svelte/store';
import { initialPantries } from './lib/data.js';

export const currentScreen = writable('welcome'); 
export const activeTab = writable('home');
export const selectedPantry = writable(null);

// NEW: A writable store initialized with our data
export const pantriesStore = writable(initialPantries);