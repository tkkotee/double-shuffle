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

export async function getPlaylistOfTheDay(access_token: string) {
    let playlist_response = await fetch("https://api.spotify.com/v1/me/playlists?offset=0&limit=50", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    let playlist_json = await playlist_response.json();
    let playlists = playlist_json.items;
    let playlist_names = playlists.map((playlist: any) => playlist.name);
    let playlist_photo = playlists.map((playlist: any) => playlist.images[0].url);
    let length = playlist_names.length;
    let min = 0;
    let max = length - 1;
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return {name: playlist_names[randomInt], url: playlist_photo[randomInt]};
}