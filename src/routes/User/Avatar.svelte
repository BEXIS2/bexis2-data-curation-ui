<!-- Avatar.svelte -->
<script  lang="ts">
    export let name: string; // Deklariere den Typ als Zeichenkette (string)
    export let width = "w-12"; // Die Breite des Avatars, Standardwert ist "w-12"
  </script>
  
  <div class="avatar {width}">
    {name.charAt(0)}
  </div>
  
  <style>
    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #484646; /* Hintergrundfarbe des Avatars */
      color: #ffffff; /* Textfarbe des Buchstabens */
      border-radius: 9%; /* Kreisförmiger Avatar */
    }
  </style>
  