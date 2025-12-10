<script>
  // Import the navigation stores
  import { selectedPantry, pantriesStore, currentScreen, preSelectedPantryId } from '../stores.js';
  
  $: livePantry = $pantriesStore.find(p => p.id === $selectedPantry?.id);

  function close() {
    selectedPantry.set(null);
  }

  function getDirections() {
    if (!livePantry) return;
    const [lat, lng] = livePantry.coords;
    window.open(`http://googleusercontent.com/maps.google.com/3{lat},${lng}`, '_blank');
  }

  // --- NEW DONATION FUNCTION ---
  function handleDonate() {
    if (!livePantry) return;
    // 1. Pre-select this pantry
    preSelectedPantryId.set(livePantry.id);
    // 2. Switch to donation screen
    currentScreen.set('donation');
  }
</script>

<div class="details-card">
  <button class="close-btn" on:click={close}>×</button>
  
  {#if livePantry}
    <h2>{livePantry.name}</h2>
    <p class="address">📍 {livePantry.address}</p>
    
    <div class="inventory-grid">
      <div class="inv-item">
        <span class="icon">🥫</span>
        <span class="count">{livePantry.inventory.canned}</span>
        <span class="label">Canned</span>
      </div>
      <div class="inv-item">
        <span class="icon">🍎</span>
        <span class="count">{livePantry.inventory.produce}</span>
        <span class="label">Fresh</span>
      </div>
      <div class="inv-item">
        <span class="icon">🍝</span>
        <span class="count">{livePantry.inventory.grains}</span>
        <span class="label">Grains</span>
      </div>
      <div class="inv-item">
        <span class="icon">🧻</span>
        <span class="count">{livePantry.inventory.hygiene}</span>
        <span class="label">Care</span>
      </div>
    </div>

    <div class="actions-row">
      <button class="action-btn outline" on:click={getDirections}>
        Directions
      </button>
      
      <button class="action-btn solid" on:click={handleDonate}>
        Donate
      </button>
    </div>

  {/if}
</div>

<style>
  .details-card {
    background: var(--color-ivory); width: 100%; max-width: 400px;
    border-radius: 20px; padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2); position: relative;
    border: 1px solid var(--color-sand); pointer-events: auto;
    animation: slideUp 0.3s ease-out;
  }
  
  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .close-btn { position: absolute; top: 10px; right: 15px; font-size: 24px; background: none; color: var(--color-taupe); cursor: pointer; border: none; }
  h2 { color: var(--color-espresso); margin: 0 0 5px 0; font-size: 18px; padding-right: 20px; }
  .address { color: var(--color-taupe); font-size: 13px; margin-bottom: 20px; }

  .inventory-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; margin-bottom: 20px; }
  .inv-item { background: var(--color-cream); padding: 10px 5px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; }
  .inv-item .icon { font-size: 20px; margin-bottom: 5px; }
  .inv-item .count { font-weight: bold; color: var(--color-espresso); font-size: 16px; }
  .inv-item .label { font-size: 10px; text-transform: uppercase; color: var(--color-taupe); margin-top: 2px; }

  /* --- NEW BUTTON STYLES --- */
  .actions-row {
    display: flex;
    gap: 10px;
  }

  .action-btn {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    transition: transform 0.1s;
  }

  .action-btn:active {
    transform: scale(0.98);
  }

  /* Style 1: Solid Brown (Primary) */
  .action-btn.solid {
    background: var(--color-espresso);
    color: white;
    border: none;
  }

  /* Style 2: Outline Taupe (Secondary) */
  .action-btn.outline {
    background: transparent;
    color: var(--color-espresso);
    border: 2px solid var(--color-taupe);
  }
</style>