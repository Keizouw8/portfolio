{#each { length }, i }
	<img style="display: { index == i ? "block" : "none" }" src="pages/{i}.png" alt="crumpled paper background">
{/each}
<script>
	let length = 4;
	let index = $state(0);
	setInterval(() => index = (index + 1) % length, 1000)
</script>
<style>
	img{
		top: 0;
		left: 0;
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		z-index: -1;
	}
</style>
