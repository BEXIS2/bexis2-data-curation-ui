<script lang="ts">
  import { onMount } from "svelte";
  import { format } from "date-fns";
  import MessageBubble from "./MessageBubble.svelte";
  import type { Message } from './types';

  let messages: Message[] = [];
  let currentMessage: string = "";

  function addMessage() {
    const newMessage: Message = {
      id: messages.length,
      host: false,
      name: "User",
      timestamp: format(new Date(), "MMMM d, yyyy HH:mm:ss"),
      message: currentMessage,
      color: "variant-soft-primary",
      edited: false,
      originalMessage: "",
      editing: false,
    };

    messages = [...messages, newMessage];
    currentMessage = "";

    // Speichere die aktualisierten Nachrichten im localStorage
    localStorage.setItem("chatData", JSON.stringify(messages));
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

  onMount(() => {
    const savedChatData = localStorage.getItem("chatData");
    if (savedChatData) {
      messages = JSON.parse(savedChatData);
    }
  });
</script>


<div class="grid grid-rows-[1fr_auto] gap-1 h-screen">
  <section class="bg-surface-500/30 p-4 overflow-y-auto">
    {#each messages as message (message.id)}
    <MessageBubble bubble={message} editMessage={editMessage} saveEdit={saveEdit} />

      <div class="my-4"></div>
    {/each}
  </section>

  <div class="bg-surface-500/30 p-4">
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
      <button class="input-group-shim">+</button>
      <textarea bind:value={currentMessage} name="prompt" placeholder="Write a message..." class="text-black"></textarea>
      <button class="variant-filled-primary" on:click={addMessage}>Send</button>
    </div>
  </div>
</div>
