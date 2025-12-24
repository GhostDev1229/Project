let btn = document.getElementById("btn");
let qt = document.getElementById("quote");
let ath = document.getElementById("author");

// API endpoint
let url = "https://quote-garden.onrender.com/api/v3/quotes/random";

btn.addEventListener("click", async () => {
    qt.innerText = "Loading...";
    ath.innerText = "";

    try {
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let data = await res.json();
        let quoteText = data.data[0].quoteText;
        let quoteAuthor = data.data[0].quoteAuthor || "Unknown";

        qt.innerHTML = `"${quoteText}"`;
        ath.innerText = "- " + quoteAuthor;
    } catch (e) {
        console.error("Error fetching quote:", e);
        qt.innerText = "Failed to load quote 😢";
        ath.innerText = "";
    }
});
