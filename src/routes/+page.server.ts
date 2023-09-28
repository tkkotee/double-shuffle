import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { getTokenFromCode, getTokenFromRefresh } from '../lib/hooks/auth_hooks.js';

export const ssr = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies }): Promise<{ uid?: undefined; name?: undefined; img?: undefined; } | { uid: string; name: string; img: string; } | undefined>{
    // IF USER NOT LOGGED IN 
    if (url.searchParams.get('code') == null) {
        return {
        };
        // IF USER LOGGED IN
    } else {
        // Get access token from cookies
        let access_token = cookies.get('access_token');
        // Get refresh token from cookies
        let refresh_token = cookies.get('refresh_token');
        // If there is no saved access token, generate new one
        if (access_token == undefined || access_token === '') {
            access_token = await getTokenFromCode(url, cookies, CLIENT_ID, CLIENT_SECRET);
        }
        // Get user data using access token
        let user_response = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": `Bearer  ${access_token}`
            },
        },);
        // If call succeeds, return users info
        if (user_response.status == 200) {
            let user = await user_response.json();
            // Save user id to cookies. So that it can be used in subsequent 
            // pages.
            cookies.set('uid', user.id, { path: '/' });
            if (user.images != undefined) {
                return { uid: user.id, name: user.display_name, img: user.images[0].url };
            } else {
                return { uid: user.id, name: user.display_name, img: undefined};
            }
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
            // If call succeeds update access token
            if (response.status == 200) {
                access_token = await getTokenFromRefresh(response, cookies);
                // If refresh token invalid, generate new access token and refresh token.
            } else {
                access_token = await getTokenFromCode(url, cookies, CLIENT_ID, CLIENT_SECRET);
            }
            // Get user data using access token
            let new_user_response = await fetch("https://api.spotify.com/v1/me", {
                headers: {
                    "Authorization": `Bearer  ${access_token}`
                },
            },);
            let user = await new_user_response.json();
            // Save user id to cookies. So that it can be used in subsequent 
            // pages.
            cookies.set('uid', user.id, { path: '/' });
            if (user.images != undefined) {
                return { uid: user.id, name: user.display_name, img: user.images[0].url };
            } else {
                return { uid: user.id, name: user.display_name, img: undefined};
            }
            return {};
        }
    }

}