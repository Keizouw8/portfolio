<Load {stillLoading} />
<Cursor />
<Paper onload={() => stillLoading = false} />
<Landing />
<Me />
<Programming />
<Philosophy />
<Contact />
<script lang="ts">
	import Load from "$lib/load.svelte";
	import Paper from "$lib/paper.svelte";
	import Cursor from "$lib/cursor.svelte";
	import Landing from "./landing.svelte";
	import Me from "./me.svelte";
	import Philosophy from "./philosophy.svelte";
	import Programming from "./programming.svelte";
	import Contact from "./contact.svelte";

	let stillLoading = $state(true);
</script>
