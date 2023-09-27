<!-- MyForm.svelte -->
<script lang="ts">
    export let inputValue: string = '';

    function handleSubmit(event: Event) {
        event.preventDefault();
        console.log('Form submitted with value:', inputValue);
    }
</script>

<form class="form" on:submit={handleSubmit}>
    <label class="label">
        <span>Input 1</span>
        <input class="input" type="text" placeholder="Input 1" bind:value={inputValue} />
    </label>

    <!-- Weitere Formularfelder hier -->

    <button type="submit" class="btn variant-filled">Submit</button>
</form>
