console.log("SCPT TEST")

// Use random method to get choice for round function
function getComputerChoice() {

    let choice = ""
    let randNum = Math.floor(Math.random() * 3)

    if (randNum == 0) {
        choice = "rock"
    } 
    else if (randNum == 1) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }

    return choice

}



// Use random method to get choice for round function
function getHumanChoice() {
    
    let choice = ""

    do {
        choice = window.prompt("Choose [rock] [paper] [scissors]")

    } while (choice != "rock" && choice != "paper" && choice != "scissors")

    return choice

}


// Simulate rounds for playGame func returning a win or loss value
let winCond = [
    {
        type: "rock",
        win: "scissors"
    },
    {
        type: "paper",
        win: "rock"
    },
    {
        type: "scissors",
        win: "paper"
    }
]
let score = 0

function playRound(curId) {

    let humanPick = getHumanChoice()
    let compPick = getComputerChoice()
    let returnList = [humanPick,compPick,curId]
    console.log("Computer chooses " + compPick)
    console.log("Human chooses " + humanPick)

    for (let i = 0; i < winCond.length; i++) {
        if (winCond[i].type == humanPick) {
            if (winCond[i].win == compPick) {
                returnList.push("win")
                score += 1
                return returnList
            } 
            else if (winCond[i].type == compPick) {
                returnList.push("tie")
                return returnList
            }
            else {
                returnList.push("lose")
                return returnList
            }
        }
    }
    return false
}

function playGame() {
    let textID = 0
    for (let i = 0; i < 5; i++) {
        let status = playRound(textID);
        textID += 1
        document.getElementById("s" + textID).textContent = status[3] + " | AI: " + status[1] + " | You: " + status[0]
        document.getElementById("pts").textContent = "Score: " + score
    }

}


document.getElementById("start").onclick = function() {
    playGame();
}
