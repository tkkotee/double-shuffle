export async function getPlaylists(access_token: string) {
    let playlist_response = await fetch("https://api.spotify.com/v1/me/playlists?offset=0&limit=50", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    let playlist_json = await playlist_response.json();
    let playlists = playlist_json.items;
    let playlist_names = playlists.map((playlist: any) => playlist.name);
    return playlist_names;
}

export async function getPlaylistOfTheDay(access_token: string, playlist_index: any) {
    let playlist_response = await fetch("https://api.spotify.com/v1/me/playlists?offset=0&limit=50", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    // IF playlist list is succesfully retrieved, return palylist of the day
    if (playlist_response.status == 200) {
        let playlist_json = await playlist_response.json();
        let playlists = playlist_json.items;
        let playlist_names = playlists.map((playlist: any) => playlist.name);
        let playlist_photo = playlists.map((playlist: any) => playlist.images[0].url);
        let length = playlist_names.length;
        let int = playlist_index % length;
        return {name: playlist_names[int], url: playlist_photo[int], error: false};
    // Otherwise return error
    } else {
        return {error: true};
    }
   
}