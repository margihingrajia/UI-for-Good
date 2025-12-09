<script>
  import { currentScreen } from '../stores.js';
  import { onDestroy, tick } from 'svelte';

  const stats = [
    `"Every 10 seconds, a child goes hungry."`,
    `"1 in 9 people worldwide don’t know where their next meal is coming from."`,
    `"Your small donation can feed a family for a week."`,
    `"Over 35 million Americans struggle with food insecurity."`,
    `"A single can of food can make a world of difference."`,
    `"Millions go to bed hungry while pantries wait for your help."`,
    `"$1 = 4 meals for someone in need."`,
    `"Hunger doesn’t take a holiday—your help can."`,
    `"No one should sleep hungry tonight."`,
    `"Give a little, feed a lot."`,
    `"Together, we can end hunger in our communities."`,
    `"Every meal counts."`,
    `"Your kindness fills empty plates."`,
    `"Hunger is real—your action is powerful."`,
    `"Share love. Share meals."`,
    `"A full pantry starts with one donation."`,
    `"Food saved is hope delivered."`,
    `"Small acts create big change."`,
    `"The world can be a kinder place, one meal at a time."`,
    `"Hunger ends when we give together."`
  ];

  let index = 0;
  let show = true;

  const rotate = async () => {
    show = false;         // slide out left
    await tick();
    index = (index + 1) % stats.length;
    show = true;          // slide in from right
  };

  const interval = setInterval(rotate, 5000);

  onDestroy(() => clearInterval(interval));
</script>

<div class="welcome-container">
  <div class="logo-area">
    <div class="heart-icon">❤️</div>
    <h1>Welcome to PantryPop</h1>

    <p class="stat" class:show={show}>
      <em>{stats[index]}</em>
    </p>

    <p class="subtitle">
      Connect with local pantries to give or get help.
    </p>
  </div>

  <button class="btn-primary" on:click={() => currentScreen.set('home')}>
    Get Started
  </button>
</div>

<style>
/* -------------------------------
   MAIN LAYOUT
--------------------------------*/
.welcome-container {
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 24px 40px;
  background: #F5F1E8; /* Cream */
  box-sizing: border-box;
  text-align: center;
}

.logo-area {
  margin-top: 80px;
}

/* -------------------------------
   ICON
--------------------------------*/
.heart-icon {
  font-size: 80px;
  color: #9E8F7A; /* Taupe */
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* -------------------------------
   TEXT
--------------------------------*/
h1 {
  font-size: 32px;
  color: #54493F; /* Espresso */
  margin-bottom: 10px;
}

/* -------------------------------
   QUOTE ANIMATION
--------------------------------*/
.stat {
  font-size: 18px;
  font-weight: 600;
  color: #54493F;
  margin: 15px auto;
  display: block;
  max-width: 90%;
  line-height: 1.5;

  /* animation core */
  opacity: 0;
  transform: translateX(40px);  /* start from right */
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* visible state → slide into position */
.stat.show {
  opacity: 1;
  transform: translateX(0);
}

/* when hiding → auto applies non-show state → slides left */
.stat:not(.show) {
  transform: translateX(-40px); /* slide out left */
  opacity: 0;
}

.stat em {
  font-style: italic;
  white-space: normal;
  display: block;
}

/* -------------------------------
   SUBTITLE
--------------------------------*/
.subtitle {
  color: #54493F;
  font-size: 16px;
}

/* -------------------------------
   BUTTON
--------------------------------*/
.btn-primary {
  background-color: #9E8F7A; /* Taupe */
  color: #FFF;
  border: none;
  padding: 16px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}
</style>
