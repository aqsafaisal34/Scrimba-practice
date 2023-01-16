let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
const decrement = () => {
    count -=  1
    count.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}




// use text content instead for innter text because inner text only gives human readable content like space doesnot show in inner text