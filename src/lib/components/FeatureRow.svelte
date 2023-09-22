<script>
	import { page } from '$app/stores';
	import FeatureCard from './feature/FeatureCard.svelte';
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
	<a href="/drake" class="rowItem">
		<FeatureCard
			title="Drake"
			img={{ src: 'Drake.webp', alt: 'Drake' }}
			content="Live follower count from the world’s biggest artist"
		/>
	</a>
	{#if loggedIn}
		<a href="/playlist?code={$page.url.searchParams.get('code')}" class="rowItem">
			<FeatureCard
				title="Playlists"
				img={{ src: '/icons/playlist.png', alt: 'Playlist' }}
				content="Your playlists. Listed"
				icon={true}
			/>
		</a>
		<a href="/double_shuffle?code={$page.url.searchParams.get('code')}" class="rowItem">
			<FeatureCard
				title="Playlist of the Day"
				img={{ src: '/icons/calendar.png', alt: 'Calendar' }}
				content="Each day, we randomly select one of your playlists for you."
				icon={true}
			/>
		</a>
	{:else}
		<!-- TODO: Work out a new way of doing this to avoid unnecessary link reloads-->
		<a href="/" class="rowItem" on:click={alertLog}>
			<FeatureCard
				title="Playlists"
				img={{ src: '/icons/playlist.png', alt: 'Playlist' }}
				content="Your playlists. Listed"
				icon={true}
			/>
		</a>
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
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.rowItem {
		width: 27.5%;
	}

	a {
		text-decoration: none;
		margin: 0;
		padding: 0;
		color: inherit;
	}
</style>
