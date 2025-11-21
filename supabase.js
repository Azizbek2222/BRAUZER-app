// Supabase bilan ulanish
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabaseUrl = 'https://cqjilskroiylmunpavjy.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxamlsc2tyb2l5bG11bnBhdmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MjExNTgsImV4cCI6MjA3OTI5NzE1OH0.e8wFwakbu9R0iE6bxCc0kguZkUT3T89y9RV-36iP3uE';
export const supabase = createClient(supabaseUrl, supabaseKey);

// Foydalanuvchi ID
export let userId = localStorage.getItem('userId');
if(!userId){
    userId = 'user_' + Date.now();
    localStorage.setItem('userId', userId);
}
