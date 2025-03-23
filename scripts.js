//price of coins of day
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// getting the elements of forms
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")

// manipulating the input amount for to receive only numbers
amount.addEventListener("input", () =>{

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//capturing the event of submit (to send) of forms
form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})

//function for convert the coins
function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        footer.classList.add("show-result")
        let total = amount * price
        result.textContent = (total) + ' Reais'

    } catch (error) {
        footer.classList.remove("show-result")
        alert("Nao foi possivel executar isso")
    }
}

//foramt coins in real Brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
       style: "currency",
       currency: "BRL",
})
}