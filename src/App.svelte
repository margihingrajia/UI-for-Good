<script>
  import { currentScreen } from './stores.js';
  import Welcome from './lib/Welcome.svelte';
  import Home from './lib/Home.svelte';
  import Donation from './lib/Donation.svelte';
  import Success from './lib/Success.svelte';
  import Map from './lib/Map.svelte';
  import Profile from './lib/Profile.svelte'; // <-- Import the new file
  import BottomNav from './lib/components/BottomNav.svelte';
</script>

<div class="app-container">
  
  {#if $currentScreen === 'welcome'}
    <Welcome />
    
  {:else if $currentScreen === 'home'}
    <Home />
    <BottomNav />
    
  {:else if $currentScreen === 'donation'}
    <Donation />
    <BottomNav />
    
  {:else if $currentScreen === 'success'}
    <Success />
    <BottomNav />
    
  {:else if $currentScreen === 'map'}
    <Map /> 
    <BottomNav />

  {:else if $currentScreen === 'profile'}
    <Profile />
    <BottomNav />
  {/if}
</div>

<style>
  .app-container {
    position: relative;
    min-height: 100vh;
    background-color: var(--color-cream);
    display: flex;
    flex-direction: column;
  }
</style>