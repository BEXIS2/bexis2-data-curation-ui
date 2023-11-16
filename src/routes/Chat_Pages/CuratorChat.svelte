<!--ChatPages-->


<!-- CuratorChat.svelte -->

<script lang="ts">
  // Import Svelte and date-fns dependencies
  import { onMount } from "svelte";
  import { format } from "date-fns";
  import MessageBubble from "./MessageBubble.svelte";
  
  // Import the messageStore from the store module
  import { messageStore } from "../stores/store";

  // Define the structure of a message
  type Message = {
    id: number;
    host: boolean;
    name: string;
    timestamp: string;
    message: string;
    color: string;
  };

  // Initialize variables to store messages and the current message
  let messages: Message[] = [];
  let currentMessage: string = "";

  // Function to add a new message
  function addMessage() {
    // Create a new message object with Curator data and timestamp
    const newMessage: Message = {
      id: messages.length,
      host: true,
      name: "Curator",
      timestamp: format(new Date(), "MMMM d, yyyy HH:mm:ss"),
      message: currentMessage,
      color: "variant-soft-primary",
    };
    messages = [...messages, newMessage];
    currentMessage = "";
    messageStore.update((storedMessages: Message[]) => [...storedMessages, newMessage]);

    // Call a function to save the chat as JSON
    saveChatAsJSON(messages);
  }

  // Function to save the chat data as JSON in local storage
  function saveChatAsJSON(chatData: Message[]) {
    const chatDataJSON = JSON.stringify(chatData, null, 2);
    localStorage.setItem('chatData', chatDataJSON);
  }

  // Load JSON data from local storage when the page is loaded
  onMount(() => {
    const savedChatData = localStorage.getItem('chatData');
    if (savedChatData) {
      messages = JSON.parse(savedChatData);
    }
  });
</script>

<!-- Define the structure of the main layout -->
<div class="grid grid-rows-[1fr_auto] gap-1 h-screen">
  <section class="bg-surface-500/30 p-4 overflow-y-auto">
    {#each messages as message (message.id)}
      <!-- Render the MessageBubble component for each message -->
      <MessageBubble bubble={message} />
      <!-- Add spacing between messages -->
      <div class="my-4"></div>
    {/each}
  </section>

  <div class="bg-surface-500/30 p-4">
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
      <!-- Button to add an attachment -->
      <button class="input-group-shim">+</button>
      <!-- Textarea for typing messages, bound to currentMessage -->
      <textarea bind:value={currentMessage} name="prompt" placeholder="Write a message..." class="text-black"></textarea>
      <!-- Button to send the message, triggers the addMessage function -->
      <button class="variant-filled-primary" on:click={addMessage}>Send</button>
    </div>
  </div>
</div>
