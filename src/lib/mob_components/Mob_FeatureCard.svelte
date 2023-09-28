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
	/**
	 * @type {boolean}
	 */
	export let icon = false;
</script>
<div class="body">
	<!-- Title of feature-->
	<div class="title">{title}</div>
	<!-- Image to display-->
	{#if !icon}
		<img class="image" src={img.src} alt={img.alt} />
	{:else}
		<img class="icon" src={img.src} alt={img.alt} />
	{/if}
	<!-- Description of feature-->
	<div class="content">{content}</div>
</div>

<style>
	.body {
		background: white;
		border-radius: 10px;
		box-shadow: 0px 3px 18.75px 0px rgba(0, 0, 0, 0.05);
		/* Set a fixed height for cards so they are all the same height*/
        height: 42.5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-left: 3vw;
		padding-right: 3vw;
	}

	.title {
		font-size: 1.3em;
	}

	.image {
		height: 10vh;
		margin-top: 3vh;
		margin-bottom: 3vh;
		border-radius: 50%;
	}

	.icon {
		height: 15vh;
		margin-top: 3vh;
		margin-bottom: 3vh;
	}

	.content {
		/* TODO: Make a function to properly size text*/
		font-size: 0.9em;
        text-align: center;
	}

</style>