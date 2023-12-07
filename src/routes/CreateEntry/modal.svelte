<script lang="ts">
  import { createEventDispatcher } from 'svelte'; // Importing createEventDispatcher from Svelte for custom events
  import Form from './input.svelte'; // Importing the Form component

  const dispatch = createEventDispatcher(); // Creating an event dispatcher to handle custom events

  function closeModal(event: MouseEvent) {
    dispatch('close', event); // Dispatching a 'close' event when the modal is closed
  }
</script>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .popup {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    width: 91%;
    max-width: 100%;
    max-height: 53vh;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
  }
</style>
<!--Content-->
<div class="overlay" on:click={closeModal}>
  <div class="popup" on:click={e => e.stopPropagation()}>
    <Form />
    <button class="close-btn" on:click={closeModal} aria-label="Close">&times;</button>
  </div>
</div>
