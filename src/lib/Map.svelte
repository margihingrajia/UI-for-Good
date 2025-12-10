<script>
  import { onMount, onDestroy } from 'svelte';
  // Import currentScreen and activeTab to handle navigation
  import { selectedPantry, pantriesStore, currentScreen, activeTab } from '../stores.js';
  import PantryDetails from './PantryDetails.svelte';
  import Logo from './components/Logo.svelte';

  let mapElement;
  let map;

  // Navigation Helper
  function goToList() {
    currentScreen.set('home');
    activeTab.set('home'); // Update the navbar highlight
  }

  onMount(() => {
    // @ts-ignore
    if (typeof L === 'undefined') return;

    // @ts-ignore
    map = L.map(mapElement).setView([39.1031, -84.5120], 11);

    // @ts-ignore
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const unsubscribe = pantriesStore.subscribe(items => {
      items.forEach(pantry => {
        // @ts-ignore
        const marker = L.marker(pantry.coords).addTo(map);
        marker.on('click', () => selectedPantry.set(pantry));
      });
    });

    setTimeout(() => { map.invalidateSize(); }, 200);
    
    return unsubscribe;
  });

  onDestroy(() => {
    if (map) map.remove();
  });
</script>

<div class="map-view-layout">
  
  <header>
    <div class="logo-container">
       <Logo />
       <span class="app-name">Pantry Pop</span>
    </div>
  </header>

  <div class="toggle-wrapper">
    <div class="toggle-container">
      <button on:click={goToList}>List View</button>
      <button class="active">Map</button>
    </div>
  </div>

  <div class="map-wrapper">
    <div bind:this={mapElement} class="map-container"></div>
    {#if $selectedPantry}
      <div class="overlay"> <PantryDetails /> </div>
    {/if}
  </div>

</div>

<style>
  .map-view-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 80px; 
    box-sizing: border-box;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px 20px;
    background-color: var(--color-cream);
    flex-shrink: 0; 
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .app-name {
    font-weight: bold;
    color: var(--color-espresso);
    font-size: 20px;
  }
  
  .user {
    font-weight: bold;
    color: var(--color-espresso);
  }

  /* --- TOGGLE STYLES --- */
  .toggle-wrapper {
    padding: 0 20px 10px 20px; /* Add padding to match page layout */
    background-color: var(--color-cream); /* seamless background */
  }

  .toggle-container {
    background: var(--color-sand);
    border-radius: var(--radius-md);
    padding: 4px;
    display: flex;
    border: none; 
  }

  .toggle-container button {
    flex: 1;
    padding: 8px;
    border-radius: 8px;
    background: transparent;
    color: var(--color-espresso);
    font-weight: 600;
    cursor: pointer;
    border: none; 
  }

  /* Force the 'Map' button to look active permanently on this page */
  .toggle-container button.active {
    background: var(--color-ivory);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .map-wrapper {
    flex: 1; 
    position: relative;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
  }

  .map-container { 
    height: 100%; 
    width: 100%; 
    z-index: 1; 
  }

  .overlay { 
    position: absolute; 
    bottom: 20px; 
    left: 0; 
    width: 100%; 
    z-index: 1000; 
    display: flex; 
    justify-content: center; 
    padding: 0 20px; 
    box-sizing: border-box; 
    pointer-events: none;
  }

  .overlay > :global(*) {
    pointer-events: auto;
  }
</style>