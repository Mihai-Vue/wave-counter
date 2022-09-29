let saveEl = document.getElementById("saved-el")
let countEl = document.getElementById("count-el")
let count = 0
let totalEntries = 0
let sumEntries = document.getElementById("sum-entries")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalEntries += count
    sumEntries.textContent = totalEntries
    count=0
    countEl.textContent = count
}

function resetCounter() {
    totalEntries = 0
    sumEntries.textContent = 0
    count = 0
    saveEl.textContent = ""
}
