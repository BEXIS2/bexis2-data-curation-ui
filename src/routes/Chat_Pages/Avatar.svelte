

<script lang="ts">
  // Exporting properties: `name` as a string and `width` with a default value of "w-12"
  export let name: string;
  export let width = "w-12";
</script>

<!-- Avatar component rendering -->
<div class="avatar {width}">
  {name.charAt(0)} <!-- Displaying the first character of the `name` property -->
</div>

<style>
  /* Styling for the Avatar element */
  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #484646; /* Background color of the Avatar */
    color: #ffffff; /* Text color of the letter */
    border-radius: 9%; /* Rounded Avatar shape */
  }
</style>
