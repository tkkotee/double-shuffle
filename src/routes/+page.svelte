<script>
	import { page } from '$app/stores';
	export let data;
	// Get the users name from when we load up the page
	// Work out whether user is logged in from whether their name is undefined/null
	// TODO: This assumes that a spoitfy user's name cannot be null/empty. Replace with uid to be more secure
	$: name = data.name;
	$: loggedIn = name != undefined && name!=null;
    let alertLog = () => {
        alert("Log in before accessing this feature");
    };
</script>

<div class="body">
	<div class="row">
		<div class="heading">TK's Spotify Projects</div>
		<div class="spacer" />
		{#if loggedIn}
			<div class="button">{name}</div>
		{:else}
			<a href="/login"><div class="button">Log In</div></a>
		{/if}
	</div>
	<ul>
		<li><a href="/drake">Drake live follower count</a></li>
		{#if loggedIn}
			<li>
				<a href="/playlist?code={$page.url.searchParams.get('code')}">Your Playlists</a>
			</li>
			<li>
				<a href="/double_shuffle?code={$page.url.searchParams.get('code')}">Your Playlist of the Day</a>
			</li>
		{:else}
        <li>
            <a href="/" on:click={alertLog}>Your Playlists</a>
        </li>
		<li>
            <a href="/" on:click={alertLog}>Your Playlist of the Day</a>
        </li>
		{/if}
	</ul>
</div>

<style>
	.body {
		padding-top: 30px;
		padding-left: 50px;
		padding-right: 50px;
	}
	.row {
		display: flex;
		flex-direction: row;
		padding-bottom: 30px;
	}

	.spacer {
		flex: 1;
	}

	.button {
		font-size: 1.2em;
		border: solid 1px black;
	}

	.heading {
		font-size: 2em;
		font-weight: 600;
	}
</style>
