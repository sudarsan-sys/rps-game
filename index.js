let playerMove=""
let score= {
        wins:0,
        losses:0,
        Ties:0
      }
let rn=0
let cm=""
let result=""
function compmove(){
rn=Math.random()
if (rn>=0 && rn <1/3){
    cm="rock"
    
}
else if (rn >=1/3 && rn <2/3){
    cm="paper"
}
else if (rn >=2/3 && rn <1){
    cm="scissors"
}
return cm

}

function playgame(playerMove){
compmove()
if (playerMove=="rock"){
    if (cm=="rock"){
    result="Tie"
    }
    else if (cm=="paper"){
    result="You Lose"
    }
    else if (cm=="scissors"){
    result="You win"
    }

}
compmove()
if (playerMove=="paper"){
    if (cm=="paper"){
    result="Tie"
    }
    else if (cm=="scissors"){
    result="You Lose"
    }
    else if (cm=="rock"){
    result="You win"
    }
}
compmove()
if (playerMove=="scissors"){
    if (cm=="paper"){
    result="You win"
    }
    else if (cm=="scissors"){
    result="Tie"
    }
    else if (cm=="rock"){
    result="You Lose"
    }
}
return playerMove

}


function update(){

if (result=="You win"){
score.wins+=1
}
else if (result=="You Lose"){
score.losses+=1
}
else if (result=="Tie"){
score.Ties+=1
}
localStorage.setItem("score",JSON.stringify(score))
document.querySelector(".js-score").innerHTML=`wins : ${score.wins}  losses : ${score.losses} Ties : ${score.Ties}`
document.querySelector(".js-result").innerHTML=result
}

