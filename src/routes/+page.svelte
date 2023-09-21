<script>
	import { page } from '$app/stores';
	import FeatureRow from '$lib/components/FeatureRow.svelte';
	import Header from '$lib/components/Header.svelte';
	import LogIn from '$lib/components/LogIn.svelte';
	export let data;
	// Get the users name from when we load up the page
	// Work out whether user is logged in from whether their name is undefined/null
	// TODO: This assumes that a spoitfy user's name cannot be null/empty. Replace with uid to be more secure
	$: name = data.name;
	$: img = data.img;
	$: loggedIn = name != undefined && name != null;
	let alertLog = () => {
		alert('Log in before accessing this feature');
	};
</script>

<div class="body">
	<div class="row">
		<Header />
		<div class="spacer" />
		<LogIn loggedIn={loggedIn} name={name} img={img}/>
	</div>
	<div class="text">
		Supercharge your Spotify usage with our range of helpful tools. Interact with your favourite
		artists in brand new ways, and escape the all-powerful Spotify algorithm.
	</div>
	<div class="featureRow">
		<FeatureRow />
	</div>
	<ul>
		<li><a href="/drake">Drake live follower count</a></li>
		{#if loggedIn}
			<li>
				<a href="/playlist?code={$page.url.searchParams.get('code')}">Your Playlists</a>
			</li>
			<li>
				<a href="/double_shuffle?code={$page.url.searchParams.get('code')}"
					>Your Playlist of the Day</a
				>
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
		padding-top: 4vh;
		padding-left: 2.5vw;
		padding-right: 2.5vw;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.featureRow {
		padding-left: 10vw;
		padding-right: 10vw;
	}

	.text {
		font-size: 1.4em;
		margin-top: 6vh;
		margin-left: 15vw;
		margin-right: 15vw;
		margin-bottom: 5vh;
	}

	.spacer {
		flex: 1;
	}
</style>
