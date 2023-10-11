

<script lang="ts">
   import { onMount } from 'svelte';
   import { saveText } from './entry';
 
   let title = '';
   let content = '';
 
   // Function to save the text with a key
   function handleSaveTitle() {
     saveText('title', title); // Here, 'title' is the key for the title
   }
 
   function handleSaveContent() {
     saveText('content', content); // Here, 'content' is the key for the content
   }
 
   // Function to download the JSON file
   function downloadJson() {
     const data = JSON.stringify({ title, content }, null, 2); // Convert title and content to JSON
     const blob = new Blob([data], { type: 'application/json' });
     const url = URL.createObjectURL(blob);
 
     const a = document.createElement('a');
     a.href = url;
     a.download = 'entry.json'; // Specify the filename
     a.click();
 
     // Clean up
     URL.revokeObjectURL(url);
   }
 
   // Load the saved text from local storage on component mount
   onMount(() => {
     const savedTitle = localStorage.getItem('title');
     if (savedTitle) {
       title = JSON.parse(savedTitle).text;
     }
 
     const savedContent = localStorage.getItem('content');
     if (savedContent) {
       content = JSON.parse(savedContent).text;
     }
   });
 </script>
 
 <form>
   <div class="container">
     <input style="color: black;" id="title" name="title" placeholder="Title" bind:value="{title}">
     {title}
     <button type="button" id="save-title-button" on:click={handleSaveTitle}>
       <span>Save Title</span>
     </button>
 
     <textarea style="color: black;" id="content" name="content" placeholder="Content" bind:value="{content}"></textarea>
     {content}
     <button type="button" id="save-content-button" on:click={handleSaveContent}>
       <span>Save Content</span>
     </button>
 
     <button type="button" id="download-button" on:click={downloadJson}>
       <span>Download JSON</span>
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
