let homeSctoreBtnOne = document.getElementById("home-score-btn-1")
let homeSctoreBtnTwo = document.getElementById("home-score-btn-2")
let homeSctoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl = document.getElementById("home-score")
let decreaseHome = document.getElementById("decrease-home")
let homeScore = 0
let guestSctoreBtnOne = document.getElementById("guest-score-btn-1")
let guestSctoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestSctoreBtnThree = document.getElementById("guest-score-btn-3")
let guestStoreEl = document.getElementById("guest-score")
let decreaseGuest = document.getElementById("decrease-guest")
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
function decreaseHomeScore(){
    homeScore -=1
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
function decreaseGuestScore(){
    guestScore -=1
    guestStoreEl.textContent = guestScore
}