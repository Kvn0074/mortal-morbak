/* =============================================================================
== 0 =========== S U M M A R Y ============================================= 0 =
================================================================================

    1 | Class Construction.
    2 | Variables intion.
    3 | Case Selection Function.
    4 | Counter Function.
    5 | Announcer (Draw / Victory).
    6 | Restart Clean.
    7 | Botmode Lab.
    8 | Player mode selection.
    9 | Style & Sound.

================================================================================
============================================================================= */

/* =============================================================================
== 1 =========== C L A S S  C O N S T R U C T O R ========================== 1 =
============================================================================= */

class player {
    constructor (name, current, id, botMode, sign, attr, picClass){
        this.name     = name;
        this.current  = current;
        this.id       = id;
        this.botMode  = botMode;
        this.sign     = sign;
        this.attr     = attr;
        this.picClass = picClass;
        this.wins     = 0;
    }

    createImg(){
        let img       = document.createElement('img');
        img.src       = this.sign;
        img.className = this.picClass;
        return img;
    }

    checkVictory () {
        if (cases[0].getAttribute(this.attr) &&
            cases[1].getAttribute(this.attr) &&
            cases[2].getAttribute(this.attr))
            {
          return true;
        }
      
        else if (cases[3].getAttribute(this.attr) &&
                 cases[4].getAttribute(this.attr) &&
                 cases[5].getAttribute(this.attr))
                 {
              return true;
            }
      
        else if (cases[6].getAttribute(this.attr) &&
                 cases[7].getAttribute(this.attr) &&
                 cases[8].getAttribute(this.attr))
                 {
              return true;
            }
      
        else if (cases[0].getAttribute(this.attr) &&
                 cases[3].getAttribute(this.attr) &&
                 cases[6].getAttribute(this.attr))
                 {
              return true;
            }
      
        else if (cases[1].getAttribute(this.attr) &&
                 cases[4].getAttribute(this.attr) &&
                 cases[7].getAttribute(this.attr))
                 {
              return true;
            }
      
        else if (cases[2].getAttribute(this.attr) &&
                 cases[5].getAttribute(this.attr) &&
                 cases[8].getAttribute(this.attr))
                 {
              return true;
            }
      
        else if (cases[8].getAttribute(this.attr) &&
                 cases[4].getAttribute(this.attr) &&
                 cases[0].getAttribute(this.attr))
                 {
              return true;
            }
      
        else if (cases[2].getAttribute(this.attr) &&
                 cases[4].getAttribute(this.attr) &&
                 cases[6].getAttribute(this.attr))
                 {
              return true;
            }
      }

}

let firstPlayer = new player (
    "Player One",
    true,
    1,
    false,
    "assets/pics/fuPic.png",
    "byOne",
    "picPlayerOne"
);

let secondPlayer = new player (
    "Player Two",
    false,
    2,
    false,
    "assets/pics/skuPic.png",
    "byTwo",
    "picPlayerTwo"
);


/* =============================================================================
============================================================================= */

/* =============================================================================
== 2 =========== V A R I A B L E S ========================================= 2 =
============================================================================= */

    /* ____| AUDIO |____ */

let errorSound   = document.getElementById('error-sound');
let victorySound = document.getElementById('victory-sound');
let clearSound   = document.getElementById('clear-sound');
let musicSound   = document.getElementById('music-sound');
let ohNoDraw     = document.getElementById('oh-no-sound');
let begin        = document.getElementById('begin-sound');


begin.volume        = 0.6;
ohNoDraw.volume     = 0.4;
musicSound.volume   = 0.6;
clearSound.volume   = 0.2;
victorySound.volume = 0.4;
errorSound.volume   = 0.2;

    /* ____| FLYING |____ */

let victoryMessage = document.querySelector('.flying-victory');
let drawMessage    = document.querySelector('.flying-draw');

    /* ____| BUTTONS |____ */

