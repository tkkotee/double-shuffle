<script>
	import FeatureCard from "./feature/FeatureCard.svelte";

</script>
<div class="row">
<FeatureCard/>
<FeatureCard/>
<FeatureCard/>
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>