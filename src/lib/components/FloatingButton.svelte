<script>
  export let icon = "+";
  export let onClick = () => {};
</script>

<div class="fab" on:click={onClick}>
  {icon}
</div>

<style>
.fab {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #28a745;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.fab:hover {
  background-color: #1e7e34;
  transform: translateY(-2px);
}

</style>
