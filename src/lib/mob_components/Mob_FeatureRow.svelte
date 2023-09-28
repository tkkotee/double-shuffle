<script>
	import { page } from '$app/stores';
	import FeatureCard from './Mob_FeatureCard.svelte';

	// Is the user loggedIn
	/**
	 * @type {boolean}
	 */
	export let loggedIn;
	// Function to alert user they must log in
	let alertLog = () => {
		alert('Log in to access this feature');
	};
</script>

<!-- The row of cards with links to each of the double shuffle features-->
<div class="row">
	{#if loggedIn}
    <!--TODO: Come up with cleverer way of conveying to double shuffle page that page is on mobile--> 
		<a href="/double_shuffle?code={$page.url.searchParams.get('code')}&mobile=true" class="rowItem">
			<FeatureCard
				title="Playlist of the Day"
				img={{ src: '/icons/calendar.png', alt: 'Calendar' }}
				content="Each day, we randomly select one of your playlists for you."
				icon={true}
			/>
		</a>
	{:else}
		<a href="/" class="rowItem" on:click={alertLog}>
			<FeatureCard
				title="POTD"
				img={{ src: '/icons/calendar.png', alt: 'Calendar' }}
				content="Your playlist of the day, randomly selected from your library!"
				icon={true}
			/>
		</a>
	{/if}
</div>

<style>
	a {
		text-decoration: none;
		margin: 0;
		padding: 0;
		color: inherit;
	}
</style>
