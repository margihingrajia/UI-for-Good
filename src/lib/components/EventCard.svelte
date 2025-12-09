<script>
  export let name = "";
  export let address = "";
  export let distance = "";
  // New prop to handle clicks
  export let onClick = () => {};
</script>

<button class="pantry-card" on:click={onClick}>
  <div class="info">
    <h3>{name}</h3>
    <p>{address}</p>
  </div>
  <div class="meta">
    <span class="distance">{distance}</span>
  </div>
</button>

<style>
  .pantry-card {
    background: var(--color-ivory);
    border-bottom: 1px solid var(--color-sand);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: background 0.2s;
  }
  .pantry-card:hover {
    background: #FDFCF5; /* Slightly lighter on hover */
  }
  .pantry-card:first-child {
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
  }
  .pantry-card:last-child {
    border-bottom-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
    border-bottom: none;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 4px;
    color: var(--color-espresso);
  }
  p {
    margin: 0;
    font-size: 13px;
    color: var(--color-taupe);
  }
  .distance {
    font-size: 12px;
    color: var(--color-taupe);
    font-weight: 500;
  }
</style>