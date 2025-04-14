{#each { length }, i }
	<img onload={() => loaded++} style="display: { index == i ? "block" : "none" }" src="pages/{i}.png" alt="crumpled paper background">
{/each}
<script lang="ts">
	let { onload }: { onload?: Function } = $props();
	let length = 4;
	let loaded = $state(0);
	let index = $state(0);
	$effect(() => loaded == length && onload?.());
	setInterval(() => index = (index + 1) % length, 1000)
</script>
<style>
	img{
		top: 0;
		left: 0;
		min-height: 100vh;
		min-width: 100vw;
		position: absolute;
		z-index: -1;
	}
</style>