let musicButton      = document.querySelector('.game-music-button');
let buttonOnePlayer  = document.querySelector('.one-btn'); 
let buttonTwoPlayers = document.querySelector('.two-btn');

    /* ____| TEXT CONTAINER |____ */

let playMode      = document.querySelector('.game-mode');
let theWinnerIs   = document.querySelector('.the-winner-is');
let playerOneName = document.getElementById('player-one-name');
let playerTwoName = document.getElementById('player-two-name');

    /* ____| PICS CONTAINER |____ */

let cases    = document.getElementsByClassName('case');
let countOne = document.getElementById('player-one');
let countTwo = document.getElementById('player-two');

/* =============================================================================
============================================================================= */

/* =============================================================================
== 3 =========== C A S E  S E L E C T I O N ================================ 3 =
============================================================================= */

function selectCase (theCase, playerA, playerB) {

    if(firstPlayer.current){
        playerA = firstPlayer;
        playerB = secondPlayer;
    } else {
        playerA = secondPlayer;
        playerB = firstPlayer;
    }

    if (theCase.getAttribute(playerA.attr) ||
        theCase.getAttribute(playerB.attr)) {
        errorSound.play();
    } else {
        theCase.appendChild(playerA.createImg());
        theCase.setAttribute(playerA.attr, 'true');
        playerA.current = false;
        playerB.current = true;
        lightName();
            if(playerA.checkVictory()){
                victory(playerA);
                counter(playerA);
            } else if(drawChecker()){
                drawAnnouncer()
            };

            if(playerB.botMode && !playerA.checkVictory()){
                setTimeout(evilChoice, 1000, playerA, playerB);  
            }
             
    }
}

/* =============================================================================
============================================================================= */

/* =============================================================================
== 4 =========== C O U N T E R ============================================= 4 =
============================================================================= */

function counter(player) {
    player.wins ++
  
    if (player.wins <= 5) {
  
      switch (player.id) {
        case 1:
            countOne.src = `assets/pics/j1-${player.wins}.png`;
            break;
  
        case 2:
            countTwo.src = `assets/pics/j2-${player.wins}.png`;
            break;
        default:
            break;
       }
    }

    else  if(player.wins ==  6){
        player.wins = 1;

        switch (player.id) {
            case 1:
                countOne.src = `assets/pics/j1-${player.wins}.png`;
                break;
      
            case 2:
                countTwo.src = `assets/pics/j2-${player.wins}.png`;
                break;
            default:
                break;
           }
    }
  }

/* =============================================================================
============================================================================= */

/* =============================================================================
== 5 =========== A N N O U N C E R ========================================= 5 =
============================================================================= */

    /* ____| VICTORY ANNOUNCER |____ */

function victory(player){
    victoryMessage.style.display = 'block'
    theWinnerIs.textContent = player.name;
    victorySound.play();
  }

    /* ____| DRAW CHEKER / ANNOUNCER |____*/

function drawChecker() {
    let img1 = document.getElementsByClassName('picPlayerOne');
    let img2 = document.getElementsByClassName('picPlayerTwo');
  
      if (img1.length + img2.length == 9){
        return true;
      }
  }

  function drawAnnouncer(){
    drawMessage.style.display = 'block';
    ohNoDraw.play();
  }

/* =============================================================================
============================================================================= */

/* =============================================================================
== 6 =========== R E S T A R T  / C L E A N ================================ 6 =
============================================================================= */

    /* ____| RESTART FUNCTION |____ */

