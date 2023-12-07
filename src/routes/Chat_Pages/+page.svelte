

<script lang="ts">
  // Importing UserComponent and CuratorComponent for different chat pages
  import UserComponent from './UserChat.svelte';
  import CuratorComponent from './CuratorChat.svelte';

  // State variable to track the selected chat tab
  let selectedTab: string = "User";

  // Function to switch between User and Curator chat tabs
  function switchTab(tab: string) {
    selectedTab = tab;
  }
</script>

<!-- Header section with buttons to switch between User and Curator tabs -->
<header>
  <button on:click={() => switchTab("User")} class:selected={selectedTab === "User"}>User</button>
  <button on:click={() => switchTab("Curator")} class:selected={selectedTab === "Curator"}>Curator</button>
</header>

<!-- Conditional rendering based on the selected chat tab -->
{#if selectedTab === "User"}
  <UserComponent /> <!-- Render UserComponent when the User tab is selected -->
{:else if selectedTab === "Curator"}
  <CuratorComponent /> <!-- Render CuratorComponent when the Curator tab is selected -->
{/if}
