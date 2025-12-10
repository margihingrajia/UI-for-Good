<script>
  import { currentScreen } from '../stores.js';
</script>

<div class="welcome-screen">
  <div class="center-content">
    <div class="heart">🤎</div>
    <h1>Welcome to PantryPop</h1>
    <p class="quote">"Millions go to bed hungry while pantries wait for your help."</p>
    <p class="sub">Connect with local pantries to give or get help.</p>
  </div>
  
  <button class="btn-primary" on:click={() => currentScreen.set('home')}>
    Get Started
  </button>
</div>

<style>
  .welcome-screen {
    /* distinct height to fit viewport exactly */
    height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* Reduced padding from 40px to 20px to save vertical space */
    padding: 20px; 
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
    /* Slightly shift content up visually */
    padding-bottom: 20px; 
  }

  .heart {
    /* Reduced size slightly */
    font-size: 70px; 
    /* Reduced margin */
    margin-bottom: 10px; 
    color: #C18C8C; 
  }

  h1 {
    font-size: 30px;
    color: var(--color-espresso);
    /* Reduced margin */
    margin-bottom: 10px; 
    line-height: 1.2;
  }

  .quote {
    font-style: italic;
    color: var(--color-espresso);
    font-weight: 500;
    /* Reduced margin */
    margin-bottom: 15px; 
    max-width: 90%;
  }

  .sub {
    color: var(--color-taupe);
    font-size: 14px;
    margin: 0;
  }

  .btn-primary {
    background-color: var(--color-taupe);
    color: white;
    padding: 16px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    /* Ensure it doesn't touch the very bottom edge on some phones */
    margin-bottom: 10px; 
  }
</style>