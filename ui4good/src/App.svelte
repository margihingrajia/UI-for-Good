<script>
  import EventCard from './lib/components/EventCard.svelte';
  import BottomNav from './lib/components/BottomNav.svelte';
  import FloatingButton from './lib/components/FloatingButton.svelte';

  const events = [
    { title: "Community Gardening", description: "Help maintain the local park garden.", date: "Nov 25, 10:00 AM" },
    { title: "Book Club Meetup", description: "Discuss 'The Great Gatsby'.", date: "Nov 26, 3:00 PM" },
    { title: "Neighborhood Clean-Up", description: "Collect trash and beautify streets.", date: "Nov 27, 9:00 AM" }
  ];

  function joinEvent(event) {
    alert(`You joined: ${event.title}`);
  }

  function handleFabClick() {
    alert("Create a new event (prototype placeholder)");
  }
</script>

<main class="container">
  {#each events as event}
    <EventCard 
      title={event.title} 
      description={event.description} 
      date={event.date} 
      onJoin={() => joinEvent(event)} />
  {/each}

  <FloatingButton icon="+" onClick={handleFabClick}/>
  <BottomNav/>
</main>

<style>
  .container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 100vh;
    background: #f5f5f5;
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
  }
</style>
