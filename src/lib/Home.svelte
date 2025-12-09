<script>
  import { currentScreen, selectedPantry, pantries } from '../stores.js';

  let viewMode = 'dashboard'; // 'dashboard' or 'map'

  function goToDetails(pantry) {
    selectedPantry.set(pantry);
    currentScreen.set('details');
  }

  function goToDonate() {
    currentScreen.set('donate');
  }
</script>

<div class="page">
  {#if viewMode === 'dashboard'}
    <header>
      <div class="brand">
        <img src="/logo.png" alt="FreePantry Logo" class="logo" />
        <span>FreePantry</span>
        <span class="heart">❤️</span>
      </div>
    </header>

    <div class="actions">
      <div class="card find" on:click={() => viewMode = 'map'}>
        <div class="icon">🍽️</div>
        <span>FIND<br>FOOD</span>
      </div>
      <div class="card donate" on:click={goToDonate}>
        <div class="icon">🥫</div>
        <span>DONATE<br>FOOD</span>
      </div>
    </div>

    <div class="section-title">Nearby Pantries</div>
  {:else}
    <div class="search-bar">
      <input type="text" placeholder="Search pantries..." />
      <div class="toggles">
        <button class="active">List View</button>
        <button>Map</button>
      </div>
    </div>
    <div class="map-placeholder">Map View Loaded</div>
  {/if}

  <div class="list">
    {#each pantries as pantry}
      <div class="list-item" on:click={() => goToDetails(pantry)}>
        <div class="info">
          <h4>{pantry.name}</h4>
          <p>{pantry.address}</p>
        </div>
        <div class="distance">{pantry.distance} mi</div>
      </div>
    {/each}
  </div>

  <div class="bottom-nav">
    <div class="nav-item active" on:click={() => viewMode = 'dashboard'}>🏠<br>Home</div>
    <div class="nav-item" on:click={() => viewMode = 'map'}>📍<br>Map</div>
    <div class="nav-item">👤<br>Profile</div>
  </div>
</div>

<style>
.page {
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 90px;
  min-height: 100%;
  box-sizing: border-box;
  background: #f9f9f9;
  font-family: 'Helvetica Neue', sans-serif;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #2C3E2D;
}

.brand .logo {
  height: 40px;
  width: 40px;
  border-radius: 8px;
}

.brand .heart {
  font-size: 22px;
  margin-left: 5px;
}

.actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.card {
  flex: 1;
  height: 120px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.card:active {
  transform: scale(0.97);
}

.find { background-color: #88B089; }
.donate { background-color: #6C94B3; }

.icon {
  font-size: 30px;
  margin-bottom: 8px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
  color: #2C3E2D;
}

.list {
  max-height: 350px;
  overflow-y: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}

.list-item {
  background: white;
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.1s ease;
}

.list-item:hover {
  background: #f0fdf0;
}

.list-item h4 {
  margin: 0;
  font-size: 16px;
  color: #2C3E2D;
}

.list-item p {
  margin: 2px 0 0 0;
  font-size: 13px;
  color: #666;
}

.distance {
  font-size: 14px;
  color: #888;
}

.search-bar {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.toggles {
  display: flex;
  background: #eee;
  padding: 4px;
  border-radius: 8px;
}

.toggles button {
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: #666;
}

.toggles button.active {
  background: white;
  color: #333;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.map-placeholder {
  background: #e0e0e0;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 16px;
}

.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  z-index: 10;
}

.nav-item {
  text-align: center;
  font-size: 12px;
  color: #888;
  cursor: pointer;
}

.nav-item.active {
  color: #88B089;
  font-weight: bold;
}
</style>
