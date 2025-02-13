import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kmpcdjoavvncymmqwbra.supabase.co"
const supabaseAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttcGNkam9hdnZuY3ltbXF3YnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NDkwMTksImV4cCI6MjA1MjQyNTAxOX0.hbB-IcXludyzs82H4aCzaEfju-EGePEHOQMa0ZxsVKI"

export const supabaseClient = createClient(supabaseUrl,supabaseAnon)
