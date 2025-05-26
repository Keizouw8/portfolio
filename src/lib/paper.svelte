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
		top: 50%;
		left: 50%;
		position: fixed;
		transform: translate(-50%, -50%);
		z-index: 1;
		height: max(100vh, 57vw);
	}

	@media (max-aspect-ratio: 1/1){
		img{
			height: max(100vw, 57vh);
			transform: translate(-50%, -50%) rotateZ(90deg);
		}
	}
</style>
