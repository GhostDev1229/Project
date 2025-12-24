let btn = document.getElementById("btn");
let qt = document.getElementById("quote");
let ath = document.getElementById("author");

// Array of quotes
const quotes = [
  { text: "Life is about not knowing, having to change, taking the moment and making the best of it.", author: "Gilda Radner" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" }
];

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  qt.innerHTML = `"${quote.text}"`;
  ath.innerText = "- " + (quote.author || "Unknown");
});
