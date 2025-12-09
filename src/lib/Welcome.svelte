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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    text-align: center;
    background-color: var(--color-cream);
  }
  .center-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .heart {
    font-size: 80px;
    margin-bottom: 20px;
    color: #C18C8C; /* Muted pink/brown for the heart */
  }
  h1 {
    font-size: 32px;
    color: var(--color-espresso);
    margin-bottom: 24px;
  }
  .quote {
    font-style: italic;
    color: var(--color-espresso);
    font-weight: 500;
    margin-bottom: 20px;
  }
  .sub {
    color: var(--color-taupe);
    font-size: 14px;
  }
  .btn-primary {
    background-color: var(--color-taupe);
    color: white;
    padding: 16px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
  }
</style>