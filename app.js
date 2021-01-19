// toglogchiin eeljiig hadgalagch % sagch 1-r toglogchiig o, 2- r toglogchiig 1 geh temdeglii
var activePlayer = 1;




// toglogchdiin tsugluulsan onoog hadgalah % sagch 
var scores = [0, 0];





// toglogchiin eeljin deer tsugluulj bgaa onoog hadgalagch % sagch 
var roundScore = 0 ;



// Shoonii ali talaaraa buusniig hadgalah % sagch heregtei 1-6 gesen utgiig ene % sagchid sanamsarguigeer uusgej ugnu.

var dice = Math.floor (Math.random()*6)+ 1;

// <div class="player-score" id="score-0">43</div>

// window.document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = "<em> Yes! </em>";

// programm ehlehed beltgii 
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

 document.querySelector('.dice').style.display = 'none'

console.log(' shoo '+ dice) 