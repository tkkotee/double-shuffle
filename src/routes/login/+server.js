import { redirect } from '@sveltejs/kit';
import { CLIENT_ID } from '$env/static/private';

export async function GET() {
    throw redirect(302, `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=playlist-read-private user-read-private user-read-email playlist-read-collaborative`)
}