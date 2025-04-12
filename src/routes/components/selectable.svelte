<div
	data-selectable
	data-effect={JSON.stringify(effect)}
	{...attributes}>
	{@render children?.()}
</div>
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	type EffectStyles = "underline";
	type Effect = EffectStyles | { effect: EffectStyles, style?: any };
	type Props = {
		children: any | undefined,
		effect: Effect
	} & HTMLAttributes<HTMLDivElement>;
	let { children, effect,...attributes }: Props = $props();
	if(typeof effect == "string") effect = { effect: (effect as EffectStyles) };
</script>
