<script>
	export let data;
</script>

<div class="column">
	<div class="small">Your playlist of the day is:</div>
	<div style="height:10vh;" />
	<a href={data.playlist?.spotify_url} class="subColumn" target="_blank">
		<img src={data.playlist?.img_url} alt="Flowers in Chania" />
		<div style="height:2.5vh;" />
		<div class="bold big">{data.playlist?.name}</div>
	</a>
	<div style="height:10vh;" />
</div>

<style>
	img {
		height: 30vh;
		border-radius: 5%;
		backdrop-filter: blur(10px);
	}

	.big {
		font-size: 2em;
	}

	.small {
		font-size: 1.5em;
	}

	.column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.subColumn {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
