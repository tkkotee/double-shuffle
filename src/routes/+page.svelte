<script>
	import FeatureRow from '$lib/components/FeatureRow.svelte';
	import Header from '$lib/components/Header.svelte';
	import LogIn from '$lib/components/LogIn.svelte';
	import MobFeatureRow from '$lib/mob_components/Mob_FeatureRow.svelte';
	import MobHeader from '$lib/mob_components/Mob_Header.svelte';
	import MobLogIn from '$lib/mob_components/Mob_LogIn.svelte';
	export let data;
	// Get the users name from when we load up the page
	// Work out whether user is logged in from whether their name is undefined/null
	// TODO: This assumes that a spoitfy user's name cannot be null/empty. Replace with uid to be more secure
	$: name = data.name;
	$: img = data.img;
	$: loggedIn = name != undefined && name != null;
	let width = window.innerWidth;
</script>

<svelte:window bind:innerWidth={width} />

{#if width > 800}
	<div class="body">
		<!--Top row of logo and log in button-->
		<div class="row">
			<Header />
			<div class="spacer" />
			<LogIn {loggedIn} {name} {img} />
		</div>
		<!--Intro text-->
		<div class="text">
			Supercharge your Spotify usage with our range of helpful tools. Interact with your favourite
			artists in brand new ways, and escape the all-powerful Spotify algorithm.
		</div>
		<!--Row of feature cards-->
		<div class="featureRow">
			<FeatureRow {loggedIn} />
		</div>
	</div>
{:else}
<div class="mob_body">
	<!--Top row of logo and log in button-->
	<div class="row">
		<MobHeader />
		<div class="spacer" />
		<MobLogIn {loggedIn} {name} {img} />
	</div>
	<!--Intro text-->
	<div class="mob_text">
		Supercharge your Spotify usage with our range of helpful tools. Interact with your favourite
		artists in brand new ways, and escape the all-powerful Spotify algorithm.
	</div>
	<!--Row of feature cards-->
	<div class="featureRow">
		<MobFeatureRow {loggedIn} />
	</div>
	<div style="height:5vh;"></div>
</div>
{/if}

<style>
	.body {
		padding-top: 4vh;
		padding-left: 2.5vw;
		padding-right: 2.5vw;
	}

	.mob_body {
		padding-top: 2.5vh;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 5vw;
		padding-right: 5vw;
	}

	.featureRow {
		padding-left: 10vw;
		padding-right: 10vw;
	}

	.text {
		font-size: 1.4em;
		margin-top: 8vh;
		margin-left: 15vw;
		margin-right: 15vw;
		margin-bottom: 10vh;
	}

	.mob_text {
		font-size: 1.1em;
		margin-top: 8vh;
		margin-left: 10vw;
		margin-right: 10vw;
		margin-bottom: 10vh;
		text-align: center;
	}

	.spacer {
		flex: 1;
	}
</style>
