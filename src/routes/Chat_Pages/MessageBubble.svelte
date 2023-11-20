<!-- MessageBubble.svelte -->

<script lang="ts">
  import Avatar from './Avatar.svelte';
  import { onMount } from 'svelte';
  import type { Message } from './types';

  // Falls messages lokal in MessageBubble.svelte deklariert werden soll
  let messages: Message[] = [];

  export let bubble: Message;

  let editing = false;

  onMount(() => {
    editing = bubble.editing;
  });

  function toggleEditing() {
    editing = !editing;
    if (!editing) {
      saveEdit(new CustomEvent('saveEdit', { detail: bubble }));
    }
  }

  function editMessage(event: CustomEvent<Message>) {
    const message = event.detail;
    message.editing = true;
    message.originalMessage = message.message;
  }

  function saveEdit(event: CustomEvent<Message>) {
    const editedMessage = event.detail;
    editedMessage.editing = false;

    // Hier kannst du die Logik für die Speicherung der bearbeiteten Nachricht implementieren
    messages = messages.map((message) =>
      message.id === editedMessage.id ? editedMessage : message
    );
    
    // Speichere die aktualisierten Nachrichten im localStorage
    localStorage.setItem("chatData", JSON.stringify(messages));
  }
</script>

{#if bubble.host}
  <div class="grid grid-cols-[auto_1fr] gap-2">
    <Avatar name={bubble.name} width="w-12" />
    <div class="card p-4 variant-soft rounded-tl-none space-y-2">
      <header class="flex justify-between items-center">
        <p class="font-bold">{bubble.name}</p>
        <small class="opacity-50">{bubble.timestamp}</small>
      </header>
      {#if editing}
        <input bind:value={bubble.message} />
        <button on:click={toggleEditing}>Save</button>
      {:else}
        <p>{bubble.edited ? `Edited: ${bubble.originalMessage}` : bubble.message}</p>
        <button on:click={toggleEditing}>Edit</button>
      {/if}
    </div>
  </div>
{:else}
  <div class="grid grid-cols-[1fr_auto] gap-2">
    <div class={`card p-4 rounded-tr-none space-y-2 ${bubble.color}`}>
      <header class="flex justify-between items-center">
        <p class="font-bold">{bubble.name}</p>
        <small class="opacity-50">{bubble.timestamp}</small>
      </header>
      {#if editing}
        <input bind:value={bubble.message} />
        <button on:click={toggleEditing}>Save</button>
      {:else}
        <p>{bubble.edited ? `Edited: ${bubble.originalMessage}` : bubble.message}</p>
        <button on:click={toggleEditing}>Edit</button>
      {/if}
    </div>
    <Avatar name={bubble.name} width="w-12" />
  </div>
{/if}