function restart() {
    if(secondPlayer.botMode){
     for(let i=0; i < cases.length; i++){
        cases[i].removeAttribute(firstPlayer.attr);
        cases[i].removeAttribute(secondPlayer.attr);
        cases[i].innerHTML = "";
        }
    victoryMessage.style.display = 'none';
    theWinnerIs.textContent = "";
    drawMessage.style.display = 'none';

    firstPlayer.current = true;
    secondPlayer.current = false;
    lightName();

    } else {
    for(let i=0; i < cases.length; i++){
      cases[i].removeAttribute(firstPlayer.attr);
      cases[i].removeAttribute(secondPlayer.attr);
      cases[i].innerHTML = "";
    }
    victoryMessage.style.display = 'none';
    theWinnerIs.textContent = "";
    drawMessage.style.display = 'none';
    }
  };


    /* ____| CLEAR FUNCTION |____ */

  function clearAll() {

    for(let i=0; i < cases.length; i++){
      cases[i].removeAttribute(firstPlayer.attr);
      cases[i].removeAttribute(secondPlayer.attr);
      cases[i].innerHTML = "";
    }
    victoryMessage.style.display = 'none';
    theWinnerIs.textContent = "";
    drawMessage.style.display = 'none';

    firstPlayer.name = "Player One"
    firstPlayer.current = true;
    firstPlayer.wins = 0;
  
    secondPlayer.name = "Player Two"
    secondPlayer.current = false;
    secondPlayer.wins = 0;
    secondPlayer.botMode = false;

    playerOneName.textContent = firstPlayer.name;
    playerTwoName.textContent = secondPlayer.name;
    playMode.textContent = 'Fast Game';

    countOne.src = "";
    countTwo.src = "";

    lightName();

    clearSound.play();
  }

/* =============================================================================
============================================================================= */

/* =============================================================================
== 7 =========== B O T  M O D E  L A B ===================================== 7 =
============================================================================= */

function evilChoice (playerA, playerB){
    let random = Math.floor(Math.random() * 9);
    if(cases[random].getAttribute(playerA.attr) || cases[random].getAttribute(playerB.attr)){
        evilChoice(playerA, playerB);
    } else {
        cases[random].appendChild(playerB.createImg());
        cases[random].setAttribute(playerB.attr, 'true');
        playerA.current = true;
        playerB.current = false;
        lightName();
        if(playerB.checkVictory()){
            victory(playerB);
            counter(playerB);
        } else if(drawChecker()){
            drawAnnouncer()
        };
    }
   
};

/* =============================================================================
============================================================================= */

/* =============================================================================
== 8 =========== P L A Y E R  M O D E ====================================== 8 =
============================================================================= */

playerOneName.textContent = firstPlayer.name;
playerTwoName.textContent = secondPlayer.name;

function onePlayerMode(){
    clearAll()
    firstPlayer.name = prompt('Player 1 name :');
    secondPlayer.name = "Evil You";
    secondPlayer.botMode = true;
    playerOneName.textContent = firstPlayer.name;
    playerTwoName.textContent = secondPlayer.name;
    playMode.textContent = 'One Player'
    begin.play();
    

}

function twoPlayersMode (){
    clearAll()
    firstPlayer.name = prompt('Player 1 name :');
    secondPlayer.name = prompt('Player 2 name :');
    playerOneName.textContent = firstPlayer.name;
    playerTwoName.textContent = secondPlayer.name;
    playMode.textContent = 'Two Players'
    begin.play();
}

buttonOnePlayer.addEventListener('click', onePlayerMode);
buttonTwoPlayers.addEventListener('click', twoPlayersMode);


/* =============================================================================
============================================================================= */

/* =============================================================================
== 9 =========== S T Y L E  A N D  S O U N D =============================== 9 =
============================================================================= */

    /* ____| light name FUNCTION |____ */

function lightName(){
    if(firstPlayer.current){
        playerOneName.className = "neon";
        playerTwoName.className  = "";
    }
    else{
        playerTwoName.className  = "neon";
        playerOneName.className = "";
    };
};

    /* ____| Music FUNCTION |____ */

function letMusikPlay(){

    if(musicSound.paused){
        musicButton.src = 'assets/pics/speaker.png';
        musicSound.play();
      
    }
    else {
        musicButton.src ='assets/pics/speakerNone.png';
        musicSound.pause();
    }
  };

/* =============================================================================
============================================================================= */

