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
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2b291cXB4Y2FveHhpaWd4YnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNzMxOTksImV4cCI6MjAxMDY0OTE5OX0.HE8uTgXZ5k-FbXla4n6aCeYP_60QzWW__Up7s3S1oPg' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
