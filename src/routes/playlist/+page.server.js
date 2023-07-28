import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { getTokenFromCode, getTokenFromRefresh } from '../hooks';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies }) {
    // Get access token from cookies
    let access_token = cookies.get('access_token');
    // Get refresh token from cookies
    let refresh_token = cookies.get('refresh_token');
    // If thre is no saved access token, generate new one
    if (access_token == undefined || access_token === '') {
        access_token = await getTokenFromCode(url, cookies, CLIENT_ID, CLIENT_SECRET);
    }
    // Get user data using access token
    let user_response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    // If call succeeds, return users playlists
    if (user_response.status == 200) {
        let playlist_response = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": `Bearer  ${access_token}`
            },
        },);
        let playlist_json = await playlist_response.json();
        let playlists = playlist_json.items;
        let playlist_names = playlists.map((playlist) => playlist.name);
        return { names: playlist_names };
        // If call fails due to invalid access token, refresh access token and make call again
    } else if (user_response.status == 401) {
        let response = await fetch("https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
                },
                body: `grant_type=refresh_token&code=${cookies.get('refresh_token')}&redirect_uri=http://localhost:5173`
            });
        access_token = await getTokenFromRefresh(response, cookies);
        // Get user data using access token
        let playlist_response = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": `Bearer  ${access_token}`
            },
        },);
        let playlist_json = await playlist_response.json();
        let playlists = playlist_json.items;
        let playlist_names = playlists.map((playlist) => playlist.name);
        return { names: playlist_names };
    } else {
        return { names: `Failed due to ${user_response.status}` }
    }
}