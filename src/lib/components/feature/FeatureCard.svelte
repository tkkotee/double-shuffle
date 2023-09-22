<script>
	/**
	 * @type {string}
	 */
	 export let title;
	/**
	 * @type {{src: string; alt: string}}
	 */
	export let img;
	/**
	 * @type {string}
	 */
	export let content;
</script>

<div class="body">
	<div class="title">{title}</div>
	<img class="image" src={img.src} alt={img.alt} />
	<div class="content">{content}</div>
</div>

<style>
	.body {
		background: white;
		align-items: center;
		justify-content: start;
		border-radius: 10px;
		width: 25%;
        display: flex;
        flex-direction: column;
		box-shadow: 0px 3px 18.75px 0px rgba(0, 0, 0, 0.05);
		padding-top: 5vh;
		padding-bottom: 5vh;
		padding-left: 2vw;
		padding-right: 2vw;
	}

	.title {
		font-size: 1.5em;
	}

	img {
		height: 15vh;
		border-radius: 50%;
		margin-top: 5vh;
		margin-bottom: 5vh;
	}
</style>
