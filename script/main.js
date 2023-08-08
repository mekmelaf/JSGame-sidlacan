const win_lose = document.getElementById("win_lose")
const p1Choice = document.getElementById("p1_choice")
const p2Choice = document.getElementById("p2_choice")
let history = document.getElementById("history")
const p1Score = document.getElementById("score1")
const p2Score = document.getElementById("score2")
let score1 =  0
let score2 =  0
    
function laroTayo(userChoice) {
  const choices = ['Rock', 'Paper', 'Scissor']
  const ComputerChoice = choices[Math.floor(Math.random() * 3)]
  if(userChoice === ComputerChoice) {
    win_lose.innerHTML = "Tie"
    win_lose.style.color = "black"  
    win_lose.style.fontSize = "30px"
  } else if (
      userChoice === 'Rock' && ComputerChoice === "Scissor" ||
      userChoice === 'Paper' && ComputerChoice === "Rock" ||
      userChoice === 'Scissor' && ComputerChoice === "Paper"
      ) {
     score1 ++
     p1Score.innerHTML = score1
    win_lose.innerHTML = "You Win"
    win_lose.style.color = "green"
    win_lose.style.fontSize = "30px"
  } else {
    score2 ++
    p2Score.innerHTML = score2
    win_lose.innerHTML = "You Lose"
    win_lose.style.color = "red"
    win_lose.style.fontSize = "30px"
  }
  p1Choice.innerHTML = userChoice
  p2Choice.innerHTML = ComputerChoice
  history.insertAdjacentHTML("afterbegin",`<div>${userChoice} ${win_lose.textContent} ${ComputerChoice}</div>`)
} 

function ReloadPage() {
  location.reload()
  }