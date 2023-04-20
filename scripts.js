let computer = ""
let human = ""





const genCom = () => {
  let input = Math.random()
  console.log(input)
  if (input >= 0 && input < 0.33) {
    computer = "paper"
    setTimeout(() => {
    document.getElementById("computer").innerHTML = "paper"
    }, 500)
    document.getElementById("results").innerHTML = "..."
    return computer
  } else if (input > 0.33 && input < 0.66) {
    computer = "rock"
    setTimeout(() => {
    document.getElementById("computer").innerHTML = "rock"
    }, 500)
    document.getElementById("results").innerHTML = "..."
    return computer
  } else {
    computer = "scissors"
    setTimeout(() => {
    document.getElementById("computer").innerHTML = "scissors"
    }, 500)
    document.getElementById("results").innerHTML = "..."
    return computer
  }
  
}


const checkWinner = (human, computer) => {
  if (human == "rock" && computer == "scissors") {
    setTimeout(() => {
    document.getElementById("results").innerHTML = "you win"
  }, 1000)
    return
  } else if (human == "paper" && computer == "rock") {
    setTimeout(() => {
      document.getElementById("results").innerHTML = "you win"
    }, 1000)
    return
  } else if (human == "scissors" && computer == "paper") {
    setTimeout(() => {
      document.getElementById("results").innerHTML = "you win"
    }, 1000)
    return
  } else if (human == computer) {
    setTimeout(() => {
      document.getElementById("results").innerHTML = "tie game"
    }, 1000)
    return
  }
    else {
      setTimeout(() => {
        document.getElementById("results").innerHTML = "computer wins"
      }, 1000)
  }
}

const resetFunc = () => {
  computer = ""
  human = ""
  document.getElementById("results").innerHTML = "results"
  document.getElementById("computer").innerHTML = "..."
}



const gameFunc = (str) => {
human = str
document.getElementById("computer").innerHTML = "..."
// console.log("human " + human)
genCom()
// console.log(computer)
checkWinner(human, computer)
return
}