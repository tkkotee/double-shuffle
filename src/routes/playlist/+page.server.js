import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { getPlaylists } from '$lib/hooks/fetch_hooks';
import { getTokenFromCode, getTokenFromRefresh } from '../../lib/hooks/auth_hooks';

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
        let playlists = getPlaylists(access_token);
        return { playlists: playlists };
        // If call fails due to invalid access token, refresh access token and make call again
    } else if (user_response.status == 401) {
        let response = await fetch("https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
                },
                body: `grant_type=refresh_token&code=${refresh_token}&redirect_uri=http://${url.host}`
            });
        access_token = await getTokenFromRefresh(response, cookies);
        // Get user data using access token
        let playlists = getPlaylists(access_token);
        return { playlists: playlists };
    } else {
        return { playlists: `Failed due to ${user_response.status}` }
    }
}