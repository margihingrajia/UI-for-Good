<script>
  export let title = "Card";
  export let icon = "📦";
  export let onClick = () => {};
  export let primary = false; // The Border Style (Find Food)
  export let filled = false;  // NEW: The Solid Style (Donate Food)
</script>

<button 
  class="action-card" 
  class:primary={primary} 
  class:filled={filled}
  on:click={onClick}
>
  <div class="icon">{icon}</div>
  <div class="title">{title}</div>
</button>

<style>
  .action-card {
    background-color: var(--color-ivory);
    border: 1px solid var(--color-sand);
    border-radius: var(--radius-lg);
    width: 48%;
    aspect-ratio: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(84, 73, 63, 0.05);
    transition: all 0.2s ease;
  }
  
  /* Primary = Border Highlight (Find Food) */
  .action-card.primary {
    border: 2px solid var(--color-taupe); 
    background-color: #FDFBF7;
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(84, 73, 63, 0.15);
  }

  /* --- NEW FILLED STYLE (Donate Food) --- */
  .action-card.filled {
    background-color: var(--color-taupe); /* Solid Warm Brown */
    border: 2px solid var(--color-taupe); /* Match border to bg */
    box-shadow: 0 6px 12px rgba(158, 143, 122, 0.3);
  }

  /* Change text colors to white when filled */
  .action-card.filled .title {
    color: white;
  }
  
  /* Make the icon slightly transparent white so it's not too harsh */
  .action-card.filled .icon {
    filter: brightness(0) invert(1); /* Turns emoji white */
    opacity: 0.9;
  }

  .action-card:active {
    transform: scale(0.98);
  }
  
  .icon { font-size: 2.5rem; margin-bottom: 10px; }
  
  .title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-espresso);
    text-transform: uppercase;
  }
</style>