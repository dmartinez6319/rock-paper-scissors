console.log("SCPT TEST")

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

function playRound(curId,humanPick) {
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
                score -= 1
                return returnList
            }
        }
    }
    return false
}

function playGame() {
    let textID = 0
    for (let i = 0; i < 5; i++) {
        let humanPick = document.getElementById("selection").value;
        let status = playRound(textID,humanPick);
        textID += 1
        document.getElementById("s" + textID).textContent = status[3] + " | AI: " + status[1] + " | You: " + status[0]
        document.getElementById("pts").textContent = "Score: " + score
    }

}



document.querySelector("#start").onclick = () => playGame();
