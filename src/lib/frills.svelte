<svelte:window bind:innerHeight bind:innerWidth />
<div class="fullpage">
	<div class="top" style="background: {color}"></div>
	<div class="points t">
			{#each { length } }
			<div class="point"></div>
			{/each}
	</div>
	<div class="container" style="background: {background}">
			{@render children?.()}
	</div>
	<div class="bottom" style="background: {color}"></div>
	<div class="points b">
			{#each { length } }
			<div class="point"></div>
			{/each}
	</div>
</div>
<script lang="ts">
	let { children, background, color }: { children?: any, background: string, color: string } = $props();
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let length = $derived(Math.ceil(innerWidth/(innerHeight*0.12))+1);
</script>
<style>
	.fullpage{
		z-index: unset;
	}
	
	.container{
		z-index: 1;
		position: absolute;
		width: 100vw;
		height: 66vh;
		left: 0;
		top: 17vh;
	}
	
	@keyframes top-in{
		from{
			left: 100vw;
		}
		to{
			left: 0;
		}
	}
	
	@keyframes bottom-in{
		from{
			right: 100vw;
		}
		to{
			right: 0;
		}
	}

	.top, .bottom{
		position: absolute;
		width: 100vw;
		height: 17vh;
		z-index: 0;
	}

	.top{
		top: 0;
		animation: linear top-in;
		animation-timeline: scroll();
	}

	.bottom{
		bottom: 0;
		animation: linear bottom-in;
		animation-timeline: scroll();
	}

	.points{
		position: absolute;
		display: block;
		width: 200vw;
		height: 2vh;
		z-index: 2;
	}

	.points.t{
		top: 15vh;
		animation: linear scroll-left 4s infinite;
	}

	.points.b{
		bottom: 15vh;
		animation: linear scroll-right 4s infinite;
	}
	
	.t .point{
		top: 1px;
		clip-path: polygon(50% 0, 0% 100%, 100% 100%);
	}
	
	.b .point{
		top: -1px;
		clip-path: polygon(50% 100%, 0 0, 100% 0);
	}

	.point{
		display: inline-block;
		position: relative;
		width: 12vh;
		height: 2vh;
		background: var(--gray);
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
