import { CLIENT_ID, CLIENT_SECRET, SUPABASE_KEY } from '$env/static/private';
import { getPlaylistOfTheDay } from '$lib/hooks/fetch_hooks';
import { redirect } from '@sveltejs/kit';
import { getTokenFromCode } from '../../lib/hooks/auth_hooks';
import { createClient } from '@supabase/supabase-js'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies }) {
    // Get access token from cookies
    let access_token = cookies.get('access_token');
    // If there is no access token. Generate one
    if (access_token == undefined || access_token === '') {
        access_token = await getTokenFromCode(url, cookies, CLIENT_ID, CLIENT_SECRET);
    }
    const supabaseUrl = 'https://avoouqpxcaoxxiigxbpm.supabase.co';
    const supabaseKey = SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data } = await supabase
        .from('Playlist')
        .select('playlist')
        .eq('id', 1);
    let playlist_index;
    if (data != null) {
        playlist_index = data[0].playlist;
        // Get the Playlist
        let playlist = await getPlaylistOfTheDay(access_token, playlist_index);
        // If there is an error with playlist retrieval, redirect back to home page.
        if (playlist.error == true) {
            throw redirect(302, `/?code=${url.searchParams.get('code')}`);
        }
        return { playlist: playlist };
    }
}