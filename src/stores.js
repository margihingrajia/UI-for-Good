import { writable } from 'svelte/store';

// Navigation state: 'welcome', 'home', 'list', 'details', 'donate', 'success'
export const currentScreen = writable('welcome');

// Store the specific pantry selected by the user
export const selectedPantry = writable(null);

// Mock Data for Pantries
export const pantries = [
    { id: 1, name: "Community Table", address: "223 Malle Street, Moatllens, CA", distance: "21m", hours: "1:00 pm - 3:00 pm", phone: "(830) 687-6436" },
    { id: 2, name: "St. Mary's Food Bank", address: "44 West Ave, Phoenix, AZ", distance: "30m", hours: "9:00 am - 5:00 pm", phone: "(555) 123-4567" },
    { id: 3, name: "Church Rules", address: "88 Holy Blvd, Tech City, CA", distance: "20m", hours: "10:00 am - 2:00 pm", phone: "(555) 987-6543" }
];