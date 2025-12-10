<script>
  import { currentScreen, userStatsStore } from '../stores.js';
</script>

<div class="content">
  <div class="profile-header">
    <div class="avatar">MW</div>
    <h2>{$userStatsStore.name}</h2>
    <p>{$userStatsStore.joined}</p>
  </div>

  <div class="stats-container">
    <div class="stat-box">
      <span class="num">{$userStatsStore.impact}</span>
      <span class="label">Donations</span>
    </div>
    <div class="stat-box">
      <span class="num">{$userStatsStore.points}</span>
      <span class="label">Karma Points</span>
    </div>
  </div>

  <div class="menu-list">
    <button class="menu-item">
      <span>⚙️ Account Settings</span>
      <span class="arrow">›</span>
    </button>
    <button class="menu-item">
      <span>🔔 Notifications</span>
      <span class="arrow">›</span>
    </button>
    <button class="menu-item">
      <span>❤️ Favorite Pantries</span>
      <span class="arrow">›</span>
    </button>
  </div>

  <h4 class="section-title">Recent Activity</h4>
  
  <div class="history-list">
    {#each $userStatsStore.history as item}
      <div class="history-item">
        <div class="h-info">
          <span class="h-pantry">{item.pantry}</span>
          <span class="h-date">{item.date}</span>
        </div>
        <span class="h-detail">{item.items}</span>
      </div>
    {/each}
  </div>

  <button class="logout-btn" on:click={() => currentScreen.set('welcome')}>
    Log Out
  </button>
</div>

<style>
  /* Same styles as before */
  .profile-header { display: flex; flex-direction: column; align-items: center; margin-bottom: 30px; }
  .avatar { width: 80px; height: 80px; background: var(--color-taupe); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; margin-bottom: 15px; }
  h2 { color: var(--color-espresso); margin: 0 0 5px 0; }
  p { color: var(--color-taupe); margin: 0; font-size: 14px; }
  .stats-container { display: flex; gap: 15px; margin-bottom: 30px; }
  .stat-box { flex: 1; background: var(--color-ivory); border: 1px solid var(--color-sand); padding: 15px; border-radius: var(--radius-md); text-align: center; display: flex; flex-direction: column; }
  .num { font-size: 24px; font-weight: bold; color: var(--color-espresso); }
  .label { font-size: 12px; color: var(--color-taupe); text-transform: uppercase; margin-top: 5px; }
  .menu-list { background: var(--color-ivory); border-radius: var(--radius-md); border: 1px solid var(--color-sand); overflow: hidden; margin-bottom: 30px; }
  .menu-item { width: 100%; display: flex; justify-content: space-between; padding: 15px; background: transparent; border-bottom: 1px solid var(--color-sand); color: var(--color-espresso); font-size: 15px; }
  .menu-item:last-child { border-bottom: none; }
  .arrow { color: var(--color-sand); font-weight: bold; font-size: 20px; }
  .section-title { color: var(--color-espresso); margin-bottom: 15px; }
  .history-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; max-height: 300px; overflow-y: auto; }
  .history-item { background: var(--color-ivory); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--color-sand); }
  .h-info { display: flex; justify-content: space-between; margin-bottom: 5px; }
  .h-pantry { font-weight: bold; color: var(--color-espresso); font-size: 14px; }
  .h-date { color: var(--color-taupe); font-size: 12px; }
  .h-detail { color: var(--color-taupe); font-size: 13px; }
  .logout-btn { width: 100%; color: #BC4749; background: transparent; padding: 15px; font-weight: bold; margin-bottom: 20px; }
</style>