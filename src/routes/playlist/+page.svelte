<script>
	export let data;
</script>

<div class="title">Your playlists:</div>
<div class="body">
	{#each data.playlists as playlist}
		<div class="item"><a href={playlist.spotify_url} target="_blank">{playlist.name}</a></div>
	{/each}
</div>
<div style="height:2vh;"></div>

<style>
	.title {
		font-size: 1.5em;
		padding-left: 1vw;
		padding-top: 1vw;
	}

    .body {
        padding-left: 2vw;
        padding-top: 2.5vh;
    }

    .item {
        padding-bottom: 0.5vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>
