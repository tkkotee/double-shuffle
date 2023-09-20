<script>
	export let data;
</script>

<div>Your playlist of the day is:</div>
<ul>
	<div class="row">
        <img src={data.playlist?.url} alt="Flowers in Chania">
		<div>{data.playlist?.name}</div>
	</div>
</ul>

<style>
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        font-size: 3em;
    }

    img {
        height: 100px;
        width: 100px;
    }
</style>