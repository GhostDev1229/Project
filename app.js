let url = "https://quote-garden.onrender.com/api/v3/quotes/random";

let btn = document.getElementById("btn");
let qt = document.getElementById("quote");
let ath = document.getElementById("author");

btn.addEventListener("click", async () => {
    qt.innerText = "Loading...";
    ath.innerText = "";

    let quote = await getQuote();

    if (!quote) {
        qt.innerText = "Failed to load quote 😢";
        return;
    }

    qt.innerHTML = `"${quote[0]}"`;
    ath.innerText = "- " + (quote[1] || "Unknown");
});

async function getQuote() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        return [
            data.data[0].quoteText,
            data.data[0].quoteAuthor
        ];
    } catch (e) {
        console.log("error - ", e);
        return null;
    }
}
