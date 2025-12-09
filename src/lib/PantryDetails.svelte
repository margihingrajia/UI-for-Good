<script>
  import { selectedPantry } from '../stores.js';
  
  function close() {
    selectedPantry.set(null);
  }

  // NEW: Function to open Google Maps
  function getDirections() {
    if (!$selectedPantry) return;
    
    // Extract lat/lng from the selected pantry
    const [lat, lng] = $selectedPantry.coords;
    
    // Construct the Google Maps URL
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    
    // Open in a new tab
    window.open(url, '_blank');
  }
</script>

<div class="details-card">
  <button class="close-btn" on:click={close}>×</button>
  
  {#if $selectedPantry}
    <h2>{$selectedPantry.name}</h2>
    <p class="address">📍 {$selectedPantry.address}</p>
    
    <div class="stats">
      <div class="stat">
        <span class="label">Stock Level</span>
        <span class="value" class:high={$selectedPantry.stock === 'High'} class:low={$selectedPantry.stock === 'Low'}>
          {$selectedPantry.stock}
        </span>
      </div>
      <div class="stat">
        <span class="label">Open Hours</span>
        <span class="value">{$selectedPantry.hours}</span>
      </div>
    </div>

    <button class="action-btn" on:click={getDirections}>
      Get Directions
    </button>
  {/if}
</div>

<style>
  .details-card {
    background: var(--color-ivory);
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    position: relative;
    border: 1px solid var(--color-sand);
    animation: slideUp 0.3s ease-out;
    pointer-events: auto; /* Ensure clicks register */
  }

  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    background: none;
    color: var(--color-taupe);
    cursor: pointer;
  }

  h2 {
    color: var(--color-espresso);
    margin: 0 0 5px 0;
    font-size: 18px;
    padding-right: 20px;
  }

  .address {
    color: var(--color-taupe);
    font-size: 13px;
    margin-bottom: 15px;
  }

  .stats {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }

  .stat {
    flex: 1;
    background: var(--color-cream);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 11px;
    text-transform: uppercase;
    color: var(--color-taupe);
    margin-bottom: 4px;
  }

  .value {
    font-weight: bold;
    color: var(--color-espresso);
  }
  
  .value.high { color: #588157; } 
  .value.low { color: #BC4749; } 

  .action-btn {
    width: 100%;
    background: var(--color-espresso);
    color: white;
    padding: 12px;
    border-radius: 12px;
    font-weight: bold;
    transition: opacity 0.2s;
  }
  
  .action-btn:active {
    opacity: 0.9;
  }
</style>