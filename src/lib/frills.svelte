<div class="top">
	<div class="points">
		{#each {length: 13}, i }
			<div class="point" style="left: {i * 8}vw"></div>
		{/each}
	</div>
</div>
<div class="container">
	{@render children?.()}
</div>
<div class="bottom"><div class="pointers"></div></div>
<script lang="ts">
	let { children }: { children?: any } = $props();
</script>
<style>
	.container{
		z-index: 1;
		position: fixed;
		width: 100vw;
		height: 80vh;
		left: 0;
		top: 10vh;
	}

	.top, .bottom{
		position: fixed;
		width: 100vw;
		height: 10vh;
		background: red;
		z-index: 2;
	}

	.top{
		top: 0;
	}

	.bottom{
		bottom: 0;
	}

	.top .points{
		position: absolute;
		display: block;
		top: 100%;
	}

	.top .point{
		display: inline-block;
		position: absolute;
		width: 0;
		height: 0;
		border-top: solid 6vh blue;
		border-left: solid 4vw transparent;
		border-right: solid 4vw transparent;
	}

	@keyframes scroll-left{
		0%{
			left: 0;
		}
		100%{
			left: -8vw;
		}
	}
</style>
