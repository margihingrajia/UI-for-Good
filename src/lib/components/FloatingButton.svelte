<script>
  export let onClick = () => {};
</script>

<button class="fab" on:click={onClick}>
  +
</button>

<style>
  .fab {
    position: absolute;
    bottom: 90px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--color-taupe);
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
</style>