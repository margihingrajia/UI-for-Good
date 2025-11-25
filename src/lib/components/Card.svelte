<script>
  export let title = "Card Title";
  export let description = "Card description goes here";
</script>

<div class="card">
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .card {
    background: #fff;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #555;
  }
</style>
