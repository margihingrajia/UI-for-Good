<script>
  import { currentScreen, activeTab } from '../../stores.js';
  
  function navigate(tab) {
    activeTab.set(tab);
    
    if(tab === 'home') {
      currentScreen.set('home');
    } else if (tab === 'map') {
      currentScreen.set('map');
    } else if (tab === 'profile') {
      currentScreen.set('profile'); // <-- Now this works!
    }
  }
</script>

<nav class="bottom-nav">
  <button class:active={$activeTab === 'home'} on:click={() => navigate('home')}>
    <div class="icon">🏠</div>
    <span>Home</span>
  </button>
  
  <button class:active={$activeTab === 'map'} on:click={() => navigate('map')}>
    <div class="icon">📍</div>
    <span>Map</span>
  </button>
  
  <button class:active={$activeTab === 'profile'} on:click={() => navigate('profile')}>
    <div class="icon">👤</div>
    <span>Profile</span>
  </button>
</nav>

<style>
  .bottom-nav {
    position: fixed; bottom: 0; width: 100%; max-width: 480px;
    background: var(--color-ivory); border-top: 1px solid var(--color-sand);
    display: flex; justify-content: space-around; padding: 10px 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05); z-index: 1000;
  }
  button {
    background: transparent; color: var(--color-sand); display: flex;
    flex-direction: column; align-items: center; font-size: 12px;
  }
  .icon { font-size: 20px; margin-bottom: 4px; }
  button.active { color: var(--color-espresso); font-weight: bold; }
</style>