<script>
  import { currentScreen, activeTab } from '../../stores.js';
  
  function navigate(tab) {
    activeTab.set(tab);
    
    if(tab === 'home') {
      currentScreen.set('home');
    } else if (tab === 'map') {
      currentScreen.set('map');
    } else if (tab === 'profile') {
      currentScreen.set('profile');
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
    /* CHANGED FROM FIXED TO ABSOLUTE */
    position: absolute; 
    bottom: 0;
    left: 0; /* Ensure it starts at the left edge */
    width: 100%;
    background: var(--color-ivory);
    border-top: 1px solid var(--color-sand);
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
    z-index: 1000;
    
    /* Ensure padding doesn't add to the width */
    box-sizing: border-box; 
    
    /* Round the bottom corners to match the phone frame */
    border-bottom-left-radius: 40px; 
    border-bottom-right-radius: 40px;
    /* Add extra padding for the "Home Bar" area on modern phones */
    padding-bottom: 25px; 
  }

  button {
    background: transparent;
    color: var(--color-sand);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    border: none;
    cursor: pointer;
  }
  
  .icon {
    font-size: 20px;
    margin-bottom: 4px;
  }
  
  button.active {
    color: var(--color-espresso);
    font-weight: bold;
  }
</style>