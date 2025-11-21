import { addBalance } from "./firebase.js";

// AdsGram
const AdController = window.Adsgram.init({
  blockId: "int-17980"
});

document.getElementById("showAdBtn").addEventListener("click", () => {
  
  AdController.show().then(result => {
    
    if (result.done && !result.error) {
      addBalance(0.02);
      alert("💰 0.02 RUB qo‘shildi!");
    } else {
      alert("Reklama tugamadi!");
    }
    
  });
  
});
