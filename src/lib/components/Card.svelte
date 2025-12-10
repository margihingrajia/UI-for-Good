<script>
  export let title = "Card";
  export let icon = "📦";
  export let onClick = () => {};
  export let primary = false; 
  export let filled = false;  
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
  
  /* SHARED ACTIVE STYLE for both Primary (Find) and Filled (Donate) */
  .action-card.primary, 
  .action-card.filled {
    border: 2px solid var(--color-taupe); /* The Taupe Outline */
    background-color: #FDFBF7; /* Light background */
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(84, 73, 63, 0.15);
  }

  /* Reset text/icon colors to default since we removed the solid fill */
  .action-card.filled .title,
  .action-card.primary .title {
    color: var(--color-espresso);
  }
  
  .action-card.filled .icon,
  .action-card.primary .icon {
    filter: none;
    opacity: 1;
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