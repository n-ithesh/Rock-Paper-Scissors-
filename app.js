let userSore=0
let compSore=0
const choices=document.querySelectorAll('.choice')
const msg=document.querySelector('.msg')
let userScorePara=document.querySelector('#user-score')
let compScorePara=document.querySelector('#com-score')


function updateScore(isUser) {
    const el = isUser ? document.getElementById('user-score') : document.getElementById('com-score');
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 300);
}


choices.forEach((choice)=>{
    // console.log(choices)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        // console.log(' choice clicked ',userChoice)
        playGame(userChoice)
    })
})

const genCompuChoice=()=>{
    //Rock Paper  Scissors 
    const options=['rock','paper','scissors']
    //Math.random() gives a number between 0 and 1
    //Math.floor() rounds down the number to the nearest integer
    const randomIdx=Math.floor(Math.random()*3)
    return options[randomIdx]
}

const drawGame=()=>{
    // console.log('Draw')
        msg.innerText="Match Draw Play Again"
        msg.style.backgroundColor="#081b31"


}

const showWinner=(winner,userChoice,computerChoice)=>{
    if(winner){
        userSore++
        userScorePara.innerText=userSore
        // console.log('User wins')
        msg.innerText=`User wins ${computerChoice} beats ${userChoice}`
        msg.style.backgroundColor="green"   
    }
    else{ 
        compSore++
        compScorePara.innerText=compSore      
        // console.log('Computer wins')
        msg.innerText=`Computer wins ${userChoice}  beats ${computerChoice}`
        msg.style.backgroundColor="red"
    }
}


const playGame=(userChoice)=>{
    // console.log('user choice=',userChoice)
    // Genereate computer choice->modular way of programming using the functions
    const computerChoice=genCompuChoice()
    // console.log('computer choice=',computerChoice)
    // Compare the choices
    if(userChoice===computerChoice){
        drawGame()
    }
    else
    {
        let winner=true
        if(userChoice==="rock")
        {
            winner=computerChoice==="paper"?false:true
        }
        else if(userChoice==="paper")
        {
            winner=computerChoice==="scissors"?false:true
        }
        else if(userChoice==="scissors")
        {
            winner=computerChoice==="rock"?false:true
        }
            
        showWinner(winner,computerChoice,userChoice)
    }
}
    





