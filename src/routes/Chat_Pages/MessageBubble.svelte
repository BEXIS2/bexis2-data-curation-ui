<!-- MessageBubble.svelte -->

<script lang="ts">
  // Importing Avatar component for displaying user avatars
  import Avatar from './Avatar.svelte';
  // Importing onMount for lifecycle hook and Message type from types
  import { onMount } from 'svelte';
  import type { Message } from './types';

  // Locally declaring messages array (optional, can be passed as a prop)
  let messages: Message[] = [];

  // Exporting the bubble prop to receive the message data
  export let bubble: Message;

  // State variable for tracking message editing mode
  let editing = false;

  // Lifecycle hook to initialize editing based on the message's initial editing state
  onMount(() => {
    editing = bubble.editing;
  });

  // Function to toggle between message editing and non-editing modes
  function toggleEditing() {
    editing = !editing;
    if (!editing) {
      // Dispatching a 'saveEdit' event when editing is finished
      saveEdit(new CustomEvent('saveEdit', { detail: bubble }));
    }
  }

  // Function to initiate message editing when the "Edit" button is clicked
  function editMessage(event: CustomEvent<Message>) {
    const message = event.detail;
    message.editing = true;
    message.originalMessage = message.message;
  }

  // Function to save the edited message and update the messages array
  function saveEdit(event: CustomEvent<Message>) {
    const editedMessage = event.detail;
    editedMessage.editing = false;

    // Update the messages array with the edited message
    messages = messages.map((message) =>
      message.id === editedMessage.id ? editedMessage : message
    );
    
    // Save the updated messages in localStorage
    localStorage.setItem("chatData", JSON.stringify(messages));
  }
</script>

{#if bubble.host}
  <!-- Message bubble layout for host user -->
  <div class="grid grid-cols-[auto_1fr] gap-2">
    <Avatar name={bubble.name} width="w-12" />
    <div class="card p-4 variant-soft rounded-tl-none space-y-2">
      <header class="flex justify-between items-center">
        <p class="font-bold">{bubble.name}</p>
        <small class="opacity-50">{bubble.timestamp}</small>
      </header>
      {#if editing}
        <!-- Input field for editing with Save button -->
        <input bind:value={bubble.message} />
        <button on:click={toggleEditing}>Save</button>
      {:else}
        <!-- Displaying original or edited message with Edit button -->
        <p>{bubble.edited ? `Edited: ${bubble.originalMessage}` : bubble.message}</p>
        <button on:click={toggleEditing}>Edit</button>
      {/if}
    </div>
  </div>
{:else}
  <!-- Message bubble layout for non-host user -->
  <div class="grid grid-cols-[1fr_auto] gap-2">
    <div class={`card p-4 rounded-tr-none space-y-2 ${bubble.color}`}>
      <header class="flex justify-between items-center">
        <p class="font-bold">{bubble.name}</p>
        <small class="opacity-50">{bubble.timestamp}</small>
      </header>
      {#if editing}
        <!-- Input field for editing with Save button -->
        <input bind:value={bubble.message} />
        <button on:click={toggleEditing}>Save</button>
      {:else}
        <!-- Displaying original or edited message with Edit button -->
        <p>{bubble.edited ? `Edited: ${bubble.originalMessage}` : bubble.message}</p>
        <button on:click={toggleEditing}>Edit</button>
      {/if}
    </div>
    <Avatar name={bubble.name} width="w-12" />
  </div>
{/if}

