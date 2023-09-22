<script>
	import FeatureCard from './feature/FeatureCard.svelte';
</script>

<div class="row">
	<a href="/drake" class="rowItem">
		<FeatureCard
			title="Drake"
			img={{ src: 'Drake.webp', alt: 'Drake' }}
			content="Live follower count from the world’s biggest artist"

		/>
	</a>
	<a href="/drake" class="rowItem">
		<FeatureCard
			title="Playlists"
			img={{ src: '/icons/playlist.png', alt: 'Playlist' }}
			content="Your playlists. Listed"
			icon={true}
		/>
	</a>
	<a href="/drake" class="rowItem">
		<FeatureCard
			title="Playlist of the Day"
			img={{ src: '/icons/calendar.png', alt: 'Calendar' }}
			content="Each day, we randomly select one of your playlists for you."
			icon={true}
		/>
	</a>
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
        color: black;
	}
</style>
