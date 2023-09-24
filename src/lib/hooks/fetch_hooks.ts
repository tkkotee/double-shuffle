// Get users spotify playlists
export async function getPlaylists(access_token: string) {
    // Make api call for current users playlists. Get first 50
    let playlist_response = await fetch("https://api.spotify.com/v1/me/playlists?offset=0&limit=50", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    // Turn response into list of playlist object
    let playlist_json = await playlist_response.json();
    let playlists = playlist_json.items;
    // Map so that we just take name and spotify url
    return playlists.map((playlist: any) => {return {name: playlist.name, spotify_url: playlist.external_urls.spotify};});
}


export async function getPlaylistOfTheDay(access_token: string, playlist_index: any) {
    //TODO: Change length so that it reads the users current #playlists from supabase 
    // Retrieve the relevant playlist from the index stored in supabase
    let length = 50;
    let int = playlist_index % length;
    let playlist_response = await fetch(`https://api.spotify.com/v1/me/playlists?offset=${int}&limit=1`, {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    // If playlist list is succesfully retrieved, return palylist of the day
    if (playlist_response.status == 200) {
        let playlist_json = await playlist_response.json();
        let playlists = playlist_json.items;
        // Get the first item in the array of playlists. We have 
        // set limit to 1 so this is just the relevant playlist
        let playlist = playlists[0];
        return {name: playlist.name, img_url: playlist.images[0].url, spotify_url: playlist.external_urls.spotify, error: false};
    // Otherwise return error
    } else {
        return {error: true};
    }
   
}