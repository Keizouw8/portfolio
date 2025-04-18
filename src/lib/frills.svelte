<svelte:window bind:innerHeight bind:innerWidth />
<div class="top"></div>
<div class="points t">
	{#each { length }, i }
		<div class="point" style="left: {i * 12}vh"></div>
	{/each}
</div>
<div class="container">
	{@render children?.()}
</div>
<div class="bottom"></div>
<div class="points b">
	{#each { length }, i }
		<div class="point" style="right: {i * 12}vh"></div>
	{/each}
</div>
<script lang="ts">
	let { children, background, color }: { children?: any, background: string, color: string } = $props();
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let length = $derived(Math.ceil(innerWidth/(innerHeight*0.12))+1);
</script>
<style>
	.container{
		z-index: 1;
		position: fixed;
		width: 100vw;
		height: 66vh;
		left: 0;
		top: 17vh;
		background: var(--gray);
	}

	.top, .bottom{
		position: fixed;
		width: 100vw;
		height: 17vh;
		background: var(--red);
		z-index: -2;
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
	}

	.points.t{
		top: 15vh;
		animation: linear scroll-left 4s infinite;
	}

	.points.b{
		bottom: 17vh;
		animation: linear scroll-right 4s infinite;
	}

	.point{
		display: inline-block;
		position: absolute;
		width: 0;
		height: 0;
		border-left: solid 6vh transparent;
		border-right: solid 6vh transparent;
	}

	.t .point{
		border-bottom: solid 2vh var(--gray);
	}

	.b .point{
		border-top: solid 2vh var(--gray);
	}

	@keyframes scroll-left{
		0%{
			left: 0;
		}
		100%{
			left: -12vh;
		}
	}

	@keyframes scroll-right{
		0%{
			right: 0;
		}
		100%{
			right: -12vh;
		}
	}
</style>
