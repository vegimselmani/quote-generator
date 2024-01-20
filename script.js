async function getRandomQuote() {
    const respone = await fetch("https://api.quotable.io/random");
    const data = await respone.json();
    return data;
}

function displayNewQuote() {
    getRandomQuote().then((response)=>{
        document.getElementById("quote").textContent = `${response.content}`;
        document.getElementById("author").textContent = `${response.author}`;
    })
}