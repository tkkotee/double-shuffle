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
<!-- TODO: Make sizing responsive. How to make all cards the same size. But make them size depending on the biggest sibling-->
<div class="body">
	<div class="title">{title}</div>
	{#if !icon}
		<img class="image" src={img.src} alt={img.alt} />
	{:else}
		<img class="icon" src={img.src} alt={img.alt} />
	{/if}
	<div class="content">{content}</div>
</div>

<style>
	.body {
		background: white;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		height: 50vh;
		min-height: 22.5vw;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 3px 18.75px 0px rgba(0, 0, 0, 0.05);
		padding-left: 2vw;
		padding-right: 2vw;
	}

	.title {
		font-size: 1.5em;
	}

	.image {
		height: 15vh;
		margin-top: 5vh;
		margin-bottom: 5vh;
		border-radius: 50%;
	}

	.icon {
		height: 15vh;
		margin-top: 5vh;
		margin-bottom: 5vh;
	}

</style>
