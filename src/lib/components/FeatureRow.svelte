<script>
	import FeatureCard from './feature/FeatureCard.svelte';
</script>

<div class="row">
	<FeatureCard
		title="Drake"
		img={{ src: 'Drake.webp', alt: 'Drake' }}
		content="Live follower count from the world’s biggest artist"
	/>
	<FeatureCard
		title="Drake"
		img={{ src: 'Drake.webp', alt: 'Drake' }}
		content="Live follower count from the world’s biggest artist"
	/>
	<FeatureCard
		title="Drake"
		img={{ src: 'Drake.webp', alt: 'Drake' }}
		content="Live follower count from the world’s biggest artist"
	/>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
