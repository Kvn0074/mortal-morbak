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
        let img       = document.createElement("img");
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
== 1 =========== C A S E  S E L E C T I O N ================================ 1 =
============================================================================= */

let error = document.getElementById('error');
let cases = document.getElementsByClassName('case')
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
        error.play();
    } else {
        theCase.appendChild(playerA.createImg());
        theCase.setAttribute(playerA.attr, 'true');
        playerA.current = false;
        playerB.current = true;
            if(playerA.checkVictory()){
                console.log(playerA.name + 'a gagner');
            };


    }
}


/* =============================================================================
============================================================================= */






