<script lang="ts">
   import { onMount } from 'svelte';
   import Popup from './modal.svelte';
 
   let isPopupOpen = false;
 
   function openPopup() {
     isPopupOpen = true;
   }
 
   function closePopup() {
     isPopupOpen = false;
   }
 
   onMount(() => {
     // Additional initializations can be performed here
   });
 </script>
 
 <style>
 
 </style>
 
 <button class="bg-gray-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-600 position" on:click={openPopup}>
   Open Popup
 </button>
 
 {#if isPopupOpen}
   <Popup onclose={closePopup} />
 {/if}
 