
<script>
    import { onMount } from "svelte";
    import MessageBubble from "./MessageBubble.svelte";
  
    let messages = [
      {
        id: 0,
        host: true,
        name: "Jane",
        timestamp: "Yesterday @ 2:30pm",
        message: "Some message text.",
        color: "variant-soft-primary",
      },
      {
        id: 1,
        host: false,
        name: "Michael",
        timestamp: "Yesterday @ 2:45pm",
        message: "Some message text.",
        color: "variant-soft-primary",
      },
    ];
  
    let currentMessage = "";
  
    function addMessage() {
      const newMessage = {
        id: messages.length,
        host: true,
        name: "Jane",
        timestamp: "Just now",
        message: currentMessage,
        color: "variant-soft-primary",
      };
      messages = [...messages, newMessage];
      currentMessage = "";
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