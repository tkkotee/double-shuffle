import type { Cookies } from "@sveltejs/kit";

export async function getTokenFromCode(url :URL, cookies: Cookies, clientId: string, clientSecret: string )  : Promise<string> {
    let response = await fetch("https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": "Basic " + btoa(`${clientId}:${clientSecret}`)
                    },
                    body: `grant_type=authorization_code&code=${url.searchParams.get('code')}&redirect_uri=http://localhost:5173`
                });
            let token = await response.json();
            let access_token = token.access_token;
            let refresh_token = token.refresh_token;
            cookies.set('access_token', access_token!, { path: '/' });
            cookies.set('refresh_token', refresh_token!, { path: '/' });
            return access_token;
}

export async function getTokenFromRefresh(response: Response, cookies:Cookies) : Promise<string> {
    let token = await response.json();
    let access_token = token.access_token;
    let refresh_token = token.refresh_token;
    cookies.set('access_token', access_token!, { path: '/' });
    cookies.set('refresh_token', refresh_token!, { path: '/' });
    return access_token;
}

