<!-- ChatView.svelte -->

<script lang="ts">
  // Importing necessary modules and components
  import { onMount } from "svelte";
  import { format } from "date-fns";
  import MessageBubble from "./MessageBubble.svelte";
  import type { Message } from './types';
  import { fetchEntryById, EntryService } from '../services/ChatService';
  import type { EntryModel } from "../models/entryModels";

  // State variables for managing messages and the current message being typed
  let messages: Message[] = [];
  let currentMessage: string = "";

  // Function to add a new message from the Curator
  function addMessage() {
    // Creating a new message object
    const newMessage: Message = {
      id: messages.length,
      host: true, // Indicate that the message is from the Curator
      name: "Curator",
      timestamp: format(new Date(), "MMMM d, yyyy HH:mm:ss"),
      message: currentMessage,
      color: "variant-soft-primary",
      edited: false,
      originalMessage: "",
      editing: false,
    };

    // Updating the messages array with the new message
    messages = [...messages, newMessage];
    currentMessage = ""; // Clearing the current message input

    // Save the updated messages in localStorage
    localStorage.setItem("chatData", JSON.stringify(messages));
  }

  // Function to handle editing a message
  function editMessage(event: CustomEvent<Message>) {
    const message = event.detail;
    message.editing = true;
    message.originalMessage = message.message;
  }

  // Function to save the edited message
  function saveEdit(event: CustomEvent<Message>) {
    const editedMessage = event.detail;
    editedMessage.editing = false;

    // Implement logic for saving the edited message
    messages = messages.map((message) =>
      message.id === editedMessage.id ? editedMessage : message
    );

    // Save the updated messages in localStorage
    localStorage.setItem("chatData", JSON.stringify(messages));
  }

  // Run this code when the component is mounted
  onMount(() => {
    // Fetching saved chat data from localStorage
    const savedChatData = localStorage.getItem("chatData");
    if (savedChatData) {
      messages = JSON.parse(savedChatData);
    }

    // Example: Fetch an entry by ID
    fetchEntryById('456')
      .then((entry: EntryModel) => {
        console.log('Fetched entry by ID:', entry);
        // Handle the specific entry as needed

        // Example: Update an existing entry
        const entryIdToUpdate = '123'; // Replace with the actual entry ID
        const updatedEntryData: EntryModel = {
          id: entry.id,  // Include the id in the updatedEntryData
          title: 'New Title',
          content: 'New Content',
          userId: '456', // Replace with the actual user ID
          curatorId: '789', // Replace with the actual curator ID
          timestamp: format(new Date(), "MMMM d, yyyy HH:mm:ss"),
        };

        // Using EntryService to update the entry
        EntryService.updateEntry(entryIdToUpdate, updatedEntryData)
          .then((updatedEntry: EntryModel) => {
            console.log('Updated entry:', updatedEntry);
            // Handle the updated entry as needed
          })
          .catch((error: Error) => {
            console.error('Error updating entry:', error);
            // Handle the error in your component
          });
      })
      .catch((error: Error) => {
        console.error('Error fetching entry:', error);
        // Handle the error in your component
      });
  });
</script>

<!-- Main structure of the chat view -->
<div class="grid grid-rows-[1fr_auto] gap-1 h-screen">
  <!-- Section for displaying chat messages -->
  <section class="bg-surface-500/30 p-4 overflow-y-auto">
    {#each messages as message (message.id)}
      <!-- Render each message using the MessageBubble component -->
      <MessageBubble bubble={message} editMessage={editMessage} saveEdit={saveEdit} />

      <!-- Adding some margin between messages for better spacing -->
      <div class="my-4"></div>
    {/each}
  </section>

  <!-- Section for typing and sending new messages -->
  <div class="bg-surface-500/30 p-4">
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
      <!-- Placeholder button for adding attachments -->
      <button class="input-group-shim">+</button>
      <!-- Textarea for typing the message -->
      <textarea bind:value={currentMessage} name="prompt" placeholder="Write a message..." class="text-black"></textarea>
      <!-- Button to send the typed message -->
      <button class="variant-filled-primary" on:click={addMessage}>Send</button>
    </div>
  </div>
</div>

