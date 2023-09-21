<script>
	/**
	 * @type {boolean}
	 */
	export let loggedIn;
	/**
	 * @type {string | undefined}
	 */
	export let name;
	/**
	 * @type {string | undefined}
	 */
	export let img;

    /**
	 * @param {string} name
	 */
    function getInitials(name) {
        let nameList = name.split(' ');
        return `${nameList[0]} ${nameList[1][0]}.`;
    }
</script>

<div class="row">
	{#if loggedIn && name != undefined}
		<img class="profile" src={img} alt="profile icon" />
		<div class="button">{getInitials(name)}</div>
	{:else}
		<img src="icons/account_circle_FILL0_wght400_GRAD0_opsz24.svg" alt="shuffle icon" />
		<a href="/login"><div class="button">Log In</div></a>
	{/if}
</div>

<style>
	.button {
		font-size: 1.2em;
	}

    .profile {
        border-radius: 50%;
    }

	img {
		margin-right: 0.5vw;
		height: 4vh;
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
