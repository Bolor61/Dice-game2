// toglogchiin eeljiig hadgalagch % sagch 1-r toglogchiig o, 2- r toglogchiig 1 geh temdeglii
var activePlayer = 1;




// toglogchdiin tsugluulsan onoog hadgalah % sagch 
var scores = [0, 0];





// toglogchiin eeljin deer tsugluulj bgaa onoog hadgalagch % sagch 
var roundScore = 0 ;



// Shoonii ali talaaraa buusniig hadgalah % sagch heregtei 1-6 gesen utgiig ene % sagchid sanamsarguigeer uusgej ugnu.

var diceNumber = Math.floor (Math.random()*6)+ 1;



// window.document.querySelector('#score-0').textContent = dice;


// programm ehlehed beltgii 
document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none'

 document.querySelector('.btn-roll').addEventListener('click', function () { 
    var diceNumber = Math.floor (Math.random()*6)+ 1;
    diceDom .style.display = 'block';
    diceDom .src = 'dice-' + diceNumber + '.png';    
    
 }
)
