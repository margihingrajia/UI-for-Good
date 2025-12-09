<script>
  import { currentScreen } from '../stores.js';
</script>

<div class="container">
  <div class="content">
    <div class="check-circle">✓</div>
    <h1>Thank You!</h1>
    <p>Your donation to Community Table is confirmed.</p>
  </div>
  <button class="btn-done" on:click={() => currentScreen.set('home')}>Done</button>
</div>

<style>
/* In src/lib/Welcome.svelte */
.container {
  height: 100%; /* Changed from 100vh */
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 24px 40px; /* Added top padding for Notch */
  background-color: #E8F3E8;
  box-sizing: border-box;
}
  .content { margin-top: 100px; }
  .check-circle { 
    width: 80px; height: 80px; background: #88B089; color: white; font-size: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;
  }
  h1 { color: #2C3E2D; }
  p { color: #666; line-height: 1.5; }
  
  .btn-done {
    background-color: #88B089; color: white; width: 100%; border: none; padding: 16px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer;
  }
</style>