<script lang="ts">
  import Avatar from './Avatar.svelte'; // Import the Avatar component
  export let bubble: any; // Define the 'bubble' prop, which can be of any type
</script>

{#if bubble.host}
<div class="grid grid-cols-[auto_1fr] gap-2">
  <Avatar name={bubble.name} width="w-12" /> <!-- Render an Avatar with the name from 'bubble' -->
  <div class="card p-4 variant-soft rounded-tl-none space-y-2">
      <header class="flex justify-between items-center">
          <p class="font-bold">{bubble.name}</p> <!-- Display the 'name' from 'bubble' with a bold style -->
          <small class="opacity-50">{bubble.timestamp}</small> <!-- Display the 'timestamp' from 'bubble' with reduced opacity -->
      </header>
      <p>{bubble.message}</p> <!-- Display the 'message' from 'bubble' -->
  </div>
</div>
{:else}
<div class="grid grid-cols-[1fr_auto] gap-2">
  <div class={`card p-4 rounded-tr-none space-y-2 ${bubble.color}`}> <!-- Apply a custom class based on 'color' from 'bubble' -->
      <header class="flex justify-between items-center">
          <p class="font-bold">{bubble.name}</p> <!-- Display the 'name' from 'bubble' with a bold style -->
          <small class="opacity-50">{bubble.timestamp}</small> <!-- Display the 'timestamp' from 'bubble' with reduced opacity -->
      </header>
      <p>{bubble.message}</p> <!-- Display the 'message' from 'bubble' -->
  </div>
  <Avatar name={bubble.name} width="w-12" /> <!-- Render an Avatar with the name from 'bubble' -->
</div>
{/if}