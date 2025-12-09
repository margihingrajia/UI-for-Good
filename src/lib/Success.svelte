<script>
  import { currentScreen } from '../stores.js';
</script>

<div class="success-screen">
  <div class="icon">🎉</div>
  <h2>Thank you!</h2>
  <p>Your donation helps feed the community.</p>
  <button on:click={() => currentScreen.set('home')}>Back to Home</button>
</div>

<style>
  .success-screen {
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }
  .icon { font-size: 60px; margin-bottom: 20px; }
  h2 { color: var(--color-espresso); }
  p { color: var(--color-taupe); margin-bottom: 30px; }
  button {
    padding: 12px 24px;
    background: var(--color-sand);
    border-radius: var(--radius-md);
    color: var(--color-espresso);
    font-weight: bold;
  }
</style>