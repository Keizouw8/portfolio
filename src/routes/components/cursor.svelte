<svelte:window
	bind:innerHeight
	bind:innerWidth
	onclick={() => (selected as HTMLElement | undefined)?.click()}
	oncontextmenu={() => (selected as HTMLElement | undefined)?.click()}
	{onmousemove} />
{#if !isMobile() }
	<div class="cursor" style="
		top: {selected ? bounds?.top : y}px;
		left: {selected ? bounds?.left : x}px;
		height: {selected ? `${bounds?.height}px` : "max(4.5vw, 6vh)"};
		width: {selected ? `${bounds?.width}px` : "max(4.5vw, 6vh)"};
		border-radius: {selected ? 0 : 50}%;
		transform: { !selected && "translate(-50%, -50%)" };
		transition: { selected ? "0.175s" : "width 0.1s, height 0.1s" };">
		<div style="background: white; width: 100vw; height: 100vh; position: absolute; display: { selected ? "none" : "block" }; top: calc({-y}px + max(2.25vw, 3vh)); left: calc({-x}px + max(2.25vw, 3vh))">
			{@render children?.()}
		</div>
		{#if selected}
			<div class="background {JSON.parse(selected.getAttribute("data-effect") as string).effect}"
				style={JSON.parse(selected?.getAttribute("data-effect") as string)?.style} ></div>
		{/if}
	</div>
{/if}
<script lang="ts">
	import isMobile from "$lib/isMobile";
	let { children }: { children?: any } = $props();
	let x = $state(-1000);
	let y = $state(-1000);
	let selected: Element | undefined = $state();
	let bounds: DOMRect | undefined = $derived(selected?.getBoundingClientRect());
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	function onmousemove({ clientX, clientY }: MouseEvent){
		let elements = document.elementsFromPoint(clientX, clientY).filter((e) => e.hasAttribute("data-selectable"));
		selected = elements.pop();
		if(selected) return;
		x = clientX;
		y = clientY;
	}
</script>
<style>
	.cursor{
		position: fixed;
		z-index: 99999;
		pointer-events: none;
		overflow: hidden;
		cursor: none !important;
	}

	.background{
		transition: 0.175s;
		overflow: hidden;
	}

	.underline{
		bottom: 0;
		width: 100%;
		height: 0.5vh;
		background: white;
		position: absolute;
	}
</style>
