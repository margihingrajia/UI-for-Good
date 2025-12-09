<script>
  import { currentScreen } from '../stores.js';
</script>

<div class="content">
  <h2>Donate Items</h2>
  <p>Select what you would like to give today.</p>

  <div class="form-group">
    <label>Item Name</label>
    <input type="text" placeholder="e.g. Canned Beans" />
  </div>

  <button class="btn-donate" on:click={() => currentScreen.set('success')}>
    Confirm Donation
  </button>
  
  <button class="btn-back" on:click={() => currentScreen.set('home')}>
    Cancel
  </button>
</div>

<style>
  h2 { color: var(--color-espresso); margin-bottom: 10px; }
  p { color: var(--color-taupe); margin-bottom: 30px; }
  
  .form-group { margin-bottom: 20px; }
  
  input {
    width: 100%;
    padding: 15px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-sand);
    background: var(--color-ivory);
    box-sizing: border-box;
  }
  
  .btn-donate {
    background: var(--color-taupe);
    color: white;
    width: 100%;
    padding: 15px;
    border-radius: var(--radius-md);
    font-weight: bold;
    margin-bottom: 10px;
  }
  .btn-back {
    background: transparent;
    color: var(--color-taupe);
    width: 100%;
    padding: 10px;
  }
</style>