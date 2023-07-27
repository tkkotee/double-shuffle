<script>
    import { page } from '$app/stores'
    export let data;
    $: loggedIn = data.loggedIn;
    $: name = data.name;
    $: uid = data.uid;
</script>

<div class="body">
<div class="row">
    <div class="heading">TK's Spotify Projects</div>
    <div class="spacer"></div>
    {#if loggedIn}
    <div class="button">{name}</div>
    {:else}
    <a href="/login"><div class="button">Log In</div></a>
    {/if}
</div>
<ul>
   <li><a href="/drake">Drake live follower count</a></li>
   <li><a href="/playlist?code={$page.url.searchParams.get('code')}">Playlist of the day!</a></li>
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