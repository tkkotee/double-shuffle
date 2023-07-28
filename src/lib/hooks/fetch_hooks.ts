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