<script>
  import Card from './components/Card.svelte';
  import EventCard from './components/EventCard.svelte';
  import PantryDetails from './PantryDetails.svelte';
  import Logo from './components/Logo.svelte';
  import { currentScreen, selectedPantry, pantriesStore, activeTab, preSelectedPantryId } from '../stores.js';

  let viewMode = 'list';
  let activeMode = 'find'; // 'find' or 'donate'

  function goToMap() {
    currentScreen.set('map');
    activeTab.set('map');
  }

  // LOGIC: If in 'find' mode, show popup. If in 'donate' mode, go to form.
  function handlePantryClick(pantry) {
    if (activeMode === 'find') {
      selectedPantry.set(pantry);
    } else {
      preSelectedPantryId.set(pantry.id); // Save the ID
      currentScreen.set('donation');      // Switch screens
    }
  }
</script>

<div class="content">
  <header>
    <div class="logo-container">
       <Logo />
       <span class="app-name">Pantry Pop</span>
    </div>
  </header>

  <section class="actions">
    <Card 
      title="Find Food" 
      icon="🍽️" 
      onClick={() => activeMode = 'find'} 
      primary={activeMode === 'find'} 
    />
    
    <Card 
      title="Donate Food" 
      icon="🥫" 
      onClick={() => activeMode = 'donate'} 
      filled={activeMode === 'donate'} 
    />
  </section>

  <p class="mode-hint">
    {#if activeMode === 'find'}
      Tap a pantry below to view details.
    {:else}
      Tap a pantry below to <b>start a donation</b>.
    {/if}
  </p>

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
        onClick={() => handlePantryClick(pantry)} 
      />
    {/each}
  </div>

  {#if $selectedPantry && activeMode === 'find'}
    <div class="overlay"> <PantryDetails /> </div>
  {/if}
</div>

<style>
  header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .logo-container { display: flex; align-items: center; gap: 10px; }
  .app-name { font-weight: bold; color: var(--color-espresso); font-size: 20px; }
  
  .actions { display: flex; justify-content: space-between; gap: 15px; margin-bottom: 10px; }
  
  .mode-hint { font-size: 13px; color: var(--color-taupe); margin-bottom: 15px; text-align: center; height: 18px; }
  .mode-hint b { color: var(--color-espresso); }

  .toggle-container { background: var(--color-sand); border-radius: var(--radius-md); padding: 4px; display: flex; margin-bottom: 20px; border: none; }
  .toggle-container button { flex: 1; padding: 8px; border-radius: 8px; background: transparent; color: var(--color-espresso); font-weight: 600; cursor: pointer; border: none; outline: none; }
  .toggle-container button.active { background: var(--color-ivory); box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  
  .section-title { margin-bottom: 10px; color: var(--color-espresso); }
  .list-container { border-radius: var(--radius-md); overflow: hidden; border: none; box-shadow: 0 4px 10px rgba(0,0,0,0.05); background: var(--color-ivory); margin-bottom: 20px; }
  
  .overlay { position: absolute; bottom: 90px; left: 0; width: 100%; z-index: 1000; display: flex; justify-content: center; padding: 0 20px; box-sizing: border-box; pointer-events: none; }
  .overlay > :global(*) { pointer-events: auto; }
</style>