let computer = ""
let human = ""





const genCom = () => {
  let input = Math.random()
  console.log(input)
  if (input >= 0 && input < 0.33) {
    computer = "paper"
    document.getElementById("computer").innerHTML = "paper"
    return computer
  } else if (input > 0.33 && input < 0.66) {
    computer = "rock"
    document.getElementById("computer").innerHTML = "rock"
    return computer
  } else {
    computer = "scissors"
    document.getElementById("computer").innerHTML = "scissors"
    return computer
  }
  
}


const checkWinner = (human, computer) => {
  if (human == "rock" && computer == "scissors") {
    document.getElementById("results").innerHTML = "you win"
    return
  } else if (human == "paper" && computer == "rock") {
    document.getElementById("results").innerHTML = "you win"
    return
  } else if (human == "scissors" && computer == "paper") {
    document.getElementById("results").innerHTML = "you win"
    return
  } else if (human == computer) {
    document.getElementById("results").innerHTML = "tie game"
  }
    else {
    document.getElementById("results").innerHTML = "computer wins"
  }
}

const resetFunc = () => {
  computer = ""
  human = ""
  document.getElementById("results").innerHTML = ""
  document.getElementById("computer").innerHTML = "computer"
}



const gameFunc = (str) => {
human = str
console.log("human " + human)
genCom()
console.log(computer)
checkWinner(human, computer)
return
}