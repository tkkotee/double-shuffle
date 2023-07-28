<script>
    export let data;
</script>
<div>Your playlist names are:</div>
<ul>
    {#each data.names as playlist}
        <div>{playlist}</div>
    {/each}
</ul>