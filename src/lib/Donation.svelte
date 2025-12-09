<script>
  import { currentScreen } from '../stores.js';
  
  const categories = [
    { name: "Canned Goods", icon: "🥫" },
    { name: "Dry Goods", icon: "🍝" },
    { name: "Baby Supplies", icon: "🍼" },
    { name: "Other", icon: "💬" }
  ];
</script>

<div class="page">
  <div class="header">
     <button on:click={() => currentScreen.set('home')}>Close</button>
  </div>
  
  <h2>What are you donating?</h2>
  
  <div class="grid">
    {#each categories as cat}
      <div class="tile" on:click={() => currentScreen.set('success')}>
        <div class="icon">{cat.icon}</div>
        <span>{cat.name}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .page { padding: 20px; }
  .header { text-align: right; margin-bottom: 20px; }
  .header button { background: none; border: none; font-size: 16px; cursor: pointer; color: #666; }
  
  h2 { text-align: center; margin-bottom: 40px; color: #2C3E2D; }
  
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  .tile {
    background: #E8F3E8; border-radius: 15px; aspect-ratio: 1;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    cursor: pointer; transition: transform 0.1s;
  }
  .tile:active { transform: scale(0.98); background: #dcebdc; }
  .icon { font-size: 40px; margin-bottom: 10px; }
  span { font-weight: 600; color: #2C3E2D; text-align: center; font-size: 14px; }
</style>