 const character = {
    name: "Peter",
    surname: "Parker",
 }

 console.log(character.hasOwnProperty("age"))


 const objectContructor = {
    quote: function () {
        return "hola, soy un superheore";
    }
 }


 //Funcion fabrica de superheroes 
 const Superhero = (name, realName) => {
    const superheroe = Object.create(objectContructor);
    superheroe.name = name,
    superheroe.realName =realName;
    return superheroe;
 }

 const spiderman = Superhero("Spideman", "Peter Parker");
 console.log(spiderman)
 console.log(spiderman.name)
 console.log(spiderman.quote())

// Class

class Character {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    attack(){
        return `${this.name} esta atacando! `;
    }
    defense() {
        return  `${this.name} esta defendiendose! `;
    }
}

const Daredevil = new Character("Daredevil", 40);
console.log(Daredevil)
console.log(Daredevil.defense())

const Kingkong = new Character("Kingkong", 40);
console.log(Kingkong)
console.log(Kingkong.attack())


// Herencia

class Vehicle {
    constructor(name, color){
        this.name = name,
        this.color = color,
    }
    move() {
        return `${this.name} se esta moviendo`;
    }
    stop() {
        return `${this.name} se ha parando`;
    };

    class Car extends Vehicle {
        constructor(name, color, doors) {
            super(name, color)
            this.doors = doors;
            this.wheels = 4
        }
        handbrake() {
            return `${this.name} ha echado el freno de mano`;
        }
    }
 const Seatibiza = new Car ("Seat Ibiza", "Rosa", 4);
 console.log(Seatibiza);
 console.log(Seatibiza.move());
 console.log(Seatibiza.handbrake())
}}

///Esta malllllll