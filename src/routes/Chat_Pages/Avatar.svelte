<!-- Avatar.svelte -->

<script lang="ts">
  // Exportiere die Eigenschaften: `name` als Zeichenkette und `width` mit einem Standardwert von "w-12"
  export let name: string;
  export let width = "w-12";
</script>

<div class="avatar {width}">
  {name.charAt(0)} <!-- Zeige das erste Zeichen der `name` Eigenschaft an -->
</div>

<style>
  /* Styling für das Avatar-Element */
  .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #484646; /* Hintergrundfarbe des Avatars */
      color: #ffffff; /* Textfarbe des Buchstabens */
      border-radius: 9%; /* Runde Avatar-Form */
  }
</style>
