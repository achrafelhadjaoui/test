class Player {
    constructor(nom, pays) {
        this.nom = nom;
        this.pays = pays
    }
}

class TennisPlayer extends Player {
    constructor(nom, pays, age) {
        super(nom, pays);
        this.age = 34;
        console.log(`${this.nom} est ne en ${this.pays} son age est ${this.age}`);
    }
}

const fifa = new TennisPlayer("messi", "argentine", 34);
