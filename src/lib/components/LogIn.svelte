<script>
	/**
	 * @type {boolean}
	 */
	export let loggedIn;
	/**
	 * @type {string}
	 */
	export let name;
</script>

<div class="row">
	<img src="icons/account_circle_FILL0_wght400_GRAD0_opsz24.svg" alt="shuffle icon" />
	{#if loggedIn}
		<div class="button">{name}</div>
	{:else}
		<a href="/login"><div class="button">Log In</div></a>
	{/if}
</div>

<style>
	.button {
		font-size: 1.2em;
	}

	img {
		margin-right: 0.5vw;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
