<script>
  import Card from './components/Card.svelte';
  import EventCard from './components/EventCard.svelte';
  import PantryDetails from './PantryDetails.svelte';
  import Logo from './components/Logo.svelte';
  // IMPORT activeTab HERE
  import { currentScreen, selectedPantry, pantriesStore, activeTab } from '../stores.js';

  let viewMode = 'list';

  // Helper function to switch everything to Map mode
  function goToMap() {
    currentScreen.set('map');
    activeTab.set('map'); // <--- This highlights the icon in the navbar
  }
</script>

<div class="content">
  <header>
    <div class="logo-container">
       <Logo />
       <span class="app-name">PantryPop</span>
    </div>
  </header>

<section class="actions">
    <Card 
      title="Find Food" 
      icon="🍽️" 
      onClick={() => console.log('Find')} 
      primary={true} 
    />
    
    <Card 
      title="Donate Food" 
      icon="🥫" 
      onClick={() => currentScreen.set('donation')} 
    />
  </section>

  <div class="toggle-container">
    <button class:active={viewMode === 'list'} on:click={() => viewMode = 'list'}>List View</button>
    
    <button class:active={viewMode === 'map'} on:click={goToMap}>Map</button>
  </div>

  <h4 class="section-title">Nearby Pantries ({$pantriesStore.length})</h4>
  
  <div class="list-container">
    {#each $pantriesStore as pantry}
      <EventCard 
        name={pantry.name} 
        address={pantry.address} 
        distance={pantry.distance}
        onClick={() => selectedPantry.set(pantry)} 
      />
    {/each}
  </div>

  {#if $selectedPantry}
    <div class="overlay"> <PantryDetails /> </div>
  {/if}
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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

  .actions {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 24px;
  }

  .toggle-container {
    background: var(--color-sand);
    border-radius: var(--radius-md);
    padding: 4px;
    display: flex;
    margin-bottom: 20px;
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
    outline: none;
  }

  .toggle-container button.active {
    background: var(--color-ivory);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .section-title {
    margin-bottom: 10px;
    color: var(--color-espresso);
  }

  .list-container {
    border-radius: var(--radius-md);
    overflow: hidden;
    border: none; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    background: var(--color-ivory);
    margin-bottom: 20px;
  }

  .overlay { 
    position: absolute;
    bottom: 90px; 
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