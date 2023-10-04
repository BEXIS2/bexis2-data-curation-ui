

<script lang="ts">
   import type { EntryType } from './entry'; // Use type-only import for EntryType
   import { saveText } from './entry';
 
   let value = '';
   let entry: EntryType = { id: 1, name: 'skfmsldkf', color: 'blau' };
 
   // Function to save the text
   function handleSave() {
     saveText(value, entry);
   }
 </script>
   
   <form>
     <div class="container">
       <input style="color: black;" id="message" name="message" placeholder="Message" bind:value="{entry.name}">
       {value}
       <button type="button" id="save-button" on:click={handleSave}>
         <span>Save</span>
       </button>
     </div>
   </form>
   
<style>
   :global(.container) {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: var(--bg);
      color: var(--text);
      transition: background-color 0.3s ease, color 0.3s ease;
   }

   :global(.light) {
      --bg: #ffffff;
      --text: #333333;
   }

   :global(.dark) {
      --bg: #333333;
      --text: #ffffff;
   }

   button {
      width: 100px;
      height: 50px;
      background-color: #000;
      color: #fff;
      font-size: 16px;
      border: none;
      cursor: pointer;
   }

   button:hover {
      background-color: #fff;
      color: #000;
   }

   button:active {
      background-color: #ccc;
      color: #000;
   }
</style>
