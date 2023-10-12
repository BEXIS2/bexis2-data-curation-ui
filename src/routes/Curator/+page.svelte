<script lang="ts">
    import { onMount } from "svelte";
    import { format } from "date-fns";
    import MessageBubble from "./MessageBubble.svelte";
    import { messageStore } from "../stores/store";
  
    type Message = {
      id: number;
      host: boolean;
      name: string;
      timestamp: string;
      message: string;
      color: string;
    };
  
    let messages: Message[] = [];
    let currentMessage: string = "";
  
    function addMessage() {
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
  
      // Speichere den aktualisierten Chatverlauf in localStorage
      saveChatToJSON(messages);
    }
  
    // Nachrichten aus localStorage wiederherstellen
    onMount(() => {
      const chatHistoryJSON = localStorage.getItem("curatorChatHistory");
  
      if (chatHistoryJSON) {
        messages = JSON.parse(chatHistoryJSON) as Message[]; // Den Typ explizit festlegen
      }
    });
  
    function saveChatToJSON(chat: Message[]) { // Den Typ des Parameters explizit festlegen
      const chatJSON = JSON.stringify(chat);
      localStorage.setItem("curatorChatHistory", chatJSON);
    }
  </script>
  
  <div class="grid grid-rows-[1fr_auto] gap-1 h-screen">
    <section class="bg-surface-500/30 p-4 overflow-y-auto">
      {#each messages as message (message.id)}
        <MessageBubble bubble={message} />
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
  