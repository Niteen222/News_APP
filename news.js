let key = "f01e294dc2f944938f1cfd697c95f5a6";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");



const getData = async (input) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log("hello");
    console.log(jsonData.articles);
    article = jsonData.articles.slice(0, 9)




    searchType.innerText = "Search : " + input;
    inputData.value = ""
    cardData.innerHTML = "";

    article.forEach(function (article) {
        console.log(article.description);

        des = article.description.length > 100 ? article.description.slice(0, 100) : article.description

        let divs = document.createElement("div")
        divs.classList.add("card");
        cardData.appendChild(divs);

        divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h2>${article.title}</h2>
    <p>${des}</p>
    <span> Read full artical <a target = "_blank" href = "${article.url}">&#8594;</a></span>
    `
    })

}


window.addEventListener("load", function () {
    getData("India")
})


SearchBtn.addEventListener("click", function () {
    let inputText = inputData.value;
    getData(inputText);
})

