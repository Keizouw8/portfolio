<svelte:window bind:innerHeight bind:innerWidth on:scroll={scroll} />
<div class="fullpage">
	<div class="top" bind:this={top} style="background: {color}; transform: translateX({100 * topTranslate}vw)"></div>
	<div class="points t">
			{#each { length } }
			<div class="point" style="background: {background}"></div>
			{/each}
	</div>
	<div class="container" style="background: {background}">
			{@render children?.()}
	</div>
	<div class="bottom" bind:this={bottom} style="background: {color}; transform: translateX({100 * bottomTranslate}vw)"></div>
	<div class="points b">
			{#each { length } }
			<div class="point" style="background: {background}"></div>
			{/each}
	</div>
</div>
<script lang="ts">
	let { children, background, color }: { children?: any, background: string, color: string } = $props();
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let length = $derived(Math.ceil(innerWidth/(innerHeight*0.12))+1);
	let top: HTMLDivElement = $state() as HTMLDivElement;
	let bottom: HTMLDivElement = $state() as HTMLDivElement;
	let topRect: DOMRect = $state({ y: 0, height: 0 }) as DOMRect;
	let bottomRect: DOMRect = $state({ y: 0, height: 0, bottom: 0 }) as DOMRect;
	let topTranslate = $derived(topRect.y < 0 ? topRect.y / topRect.height : Math.max(1 - (innerHeight - topRect.y) / topRect.height / 5, 0));
	let bottomTranslate = $derived((innerHeight - bottomRect.y) / bottomRect.height / (bottomRect.bottom < innerHeight ? 5 : 1) - (bottomRect.bottom < innerHeight ? 0.2 : 1));
	function scroll(){
		topRect = top.getBoundingClientRect();
		bottomRect = bottom.getBoundingClientRect();
	}
</script>
<style>
	.fullpage{
		z-index: unset;
	}

	.container{
		z-index: 2;
		position: absolute;
		width: 100vw;
		height: 66vh;
		left: 0;
		top: 17vh;
	}

	.top, .bottom{
		position: absolute;
		width: 100vw;
		height: 17vh;
		z-index: 0;
	}

	.top{
		top: 0;
	}

	.bottom{
		bottom: 0;
	}

	.points{
		position: absolute;
		display: block;
		width: 200vw;
		height: 2vh;
		z-index: 2;
	}

	.points.t{
		top: calc(15vh + 1px);
		animation: linear scroll-left 4s infinite;
	}

	.points.b{
		bottom: calc(15vh + 1px);
		animation: linear scroll-right 4s infinite;
	}

	.t .point{
		clip-path: polygon(50% 0, 0% 100%, 100% 100%);
	}

	.b .point{
		clip-path: polygon(50% 100%, 0 0, 100% 0);
	}

	.point{
		display: inline-block;
		position: relative;
		width: 12vh;
		height: 2vh;
	}

	@keyframes scroll-left{
		0%{
			left: 0vh;
		}
		100%{
			left: -12vh;
		}
	}

	@keyframes scroll-right{
		0%{
			left: -12vh;
		}
		100%{
			left: 0;
		}
	}
</style>
