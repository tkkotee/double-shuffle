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
    let playlist_response = await fetch(`https://api.spotify.com/v1/me/playlists?offset=0&limit=50`, {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    // If playlist list is succesfully retrieved, return palylist of the day
    if (playlist_response.status == 200) {
        let playlist_json = await playlist_response.json();
        let playlists = playlist_json.items;
        let playlist_names = playlists.map((playlist: any) => playlist.name);
        let playlist_img_urls = playlists.map((playlist: any) => playlist.images[0].url);
        let playlist_spotify_urls = playlists.map((playlist: any) => playlist.external_urls.spotify);
        let length = playlist_names.length;
        let int = playlist_index % length;
        return {name: playlist_names[int], img_url: playlist_img_urls[int], spotify_url: playlist_spotify_urls[int], error: false};
    // Otherwise return error
    } else {
        return {error: true};
    }
   
}