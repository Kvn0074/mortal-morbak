/* =============================================================================
== 0 =========== S U M M A R Y ============================================= 0 =
================================================================================

    1 | Class Construction.


================================================================================
============================================================================= */

/* =============================================================================
== 1 =========== C L A S S  C O N S T R U C T O R ========================== 1 =
============================================================================= */

class player {
    constructor (name, current, id, ia, sign, attr, picClass){
        this.name     = name;
        this.current  = current;
        this.id       = id;
        this.ia       = ia;
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
    "Player 1",
    true,
    1,
    false,
    "assets/pics/fuPic.png",
    "byOne",
    "picPlayerOne"
);

let secondPlayer = new player (
    "Player 2",
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
== 1 =========== V A R I A B L E S ========================================= 1 =
============================================================================= */

let errorSound   = document.getElementById('error-sound');
let victorySound = document.getElementById('victory-sound');
let clearSound   = document.getElementById('clear-sound');

let victoryMessage = document.querySelector('.flying-victory');
let drawMessage    = document.querySelector('.flying-draw');


let theWinnerIs = document.getElementsByClassName('the-winner-is');
let cases = document.getElementsByClassName('case');

let countOne = document.getElementById('player-one');
let countTwo = document.getElementById('player-two');


/* =============================================================================
============================================================================= */

/* =============================================================================
== 1 =========== C O U N T E R ============================================= 1 =
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
== 1 =========== C A S E  S E L E C T I O N ================================ 1 =
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
            if(playerA.checkVictory()){
                victory(playerA);
                counter(playerA);
            } else if(drawChecker()){
                drawAnnouncer()
            };


    }
}


/* =============================================================================
============================================================================= */


/* =============================================================================
== 1 =========== V I C T O R Y  A N N O U N C E ============================ 1 =
============================================================================= */

function victory(player){
    victoryMessage.style.display = 'block'
    theWinnerIs.textContent = player.name;
    victorySound.play();
  }

/* =============================================================================
============================================================================= */

/* =============================================================================
== 1 =========== V I C T O R Y  A N N O U N C E ============================ 1 =
============================================================================= */

function restart() {
    for(let i=0; i < cases.length; i++){
      cases[i].removeAttribute(firstPlayer.attr);
      cases[i].removeAttribute(secondPlayer.attr);
      cases[i].innerHTML = "";
    }
    victoryMessage.style.display = 'none';
    theWinnerIs.textContent = "";
    drawMessage.style.display = 'none';
  }

/* =============================================================================
============================================================================= */

/* =============================================================================
== 1 =========== D R A W  C H E C K  / A N N O U N C E ===================== 1 =
============================================================================= */

function drawChecker() {
    let img1 = document.getElementsByClassName('picPlayerOne');
    let img2 = document.getElementsByClassName('picPlayerTwo');
  
      if (img1.length + img2.length == 9){
        return true;
      }
  }

  function drawAnnouncer(){
    drawMessage.style.display = 'block';
    /*drawBip.play();*/
  }

/* =============================================================================
============================================================================= */



