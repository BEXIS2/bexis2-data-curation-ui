<!--ChatPages-->

<script lang="ts">
  import UserComponent from './UserChat.svelte';
  import CuratorComponent from './CuratorChat.svelte';



  let selectedTab: string = "User";

  function switchTab(tab: string) {
    selectedTab = tab;
  }
</script>

<header>
  <button on:click={() => switchTab("User")} class:selected={selectedTab === "User"}>User</button>
  <button on:click={() => switchTab("Curator")} class:selected={selectedTab === "Curator"}>Curator</button>
</header>

{#if selectedTab === "User"}
  <UserComponent />
{:else if selectedTab === "Curator"}
  <CuratorComponent />
{/if}
