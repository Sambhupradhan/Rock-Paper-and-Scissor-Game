let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
 score =scoreStr ? JSON.parse(scoreStr) :
 {
  win:0,
  lost:0,
  tie:0,
 };
// if (scoreStr !== undefined){
//   score = JSON.parse(score.Str);
// }
// else{
//   score= ;
// }
score.displayScore=function(){
    return `Score: Won:${score.win},Lost:${score.lost},Tie:${score.tie}`;
  };
  
  showResult();
}
function generateComputerChoice(){
let randomNumber=Math.random() * 3;
if(randomNumber > 0 && randomNumber <= 1){
  return 'ROCK';
}
else if(randomNumber > 1 && randomNumber <= 2){
  return'PAPER';
}
else{
  return'SCISSOR';
}
}
function getResult( userMove, computerMove){
if (userMove === 'ROCK'){
  if(computerMove === 'PAPER'){
   score.lost++;    //score.lost=score.lost+1;//score.lost +=1; 
   return'Computer has won...You loose';
  }
  else if(computerMove==='SCISSOR'){
   score.win++;
   return'You won';
  }
  else{
   score.tie++;
   return'Match Tied,Play again';
  }
}
else if( userMove === 'PAPER'){
  if(computerMove === 'ROCK'){
   score.win++;
   return'You won';
  }
  else if(computerMove ==='SCISSOR'){
   score.lost++;
   return'Computer has won...You loose';
  }
  else{
   score.tie++;
   return'Match Tied,Play again';
  }
}
else{
  if(computerMove === 'ROCK'){
   score.lost++;
   return'Computer has won...You loose';
  }
  else if(computerMove ==='PAPER'){
   score.win++;
   return'You won';
  }
  else{
   score.tie++;
   return'Match Tied,Play again';
  }
}  
}
function showResult( userMove, computerMove ,result){
localStorage.setItem('Score', JSON.stringify(score));

document.querySelector('#user-move').innerText = 
  userMove !== undefined ? `You have chosen ${userMove}` : '';
  //(userMove !== undefined we can write only userMove same as below)

document.querySelector('#computer-move').innerText =
  computerMove ? `Computer  choice is ${computerMove }` : '';

document.querySelector('#result').innerText =
  result ? result : ''; //(result || '')

document.querySelector('#score').innerText=score.displayScore();
}
