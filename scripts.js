let computer = ""


const genCom = () => {
  let input = Math.random()
  // console.log(input)
  if (input >= 0 && input < 0.33) {
    computer = "paper"
    // console.log(computer)
    return computer
  } else if (input > 0.33 && input < 0.66) {
    computer = "rock"
    // console.log(computer)
    return computer
  } else {
    computer = "scissors"
    // console.log(computer)
    return computer
  }
  
}




const checkWinner = (human, computer) => {
  if (human == "rock" && computer == "scissors") {
    console.log("Human Wins")
    return
  } else if (human == "paper" && computer == "rock") {
    console.log("Human Wins")
    return
  } else if (human == "scissors" && computer == "paper") {
    console.log("Human Wins")
    return
  } else {
    console.log("computer wins")
  }
}

  
genCom()
checkWinner("paper", computer)
