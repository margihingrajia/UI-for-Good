<script>
  import { onMount, onDestroy } from 'svelte';
  import { selectedPantry } from '../stores.js';
  import { pantries } from './data.js'; // Import shared data
  import PantryDetails from './PantryDetails.svelte';

  let mapElement;
  let map;

  onMount(() => {
    // @ts-ignore
    if (typeof L === 'undefined') return;

    // Center map on Cincinnati
    // @ts-ignore
    map = L.map(mapElement).setView([39.1031, -84.5120], 11);

    // Add tiles
    // @ts-ignore
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // Create Markers from Shared Data
    pantries.forEach(pantry => {
      // @ts-ignore
      const marker = L.marker(pantry.coords).addTo(map);
      
      marker.on('click', () => {
        selectedPantry.set(pantry);
      });
    });

    setTimeout(() => { map.invalidateSize(); }, 200);
  });

  onDestroy(() => {
    if (map) map.remove();
  });
</script>

<div class="map-wrapper">
  <div bind:this={mapElement} class="map-container"></div>

  {#if $selectedPantry}
    <div class="overlay">
      <PantryDetails />
    </div>
  {/if}
</div>

<style>
  .map-wrapper {
    width: 100%;
    position: relative;
    height: calc(100vh - 80px); 
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
    padding: 0 10px;
    box-sizing: border-box;
  }
</style>