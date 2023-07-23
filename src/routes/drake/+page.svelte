<script>
	import Button from "./Button.svelte";
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div>Here's some info about drake: Followers: {data.drakeInfo.followers.total}</div>
