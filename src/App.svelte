<script>
  import { currentScreen } from './stores.js';
  import Welcome from './lib/Welcome.svelte';
  import Home from './lib/Home.svelte';
  import PantryDetails from './lib/PantryDetails.svelte';
  import Donation from './lib/Donation.svelte';
  import Success from './lib/Success.svelte';

  function exitApp() {
    currentScreen.set('welcome');
  }
</script>

<div class="phone-frame">
  <!-- Show exit button only if not on welcome screen -->
  {#if $currentScreen !== 'welcome'}
    <button class="exit-btn" on:click={exitApp}>✖</button>
  {/if}

  <main class="screen-content">
    {#if $currentScreen === 'welcome'}
      <Welcome />
    {:else if $currentScreen === 'home' || $currentScreen === 'list'}
      <Home />
    {:else if $currentScreen === 'details'}
      <PantryDetails />
    {:else if $currentScreen === 'donate'}
      <Donation />
    {:else if $currentScreen === 'success'}
      <Success />
    {/if}
  </main>
</div>

<style>
:global(body) {
  margin: 0;
  background-color: #f2f2f7;
  font-family: 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.phone-frame {
  width: 375px;   
  height: 812px;  
  background: white;
  border-radius: 40px; 
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
  display: flex;
  flex-direction: column;
  position: relative;
}

.exit-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 100;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 0.1s ease;
}

.exit-btn:hover {
  transform: scale(1.1);
}

.screen-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  background: #f9f9f9;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Hide scrollbars */
.screen-content::-webkit-scrollbar { display: none; }
.screen-content { -ms-overflow-style: none; scrollbar-width: none; }
</style>
