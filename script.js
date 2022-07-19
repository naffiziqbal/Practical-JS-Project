// Project : 1
let date = new Date()
let hours = date.getHours()
let presentYear = date.getFullYear()

function ageInDays() {
    let birthDate = prompt("Enter Your Birth Year.....")
    let calc = (presentYear - birthDate) * 365
    var h1 = document.createElement("h1")
    var textAnswer = document.createTextNode('You are ' + calc + ' days ' + hours + ' hours old')
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('result').appendChild(h1)

}


function reset() {
    document.getElementById('ageInDays').remove()
}


/*----------------*/
//Project :1 End 
/*----------------*/


// Project:2

function genCat(){
    var catImg = document.createElement('img')
    var div   = document.getElementById('cat-img')
    catImg.src = "http://thecatapi.com/api/images/get?format=src&type=gif"
    catImg.src = "http://thecatapi.com/api/images/get?format=src&type=gif"
    div.appendChild(catImg)
}

/*----------------*/
//Project :2 End 
/*----------------*/


// Project:2


function rpsGame(yourChoice){
    var humanChoice, botChoice
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randomInt())
    results = decideWinner(humanChoice, botChoice) //[0,1] human lost
    message = finalMessage(results)
    rpsFontEnd(yourChoice.id, botChoice, message, )

}

function randomInt(){
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number){
    return['rock', 'paper', 'scissor'][number]
}

function decideWinner(yourChoice, computerChoice){
    var resultDatabase = {
        'rock':{'scissor':1, 'rock': 0.5, 'paper':0},
        'paper':{'rock': 1, 'paper':0.5, 'scissor':0},
        'scissor':{'paper':1,'scissor': 0.5,'rock':0},
    }
    var yourScore = resultDatabase[yourChoice][computerChoice]
    var computerScore = resultDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost', 'color': 'red'}
    } else if(yourScore === 0.5){
        return {'message': 'You Tied', 'color': 'yellow'}
    }
    else{
        return {'message': 'You Won', 'color': 'green'}
    }
}
function rpsFontEnd(humanImgChoice, botImgChoice, finalMessage, countWinning){
    var imgDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    
   document.getElementById('rock').remove()
   document.getElementById('paper').remove()
   document.getElementById('scissor').remove()

   let humanDiv = document.createElement('div')
   let messageDiv = document.createElement('div')

   let botDiv = document.createElement('div')


   humanDiv.innerHTML = "<img src = ' " + imgDatabase[humanImgChoice] + " 'style='box-shadow: 1px 2px 30px #1face4;'" + "'>"
   document.getElementById('mainGame').appendChild(humanDiv)

   messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size:40px; padding:30px '>" + finalMessage['message'] + " </h1>"
   document.getElementById('mainGame').appendChild(messageDiv)

   botDiv.innerHTML ="<img src = '" + imgDatabase[botImgChoice] + " 'style='box-shadow: 1px 2px 30px #c40a29;'" + "'>"
   document.getElementById('mainGame').appendChild(botDiv)

}
