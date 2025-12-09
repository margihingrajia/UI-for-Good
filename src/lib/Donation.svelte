<script>
  import { currentScreen, pantriesStore, userStatsStore } from '../stores.js';

  // STEPS: 0=Pantry, 1=Category, 2=Items, 3=Delivery, 4=Success
  let step = 0; 
  let selectedPantryId = null;
  let deliveryMethod = 'dropoff'; 

  // Configuration
  const categories = [
    { id: 'canned', name: 'Canned Goods', icon: '🥫' },
    { id: 'produce', name: 'Fresh Produce', icon: '🍎' },
    { id: 'grains', name: 'Grains & Pasta', icon: '🍝' },
    { id: 'hygiene', name: 'Hygiene & Care', icon: '🧻' }
  ];

  const itemsData = {
    canned: ['Black Beans', 'Tomato Soup', 'Tuna', 'Corn'],
    produce: ['Apples', 'Bananas', 'Carrots', 'Potatoes'],
    grains: ['White Rice', 'Spaghetti', 'Bread', 'Oats'],
    hygiene: ['Bar Soap', 'Toothpaste', 'Shampoo', 'Diapers']
  };

  // State
  let selectedCategories = [];
  let quantities = {}; 
  let itemsToCategoryMap = {}; 

  // Pre-fill helper map
  for (const [cat, items] of Object.entries(itemsData)) {
    items.forEach(item => itemsToCategoryMap[item] = cat);
  }

  // --- ACTIONS ---

  function selectPantry(id) {
    selectedPantryId = id;
    step = 1;
  }

  function toggleCategory(id) {
    if (selectedCategories.includes(id)) {
      selectedCategories = selectedCategories.filter(c => c !== id);
    } else {
      selectedCategories = [...selectedCategories, id];
    }
  }

  function updateQuantity(item, change) {
    const current = quantities[item] || 0;
    const next = Math.max(0, current + change);
    if (next === 0) {
      delete quantities[item];
      quantities = { ...quantities };
    } else {
      quantities = { ...quantities, [item]: next };
    }
  }

  function submitDonation() {
    if (!selectedPantryId) return;

    // 1. UPDATE PANTRY INVENTORY
    pantriesStore.update(currentPantries => {
      return currentPantries.map(p => {
        if (p.id === selectedPantryId) {
          let newInventory = { ...p.inventory };
          for (const [itemName, qty] of Object.entries(quantities)) {
            const catId = itemsToCategoryMap[itemName];
            if (catId) {
              newInventory[catId] = (newInventory[catId] || 0) + qty;
            }
          }
          return { ...p, inventory: newInventory };
        }
        return p;
      });
    });

    // 2. UPDATE USER PROFILE STATS
    const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    
    // Create a summary string (e.g., "Beans x2, Rice x1")
    const summaryString = Object.entries(quantities)
      .map(([name, qty]) => `${name} x${qty}`)
      .join(", ");

    // Find pantry name for history
    let pantryName = "Unknown Pantry";
    const unsub = pantriesStore.subscribe(val => {
       const p = val.find(x => x.id === selectedPantryId);
       if(p) pantryName = p.name;
    });
    unsub();

    // Update the User Store
    userStatsStore.update(stats => {
      return {
        ...stats,
        impact: stats.impact + totalItems,
        points: stats.points + (totalItems * 10), // 10 pts per item
        history: [
          {
            id: Date.now(),
            pantry: pantryName,
            date: "Just now",
            items: summaryString
          },
          ...stats.history // Keep old history
        ]
      };
    });

    step = 4; // Go to success
  }

  function finish() {
    // Reset
    step = 0;
    selectedPantryId = null;
    selectedCategories = [];
    quantities = {};
    deliveryMethod = 'dropoff';
    currentScreen.set('home');
  }
</script>

