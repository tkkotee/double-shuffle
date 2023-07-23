import { CLIENT_SECRET, CLIENT_ID } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let response = await fetch("https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        });
    let token = await response.json();
    let access_token = token.access_token;
    let drakeInfo = await fetch("https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    return { drakeInfo: drakeInfo.json() };
}