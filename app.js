// Use a CORS proxy to bypass GitHub Pages restrictions
let url = "https://api.quotable.io/random";
let proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

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
        let res = await fetch(proxy);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        let data = await res.json();

        // allorigins wraps the response in "contents"
        let content = JSON.parse(data.contents);
        return [content.content, content.author];
    } catch (e) {
        console.error("error - ", e);
        qt.innerText = "Failed to load quote 😢";
        ath.innerText = "";
    }
}
