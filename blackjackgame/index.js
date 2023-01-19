let firstCard = getRandomNum()
let secondCard = getRandomNum()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumCards = document.querySelector("#sum-cards")
let cardEl = document.querySelector("#card-el")



function getRandomNum () {
    // return Math.floor( Math.random() * 13 ) + 1
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
// math.random generate a random number between (0-1 exclusive 1)
// maths.floor convert every decimal number into whole numbers by removing decimals. For Dice game we want 1-6  Math.floor( Math.random() * 6 ) + 1
function startGame () {
    renderGame()
    
}



function renderGame  () {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    cardEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumCards.innerText = `sum: ${sum}`
}
function newCard  () {
    let card = getRandomNum()
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    
    renderGame()
   

}