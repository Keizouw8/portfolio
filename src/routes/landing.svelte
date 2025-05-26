<div class="fullpage paper">
	<div class="strip">
		<div class="intro">
			<span class="greetings">hi there, i'm</span>
			<h1 class="title">KEIZOU WANG</h1>
		</div>
		<div class="occupations">
			{#each pages as page}
				<span>
					<Selectable style="display: inline-block" effect={{ effect: "underline" }} onclick={() => document.getElementById(page.url)?.scrollIntoView({ behavior: "smooth" })}><span>{page.title}</span></Selectable>
				</span>
			{/each}
		</div>
	</div>
</div>
<script lang="ts">
	import Selectable from "$lib/selectable.svelte";
	
	type Page = {
		title: string,
		url: string
	}

	let pages: Page[] = $state([
		{ title: "about me", url: "me" },
		{ title: "programming", url: "programming" },
		{ title: "philosophy", url: "philosophy" },
		{ title: "contact", url: "contact" }
	]);
</script>
<style>
	.strip{
		position: absolute;
		top: 50%;
		left: 50%;
		width: 80vw;
		transform: translate(-50%, -50%);
	}

	.greetings{
		font-family: lazydog;
		font-size: calc(7 * var(--unit));
	}

	.title{
		font-family: gabarito;
		font-weight: 900;
		color: var(--red);
		font-size: calc(18 * var(--unit));
		line-height: 0.8;
		width: calc(60.5 * var(--unit));
	}

	.occupations{
		font-size: calc(5 * var(--unit));
		font-family: lazydog;
		justify-items: right;
		line-height: 1.25;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.occupations span{
		display: block;
	}

	@media(max-aspect-ratio: 1/1){
		*{
			--unit: min(0.7vh, 1.157vw);
		}

		.strip{
			width: calc(60.5 * var(--unit));
			height: calc(100vh - 39.5 * var(--unit));
		}

		.intro{
			display: block;
		}

		.occupations{
			left: 0;
			justify-items: left;
			font-size: calc(7.7 * var(--unit));
		}

		.greetings{
			font-size: calc(7 * var(--unit));
		}

		.title{
			font-size: calc(18 * var(--unit));
		}
	}
</style>