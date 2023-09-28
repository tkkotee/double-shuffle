<script>
	export let data;
	import {page} from "$app/stores"
	let mobile = $page.url.searchParams.get("mobile") == 'true'
</script>
<div class="column">
	<div class="small" style:--font-size={mobile ? "1.3em" : "1.5em"}>Your playlist of the day is:</div>
	<div style="height:10vh;" />
	<a href={data.playlist?.spotify_url} class="subColumn" target="_blank">
		<img src={data.playlist?.img_url} alt="Flowers in Chania" style:--height={mobile ? "25vh" : "30vh"}/>
		<div style:--height={mobile ? "4vh" : "2.5vh"} class="empty"/>
		<div class="bold big" style:--font-size={mobile ? "1.5em" : "2em"}>{data.playlist?.name}</div>
	</a>
	<div style="height:10vh;" />
</div>


<style>
	img {
		height: var(--height);
		border-radius: 5%;
		backdrop-filter: blur(10px);
	}

	.empty {
		height: var(--height);
	}

	.big {
		font-size: var(--font-size);
	}

	.small {
		font-size: var(--font-size);
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
