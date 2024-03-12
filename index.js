// Code by incredible_prog

const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorBtn")
const display = document.getElementById("display")
const scoreP = document.getElementById("score")
const resetBtn = document.getElementById("resetBtn")
const remarkP = document.getElementById("remark")

const choices = ["Rock", "Paper", "Scissors"]
let score = 0

const getComputerChoice = ()=>{
    let randNumber = Math.floor(Math.random() * 3)
    // console.log("computer:" ,choices[randNumber])
    return choices[randNumber]
}

// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

const getResult = (playerChoice, computerChoice)=>{
    let result 
    if (playerChoice === computerChoice) {
        score += 0
        result = 0
      // All situations where human wins, set `score` to 1
      // make sure to use else ifs here
      } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score++
        result = 1
    
      } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score++
        result = 1
      } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score++
        result = 1
      // Otherwise human loses (aka set score to -1)
      } else {
        score--
        result = -1
      }

    // console.log(playerChoice, computerChoice)
    // console.log(score)
    // console.log(result)
    return result
    
}

const showResult = (playerChoice, computerChoice)=>{
    let result = getResult(playerChoice, computerChoice)
    // console.log("Result:", result)
    switch(result){
        case -1:
            display.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
            remarkP.innerText =  "You Lose!"
            break
        case 1:
            display.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
            remarkP.innerText = "You Win!"
            break
        case 0:
            display.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
            remarkP.innerText = "It's a draw!"

    }
}

const playGame = (playerChoice) =>{
    showResult(playerChoice, getComputerChoice())
    //update score
    scoreP.innerText = score
}

//reset the game
resetBtn.onclick = ()=>{
    score = 0
    display.innerText = ''
    scoreP.innerText = ''
}

// Code by incredible_prog