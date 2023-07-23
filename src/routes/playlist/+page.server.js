import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies }) {
    // Get access token from cookies
    let access_token = cookies.get('access_token');
    // Get refresh token from cookies
    let refresh_token = cookies.get('refresh_token');
    // If thre is no saved access token, generate new one
    if (access_token == undefined || access_token === '') {
        console.log('Generating new access token because none saved')
        let response = await fetch("https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
                },
                body: `grant_type=authorization_code&code=${url.searchParams.get('code')}&redirect_uri=http://localhost:5173`
            });
        let token = await response.json();
        access_token = token.access_token;
        cookies.set('access_token', access_token, { path: '/' })
    }
    // Get user data using access token
    let user_response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            "Authorization": `Bearer  ${access_token}`
        },
    },);
    // If call succeeds, return users ID
    if (user_response.status == 200) {
        let user = await user_response.json();
        let uId = user.id;
        return { uid: uId };
        // If call fails due to invalid access token, refresh access token and make call again
    } else if (user_response.status == 401) {
        console.log('Regenerating access token due to it being invalid')
        let response = await fetch("https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
                },
                body: `grant_type=refresh_token&code=${cookies.get('refresh_token')}&redirect_uri=http://localhost:5173`
            });
        let token = await response.json();
        console.log(token);
        access_token = token.access_token;
        refresh_token = token.refresh_token;
        cookies.set('access_token', access_token, { path: '/' });
        cookies.set('refresh_token', refresh_token, { path: '/' });
        // Get user data using access token
        let new_user_response = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": `Bearer  ${access_token}`
            },
        },);
        let user = await new_user_response.json();
        let uId = user.id;
        return { uid: uId };
    } else {
        return { uid: `Failed due to ${user_response.status}` }
    }
}