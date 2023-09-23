// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

console.log("Hello from Functions!")

serve(async (req) => {
  // const { name } = await req.json();
  let playlist: number = Math.floor(Math.random() * (50 - 0 + 1));
  const data = {
    playlist: playlist,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'https://avoouqpxcaoxxiigxbpm.supabase.co/functions/v1/playlist_update' \
//   --header 'Authorization: Bearer <ANON-KEY>
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
