<script lang="ts">
	import Page from '$lib/components/page/Page.svelte';
	import MultiSelect from '$lib/components/form/MultiSelect.svelte';
	import { CountrieNames } from '../routes/components/form/examples/exampleData';

	import { SlideToggle } from '@skeletonlabs/skeleton';

	let target;
	$: target;
</script>

<Page title="BEXIS2-Data-Curation">
	<blockquote class="blockquote">
		<span class="rainbow-text">Diese Seite wird von Tito Prause bearbeitet :)</span>
	</blockquote>
</Page>

<style>
	.blockquote {
	  position: relative;
	  opacity: 0;
	  transform: translateY(-20px);
	  animation: rainbow 5s linear forwards;
	}

	@keyframes rainbow {
	  
	  100% {
		
		opacity: 1;
		transform: translateY(0);
	  }
	}

	/* Stil für den Regenbogen-Text */
	.rainbow-text {
	  background: linear-gradient(45deg, red, orange, rgb(231, 10, 239), green, blue, indigo, violet);
	  -webkit-background-clip: text;
	  background-clip: text;
	  color: transparent;
	  display: inline;
	  animation: rainbowText 5s linear forwards;
	}

	@keyframes rainbowText {
	  0% {
		background-position: 0% 50%;
	  }
	  100% {
		background-position: 100% 50%;
	  }
	}
</style>
