document.getElementById.score2 
document.getElementById.score1

let home = 0

let guest = 0


function incrementHome1(){
    home += 1
    score1.textContent = home
}


function incrementHome2(){
    home += 2
    score1.textContent = home
}

function incrementHome3(){
    home += 3
    score1.textContent = home
}

function incrementGuest1(){
    guest += 1
    score2.textContent = guest
}

function incrementGuest2(){
    guest += 2
    score2.textContent = guest
}

function incrementGuest3(){
    guest += 3
    score2.textContent = guest
}

function reset(){
    home = 0
    guest = 0
    score1.textContent = home
    score2.textContent = guest
}