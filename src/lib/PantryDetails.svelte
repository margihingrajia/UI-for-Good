<script>
  import { currentScreen, selectedPantry } from '../stores.js';
</script>

<div class="details-page">
  <div class="header">
    <button on:click={() => currentScreen.set('list')}>&lt; Back</button>
    <span>Pantry Details</span>
    <div></div>
  </div>

  <div class="map-header"></div>

  <div class="content">
    <h1>{$selectedPantry?.name}</h1>
    <p class="address">📍 {$selectedPantry?.address}</p>
    
    <div class="info-row">
      <span>🕒 Hours:</span>
      <strong>{$selectedPantry?.hours}</strong>
    </div>
    <div class="info-row">
      <span>📞 Contact:</span>
      <strong>{$selectedPantry?.phone}</strong>
    </div>
    
    <button class="btn-directions">Get Directions</button>
  </div>
</div>

<style>
  .header { display: flex; justify-content: space-between; padding: 15px; align-items: center; background: white; }
  .header button { border: none; background: none; font-size: 16px; cursor: pointer; }
  
  .map-header { height: 150px; background-color: #ddd; background-image: url('https://placehold.co/600x200/png'); background-size: cover; }
  
  .content { padding: 24px; background: white; border-radius: 20px 20px 0 0; margin-top: -20px; position: relative; min-height: 50vh; }
  h1 { margin-top: 0; font-size: 24px; }
  .address { color: #666; margin-bottom: 20px; }
  .info-row { margin-bottom: 15px; font-size: 15px; }
  
  .btn-directions {
    background-color: #88B089; color: white; width: 100%; border: none; padding: 16px; border-radius: 30px; font-size: 16px; font-weight: bold; margin-top: 30px; cursor: pointer;
  }
</style>