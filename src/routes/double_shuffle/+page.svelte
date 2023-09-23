<script>
	export let data;
</script>

<div class="column">
    <div class="small">Your playlist of the day is:</div>
    <img src={data.playlist?.url} alt="Flowers in Chania">
    <div class="bold big">{data.playlist?.name}</div>
</div>

<style>
    img {
        height: 30vh;
        margin-top: 10vh;
        margin-bottom: 2.5vh;
        border-radius: 5%;
        backdrop-filter: blur(10px);
    }

	.big {
        font-size: 2em;
        margin-bottom: 10vh;
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
</style>