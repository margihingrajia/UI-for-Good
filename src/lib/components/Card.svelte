<script>
  export let title = "Card";
  export let icon = "📦";
  export let onClick = () => {};
</script>

<button class="action-card" on:click={onClick}>
  <div class="icon">{icon}</div>
  <div class="title">{title}</div>
</button>

<style>
  .action-card {
    background-color: var(--color-ivory);
    border: 1px solid var(--color-sand);
    border-radius: var(--radius-lg);
    width: 48%;
    aspect-ratio: 1; /* Makes it square */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(84, 73, 63, 0.05);
    transition: transform 0.1s;
  }
  .action-card:active {
    transform: scale(0.98);
  }
  .icon {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  .title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-espresso);
    text-transform: uppercase;
  }
</style>