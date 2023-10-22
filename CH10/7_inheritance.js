// extends keyword help accessing methods of parent object into child
// super keyword is used to call parent constructor 

class Vehicles {
    constructor(color, model){
        this.color = color
        this.model = model
    }

    car(){
        console.log(`the color of this car is ${this.color} and model no is ${this.model}`)
    }

}

class Bike extends Vehicles {
    constructor(color, model, name){
        super(color, model) // calls parent constructor
        this.name = name
    }

    honda(){
        console.log(`the color of ${this.name} is ${this.color} and the model no is ${this.model}`)
    }
}

let ferrari = new Vehicles("Black","LASP8569")
ferrari.car()

let honda = new Bike("red", "GAS48621", "Honda")
honda.honda()