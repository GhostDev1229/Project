let url = "https://api.quotable.io/random";

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
        let res = await fetch(url, { mode: 'cors' });  // explicitly allow CORS
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        let data = await res.json();

        return [data.content, data.author];
    } catch (e) {
        console.error("error - ", e);
        qt.innerText = "Failed to load quote 😢";
        ath.innerText = "";
    }
}
