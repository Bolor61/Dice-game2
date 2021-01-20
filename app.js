// togloomiin buh gazart ashiglagdah global % sagchiig end zarallaa

// Togloom duussan esehiig hadgalah tulviin % sagch
var isNewGame;

// ali toglogch shoo shideh be gedgiig end hadgallaa
var activePlayer;
// 2 toglogchiin tsugluulsan onoonuud
var scores;
// active player iin tsugluulj bgaa onoo
var roundScore;

// shoonii zurgiig uzuuleh elementiig DOM - oos haij olood end hadgalya

var diceDom = document.querySelector('.dice');

// Togloomiig ehluulne
initGame();

// Togloomiig shineer ehlehed beltgene

function initGame() {
  // Togloom ehellee gedeg tuluvt oruulna

  isNewGame = true;

  // toglogchiin eeljiig hadgalagch % sagch 1-r toglogchiig o, 2- r toglogchiig 1 geh temdeglii
  activePlayer = 0;

  // toglogchdiin tsugluulsan onoog hadgalah % sagch
  scores = [0, 0];

  // toglogchiin eeljin deer tsugluulj bgaa onoog hadgalagch % sagch
  roundScore = 0;
  // Shoonii ali talaaraa buusniig hadgalah % sagch heregtei 1-6 gesen utgiig ene % sagchid sanamsarguigeer uusgej ugnu.

  // var diceNumber = Math.floor(Math.random() * 6) + 1;

  // window.document.querySelector('#score-0').textContent = dice;

  // programm ehlehed beltgii
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //toglogchdiin neriig butsaj gargah
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

  diceDom.style.display = 'none';
}

// Shoog shideh event listener
document.querySelector('.btn-roll').addEventListener('click', function () {
  if (isNewGame) {
    // 1-6 dotor sanamsargui 1 too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = 'block';

    // buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = 'dice-' + diceNumber + '.png';
    // buusan too n  negees yalgaatai bol idevhitei toglogchiin  eeljiin onsoog nemegduulne
    if (diceNumber !== 1) {
      // 1- ees yalgaatai too buulaa. buusan toog toglogchid nemj ugnu
      roundScore = roundScore + diceNumber;
      document.getElementById(
        'current-' + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

      switchToNextPlayer();
    }
  } else {
    alert(' Togloom duussan bn . New Game tovchiig darj shineer ehelne uu');
  }
});

// Hold tovchnii event listener
document.querySelector('.btn-hold').addEventListener('click', function () {
  if (isNewGame) {
    // ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ugnu.
    // var scores = [0, 0];
    // if (activePlayer === 0){
    //     scores[0] = scores[0] + roundScore;
    // }else {
    //     scores[0] = scores[1] + roundScore;
    // }
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // delgets deer onoog n uurchilnu
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    //ug toglogch hojson esehiig shalgah (onoo n 100- c ih eseh )
    if (scores[activePlayer] >= 100) {
      // Togloomiig duussan tuluvt oruulna

      isNewGame = false;
      // yalagch gesen text iig nerniih n orond gargana
      document.getElementById('name-' + activePlayer).textContent =
        ' WINNER!!!';
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
    } else {
      // toglogchiin eeljiig solnino.
      switchToNextPlayer();
    }
  } else {
    alert(' Togloom duussan bn . New Game tovchiig darj shineer ehelne uu');
  }
});

// ene fuction n togloh eeljiig daraagiin toglogchruu shiljuulne

function switchToNextPlayer() {
  //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgo
  roundScore = 0;
  document.getElementById('current-' + activePlayer).textContent = 0;

  // toglogchiin eeljiig nuguu toglogch ruu shiljuulne

  // herev idevhtei toglogch 0 baival idevhitei toglochiig 1 bolgo
  // ugui bol idevhitei toglogchiig 0 bolgo
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  /* deerh tei yag adilhan 
        if (activePlayer === 0){
            activePlayer = 1;
        }else{
            activePlayer= 0
        }*/

  // ulaan tsagiig shiljuuleh codiig hiie
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // shoog tur alga bolgoh
  diceDom.style.display = 'none';
}

// NEW GAME tovchiig darhiin bol shine togloom ehluuleh tovchiin event listener
document.querySelector('.btn-new').addEventListener('click', initGame);