<div class="content">
  
  {#if step === 0}
    <h2>Select a Pantry</h2>
    <p class="sub-text">Who are you donating to today?</p>
    
    <div class="pantry-list">
      {#each $pantriesStore as pantry}
        <button class="pantry-select-btn" on:click={() => selectPantry(pantry.id)}>
          <span class="p-name">{pantry.name}</span>
          <span class="p-dist">{pantry.distance}</span>
        </button>
      {/each}
    </div>
    
    <div class="footer-actions">
      <button class="btn-text" on:click={() => currentScreen.set('home')}>Cancel</button>
    </div>

  {:else if step === 1}
    <h2>Category</h2>
    <p class="sub-text">What type of food is it?</p>

    <div class="category-grid">
      {#each categories as cat}
        <button 
          class="cat-card" 
          class:selected={selectedCategories.includes(cat.id)}
          on:click={() => toggleCategory(cat.id)}
        >
          <div class="icon">{cat.icon}</div>
          <div class="name">{cat.name}</div>
        </button>
      {/each}
    </div>

    <div class="footer-actions">
      <button class="btn-primary" disabled={selectedCategories.length === 0} on:click={() => step = 2}>Next</button>
      <button class="btn-text" on:click={() => step = 0}>Back</button>
    </div>

  {:else if step === 2}
    <h2>Add Items</h2>
    <div class="items-scroll">
      {#each selectedCategories as catId}
        <div class="category-group">
          <h4 class="group-title">{categories.find(c => c.id === catId).name}</h4>
          {#each itemsData[catId] as item}
            <div class="item-row">
              <span>{item}</span>
              <div class="counter">
                <button on:click={() => updateQuantity(item, -1)}>−</button>
                <span class="count">{quantities[item] || 0}</span>
                <button on:click={() => updateQuantity(item, 1)}>+</button>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>

    <div class="footer-actions">
      <button class="btn-primary" disabled={Object.keys(quantities).length === 0} on:click={() => step = 3}>Next</button>
      <button class="btn-text" on:click={() => step = 1}>Back</button>
    </div>

  {:else if step === 3}
    <h2>Delivery Method</h2>
    <p class="sub-text">How will the pantry get the items?</p>

    <div class="delivery-options">
      <button 
        class="delivery-card" 
        class:selected={deliveryMethod === 'dropoff'}
        on:click={() => deliveryMethod = 'dropoff'}
      >
        <div class="d-icon">🚗</div>
        <div class="d-info">
          <h3>Drop Off</h3>
          <p>I will bring the items to the pantry location.</p>
        </div>
        <div class="radio">{deliveryMethod === 'dropoff' ? '●' : '○'}</div>
      </button>

      <button 
        class="delivery-card" 
        class:selected={deliveryMethod === 'pickup'}
        on:click={() => deliveryMethod = 'pickup'}
      >
        <div class="d-icon">🚚</div>
        <div class="d-info">
          <h3>Request Pickup</h3>
          <p>I need a volunteer to come collect them.</p>
        </div>
        <div class="radio">{deliveryMethod === 'pickup' ? '●' : '○'}</div>
      </button>
    </div>

    <div class="footer-actions">
      <button class="btn-primary" on:click={submitDonation}>Confirm Donation</button>
      <button class="btn-text" on:click={() => step = 2}>Back</button>
    </div>

  {:else if step === 4}
    <div class="success-view">
      <div class="big-icon">🎉</div>
      <h2>Thank You!</h2>
      
      {#if deliveryMethod === 'dropoff'}
        <p class="sub-text">Please bring your items during open hours.</p>
      {:else}
        <p class="sub-text">A volunteer will contact you shortly to coordinate pickup.</p>
      {/if}

      <div class="summary-box">
        <p>Your impact score increased!</p>
      </div>

      <button class="btn-primary" on:click={finish}>Return Home</button>
    </div>
  {/if}

</div>

<style>
  h2 { color: var(--color-espresso); margin: 0 0 5px 0; }
  .sub-text { color: var(--color-taupe); margin-bottom: 20px; font-size: 14px; }

  /* Step 0 & 1 Styles */
  .pantry-list { max-height: 60vh; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;}
  .pantry-select-btn {
    background: var(--color-ivory); border: 1px solid var(--color-sand);
    padding: 15px; border-radius: var(--radius-md);
    display: flex; justify-content: space-between; text-align: left;
    color: var(--color-espresso); font-weight: bold;
  }
  .pantry-select-btn:active { background: var(--color-sand); }
  .p-dist { color: var(--color-taupe); font-weight: normal; font-size: 13px; }

  .category-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
  .cat-card { background: var(--color-ivory); border: 2px solid var(--color-sand); padding: 20px; border-radius: var(--radius-md); display: flex; flex-direction: column; align-items: center; }
  .cat-card.selected { border-color: var(--color-espresso); background-color: #EBE5D9; }
  .icon { font-size: 30px; margin-bottom: 8px; }

  /* Step 2 Styles */
  .items-scroll { max-height: 50vh; overflow-y: auto; margin-bottom: 20px; }
  .item-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed var(--color-sand); }
  .counter { display: flex; align-items: center; background: var(--color-ivory); border-radius: 20px; border: 1px solid var(--color-sand); }
  .counter button { width: 30px; height: 30px; background: transparent; font-weight: bold; }
  .counter .count { width: 25px; text-align: center; font-weight: bold; }

  /* Step 3: Delivery Styles */
  .delivery-options { display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px; }
  .delivery-card {
    background: var(--color-ivory);
    border: 2px solid var(--color-sand);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex;
    align-items: center;
    text-align: left;
    transition: all 0.2s;
  }
  .delivery-card.selected {
    border-color: var(--color-espresso);
    background-color: #EBE5D9;
  }
  .d-icon { font-size: 30px; margin-right: 15px; }
  .d-info { flex: 1; }
  .d-info h3 { margin: 0; font-size: 16px; color: var(--color-espresso); }
  .d-info p { margin: 4px 0 0 0; font-size: 13px; color: var(--color-taupe); }
  .radio { font-size: 20px; color: var(--color-espresso); margin-left: 10px; }

  /* Success & Footer */
  .success-view { text-align: center; padding-top: 40px; }
  .big-icon { font-size: 60px; margin-bottom: 20px; }
  .summary-box { background: var(--color-ivory); padding: 10px; border-radius: 10px; margin: 20px 0; color: var(--color-espresso); font-weight: bold; border: 1px solid var(--color-sand); }

  .footer-actions { margin-top: auto; }
  .btn-primary { background: var(--color-taupe); color: white; width: 100%; padding: 15px; border-radius: var(--radius-md); font-weight: bold; margin-bottom: 10px; }
  .btn-primary:disabled { opacity: 0.5; }
  .btn-text { background: transparent; color: var(--color-taupe); width: 100%; padding: 10px; }
</style>