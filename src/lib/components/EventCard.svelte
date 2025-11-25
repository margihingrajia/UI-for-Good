<script>
  export let title = "Event Title";
  export let description = "Event description here";
  export let date = "Date/Time";
  export let onJoin = () => {};
</script>

<div class="event-card">
  <h3>{title}</h3>
  <p>{description}</p>
  <p class="date">{date}</p>
  <button on:click={onJoin}>Join Event</button>
</div>

<style>
 .event-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease;
}

.event-card:hover {
  transform: translateY(-2px);
}

.event-card h3 {
  font-size: 18px;
  color: #111;
}

.event-card p {
  font-size: 14px;
  color: #555;
}

.event-card .date {
  font-size: 13px;
  color: #888;
}

.event-card button {
  margin-top: 10px;
  padding: 10px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
}

.event-card button:hover {
  background-color: #1e7e34;
}

</style>
