import { CLIENT_ID, CLIENT_SECRET, SUPABASE_KEY, SUPABASE_URL } from '$env/static/private';
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
    // Initialise supabase
    const supabaseUrl = SUPABASE_URL;
    const supabaseKey = SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    // Get user's spotify id
    let uid = cookies.get('uid');
    // Read the supabase entry with the user's id.
    // Since all uid's are unique, can safely limit to 1 result.
    const { data } = await supabase
        .from('Playlist')
        .select('playlist')
        .eq('uid', uid)
        .limit(1)
        .maybeSingle();
    let playlist_index;
    // If data is returned, get the playlist of the day by indexing the user's
    // list of playlists with the database value.
    if (data != null) {
        playlist_index = data.playlist;
        // Get the Playlist
        let playlist = await getPlaylistOfTheDay(access_token, playlist_index);
        // If there is an error with playlist retrieval, redirect back to home page.
        if (playlist.error == true) {
            throw redirect(302, `/?code=${url.searchParams.get('code')}`);
        }
        return { playlist: playlist };
        // TODO: Make playlist random int between 0 and 50.
    } else {
        await supabase
            .from('Playlist')
            .insert({ uid: uid, playlist: 0 });
        // Read the supabase entry with the user's id.
        // Since all uid's are unique, can safely limit to 1 result.
        const { data } = await supabase
            .from('Playlist')
            .select('playlist')
            .eq('uid', uid)
            .limit(1)
            .maybeSingle();
        playlist_index = data?.playlist;
        // Get the Playlist
        let playlist = await getPlaylistOfTheDay(access_token, playlist_index);
        // If there is an error with playlist retrieval, redirect back to home page.
        if (playlist.error == true) {
            throw redirect(302, `/?code=${url.searchParams.get('code')}`);
        }
        return { playlist: playlist };
    }
    // TODO: Handle general error

}