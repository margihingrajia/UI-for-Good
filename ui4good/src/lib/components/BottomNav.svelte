<script>
  const tabs = ["Home", "Events", "Profile"];
</script>

<div class="bottom-nav">
  {#each tabs as tab}
    <div>{tab}</div>
  {/each}
</div>

<style>
.bottom-nav {
  position: fixed;
  bottom: env(safe-area-inset-bottom, 0);
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  padding: 14px 0;
  border-top: 1px solid #ddd;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
  border-radius: 16px 16px 0 0;
}

.bottom-nav div {
  font-size: 16px;
  color: #007bff;
  text-align: center;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.bottom-nav div:hover {
  background-color: rgba(0,123,255,0.1);
}

</style>
