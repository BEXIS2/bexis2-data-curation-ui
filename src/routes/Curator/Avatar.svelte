<!-- Avatar.svelte -->

<script lang="ts">
  // Exported props: `name` as a string and `width` with a default value of "w-12"
  export let name: string;
  export let width = "w-12";
</script>

<div class="avatar {width}">
  {name.charAt(0)} <!-- Display the first character of the `name` prop -->
</div>

<style>
  /* Styling for the avatar element */
  .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #484646; /* Background color of the avatar */
      color: #ffffff; /* Text color of the letter */
      border-radius: 9%; /* Circular avatar shape */
  }
</style>
