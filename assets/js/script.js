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








