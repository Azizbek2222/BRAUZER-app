import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// ❗ O'zingizning Supabase URL va anon key ni bu yerga qo'ying
export const supabase = createClient(
  "https://cqjilskroiylmunpavjy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxamlsc2tyb2l5bG11bnBhdmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MjExNTgsImV4cCI6MjA3OTI5NzE1OH0.e8wFwakbu9R0iE6bxCc0kguZkUT3T89y9RV-36iP3uE"
);

// Foydalanuvchi ID
export let userId = localStorage.getItem("userId");
if (!userId) {
  userId = "user_" + Date.now();
  localStorage.setItem("userId", userId);
}

// Balansni yuklash
export async function loadBalance() {
  const { data } = await supabase
    .from("users")
    .select("balance")
    .eq("id", userId)
    .single();
  
  let balance = data?.balance || 0;
  document.getElementById("balance").innerText = balance.toFixed(2);
}

// Balansga pul qo‘shish
export async function addBalance(amount) {
  const { data } = await supabase
    .from("users")
    .select("balance")
    .eq("id", userId)
    .single();
  
  if (!data) {
    // Yangi user
    await supabase
      .from("users")
      .insert([{ id: userId, balance: amount }]);
  } else {
    const newBalance = (data.balance || 0) + amount;
    
    await supabase
      .from("users")
      .update({ balance: newBalance })
      .eq("id", userId);
  }
  
  loadBalance();
}

// Dastlabki balansni yuklash
loadBalance();
