let url = 'https://type.fit/api/quotes'
let author = document.getElementById('Author')
let quotes = document.getElementById('Quotes')

let btn = document.getElementById('GenerateQuotes')


let getQuotes = () => {
    let idx = Math.floor(Math.random() * 16)
    let val = fetch(url)
        .then((response) => response.json())
        .then((data) => {
            quotes.innerText = data[idx].text
            author.innerText = (data[idx].author.replace(", type.fit" , ""))
            console.log(data[0]);
            console.log(idx);
        })
}

getQuotes()
btn.addEventListener('click',()=>{
    getQuotes()
} )