<script lang="ts">
  import { onMount } from 'svelte'; // Importing the onMount function from Svelte

  interface Checkbox {
    checked: boolean;
  }

  interface SavedItem {
    type: string;
    value: string | boolean;
  }

  let checkboxes: Checkbox[] = [{ checked: false }]; // Initializing an array of checkboxes with one default checkbox
  let textInputs: string[] = ['']; // Initializing an array of text inputs with one empty string
  let savedItems: SavedItem[] = []; // Initializing an array to store saved items
  let userEntryId: string = ''; // Initializing a variable to store user entry ID
  let assignedChats: string[] = []; // Initializing an array to store assigned chat IDs

  function addCheckbox() {
    checkboxes = [...checkboxes, { checked: false }]; // Adding a new checkbox to the array
  }

  function removeCheckbox(index: number) {
    checkboxes = checkboxes.filter((_, i) => i !== index); // Removing a checkbox based on its index
  }

  function addTextInput() {
    textInputs = [...textInputs, '']; // Adding a new text input to the array
  }

  function removeTextInput(index: number) {
    textInputs = textInputs.filter((_, i) => i !== index); // Removing a text input based on its index
  }

  function handleSubmit() {
    checkboxes.forEach((checkbox, index) => {
      savedItems.push({ type: `Checkbox ${index + 1}`, value: checkbox.checked }); // Saving checkbox values
    });

    textInputs.forEach((text, index) => {
      savedItems.push({ type: `Text Input ${index + 1}`, value: text }); // Saving text input values
    });

    // Creating an object with user entry data
    const issueData = {
      userEntryId: userEntryId,
      assignedChats: assignedChats,
    };

    // Sending data to the main page
    sendToMainPage({
      userEntryId: userEntryId,
      savedItems: savedItems,
      assignedChats: assignedChats,
    });

    // Resetting arrays and variables
    checkboxes = [{ checked: false }];
    textInputs = [''];
    userEntryId = '';
    assignedChats = [];
    savedItems = [];
  }

  function addChat() {
    const chatId = prompt('Enter Chat ID:'); // Prompting the user to enter a chat ID
    if (chatId) {
      assignedChats = [...assignedChats, chatId]; // Adding the entered chat ID to the array
    }
  }

  
  function sendToMainPage(data: { userEntryId: string; savedItems: SavedItem[]; assignedChats: string[] }) {
    // Checking if the code is running in the browser mode
    if (typeof window !== 'undefined') {
      // Creating a custom event and dispatching it to the window
      const event = new CustomEvent('entrySubmitted', { detail: data });
      window.dispatchEvent(event);
    }
  }
</script>

<style>
  /* Styles for your form elements */

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Gap between form elements in the form container */
    margin-top: 5%; /* Adding top margin to the form container */
  }

  .form-row {
    display: flex;
    align-items: center;
    gap: 10px; /* Gap between elements in a form row */
  }

  .checkbox {
    flex-shrink: 0;
    margin-right: 5px; /* Adding right margin to the checkbox */
  }

  .text-input {
    flex-grow: 1;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }

  .text-input:focus {
    border-color: #007BFF;
    outline: none; /* Removing the outline on focus for better visual appearance */
  }

  .add-button {
    cursor: pointer;
    background: #67dfe1;
    color: #fff;
    padding: 8px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .add-button:hover {
    background-color: #67dfe1;
  }

  .remove-button {
    cursor: pointer;
    background: #484848;
    color: #fff;
    padding: 8px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .remove-button:hover {
    background-color: #484848;
  }

  .bubble-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
  }

  .bubble {
    background-color: #484848;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .bubble:hover {
    background-color: #484848;
  }

  /* Display of saved elements */

  .saved-items-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .saved-item {
    background-color: #67dfe1;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
</style>

<div class="form-container">
  <div class="form-row">
    <label>User Entry ID</label>
    <input type="number" class="text-input" bind:value={userEntryId} />
  </div>

  {#each checkboxes as checkbox, index}
    <div class="form-row">
      <label>Checkbox {index + 1}</label>
      <input type="checkbox" class="checkbox" bind:checked={checkbox.checked} />
      <button class="remove-button" on:click={() => removeCheckbox(index)}>-</button>
    </div>
  {/each}

  {#each textInputs as text, index}
    <div class="form-row">
      <label>Text Input {index + 1}</label>
      <input type="text" class="text-input" bind:value={text} />
      <button class="remove-button" on:click={() => removeTextInput(index)}>-</button>
    </div>
  {/each}

  <button class="add-button" on:click={addCheckbox}>+ Add Checkbox</button>
  <button class="add-button" on:click={addTextInput}>+ Add Text Input</button>
  <button class="add-button" on:click={addChat}>+ Add Chat</button>
  <button class="add-button" on:click={handleSubmit}>Submit</button>

  <div class="bubble-container">
    {#each assignedChats as chatId (chatId)}
      <div class="bubble">
        Chat ID: {chatId}
        <span class="remove-button" on:click={() => assignedChats = assignedChats.filter(id => id !== chatId)}>-</span>
      </div>
    {/each}
    {#each checkboxes as checkbox, index}
      <div class="bubble" on:click={() => removeCheckbox(index)}>
        Checkbox {index + 1}
        <span class="remove-button">-</span>
      </div>
    {/each}
    {#each textInputs as text, index}
      <div class="bubble" on:click={() => removeTextInput(index)}>
        Text Input {index + 1}
        <span class="remove-button">-</span>
      </div>
    {/each}
  </div>

  <!-- Display of saved elements -->
  <div class="saved-items-container">
    {#each savedItems as item (item.type)}
      <div class="saved-item">
        {#if typeof item.value === 'boolean'}
          {item.type}: {item.value ? 'Checked' : 'Unchecked'}
        {:else}
          {item.type}: {item.value}
        {/if}
      </div>
    {/each}
  </div>
</div>
