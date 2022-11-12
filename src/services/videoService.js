import { createClient } from "@supabase/supabase-js";

//const PROJECT_URL = "https://okstarojudwxmjdcuhea.supabase.co";
//const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rc3Rhcm9qdWR3eG1qZGN1aGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4OTU1OTUsImV4cCI6MTk4MDQ3MTU5NX0.shktap50ImF9SqhqcsugSpg38trqKe7aNEP4RvhpQE0";
const PROJECT_URL = "https://jszvbvryrulmbkkbjpod.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzenZidnJ5cnVsbWJra2JqcG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjI5NjksImV4cCI6MTk4Mzc5ODk2OX0.bdLpOAgCYy3bvTKG5Mb0DE3PAIVRp9LJX6JdcJdeHAo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}