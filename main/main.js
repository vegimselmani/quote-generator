async function getRandomQuote(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
}
  function displayQuote() {
    getRandomQuote().then((response)=>{ 
    document.getElementById("quote").textContent= `${response.content}`; 
    document.getElementById("author").textContent= `${response.author}`; 
})
  }