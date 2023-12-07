
<script lang="ts">
  import { onMount } from 'svelte';
  import Popup from './modal.svelte'; // Importing the Popup component
  import Button from './button.svelte'; // Importing the Button component

  let isPopupOpen = false; // Variable to track whether the popup is open or closed

  function openPopup() {
    isPopupOpen = true; // Function to set isPopupOpen to true, indicating the popup is open
  }

  function closePopup() {
    isPopupOpen = false; // Function to set isPopupOpen to false, indicating the popup is closed
  }

  onMount(() => {
    // Additional initializations can be performed here
  });
</script>

<style>
 

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Gap between form elements in the form container*/
  }

  .form-row {
    display: flex;
    align-items: center;
    gap: 10px; /* Gap between elements in a form row*/
  }

  .checkbox {
    flex-shrink: 0; /* Prevents the checkbox from changing its size*/
  }

  .text-input {
    width: 100%;
   
  }
</style>

<Button/> <!-- Rendering the Button component -->
