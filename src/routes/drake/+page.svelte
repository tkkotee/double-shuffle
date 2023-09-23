<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="column">
	<div class="spacer" />
	<div class="align"><div class="text">Drake currently has:</div></div>
	<div class="align">
		<div class="text"><span style="font-size:1.5em;">{data.drakeInfo.followers.total} </span>Spotify followers!</div>
	</div>
	<div class="spacer" />
</div>

<style>
	.text {
		font-size: 2em;
		margin-left: auto;
		margin-right: auto;
	}

	.align {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5vh;
        height: 100vh;
	}
</style>
