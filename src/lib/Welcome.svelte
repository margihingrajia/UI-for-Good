<script>
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { currentScreen } from '../stores.js';
  import Logo from './components/Logo.svelte';

  // UPDATED: Verified US-based hunger statistics
  const quotes = [
    "47 million people in the U.S. face food insecurity.",
    "1 in 5 children in America are at risk of hunger.",
    "Nearly 40% of the U.S. food supply is wasted every year.",
    "Over 50 million people rely on food pantries for help.",
    "Your single donation can provide meals for 3 days."
  ];

  let currentQuoteIndex = 0;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 5000); 
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="welcome-screen">
  <div class="center-content">
    
    <div class="logo-container">
       <Logo />
    </div>

    <h1>Welcome to Pantry Pop</h1>
    
<div class="quote-carousel-container">
      {#key currentQuoteIndex}
        <p 
          class="quote"
          in:fly={{ x: 50, duration: 800, delay: 200 }} 
          out:fade={{ duration: 500 }}
        >
          "{quotes[currentQuoteIndex]}"
        </p>
      {/key}
    </div>

    <p class="sub">Connect with local pantries to give or get help.</p>
  </div>
  
  <button class="btn-primary" on:click={() => currentScreen.set('home')}>
    Get Started
  </button>
</div>

<style>
  /* ... (Styles remain exactly the same as previous step) ... */
  .welcome-screen {
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    padding-top: 40px; 
    box-sizing: border-box;
    text-align: center;
    background-color: var(--color-cream);
  }

  .center-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px; 
  }

  .logo-container {
    transform: scale(3.5);
    margin-bottom: 50px; 
    margin-top: 20px;
  }

  h1 { 
    font-size: 30px; 
    color: var(--color-espresso); 
    margin-bottom: 20px; 
    line-height: 1.2; 
  }
  
  .quote-carousel-container {
    height: 80px; 
    position: relative;
    width: 90%; 
    margin-bottom: 15px;
    display: flex; 
    justify-content: center;
    align-items: center; 
  }

  .quote { 
    position: absolute;
    width: 100%;
    margin: 0; 
    font-style: italic; 
    color: var(--color-espresso); 
    font-weight: 500; 
    font-size: 18px;
  }
  
  .sub { 
    color: var(--color-taupe); 
    font-size: 14px; 
    margin: 0;
    margin-top: 10px; 
  }
  
  .btn-primary {
    background-color: var(--color-taupe); 
    color: white; 
    padding: 16px;
    border-radius: 30px; 
    font-size: 16px; 
    font-weight: bold; 
    width: 100%; 
    margin-bottom: 10px; 
  }
</style>