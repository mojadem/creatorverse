import { createClient } from "@supabase/supabase-js";

const URL = "https://febgckdlhknsqntgatrs.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlYmdja2RsaGtuc3FudGdhdHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4NTUxNTYsImV4cCI6MjAzNDQzMTE1Nn0.J9nn4EgCGPc1dYP5J1WXbxJbnDQC1PksdzmKITMUOnU";

export const supabase = createClient(URL, API_KEY);
