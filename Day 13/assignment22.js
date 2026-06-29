// callback function

// function showMessage(){
//     console.log(" Hello Abinaya !"); 
// }
// setTimeout(showMessage,2000)

//create a class car

// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     display() {
//         console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//     }
// }

// const car1 = new Car("Toyota", "Camry");
// car1.display();

//create class Vehicle
// class Vehicle {
//     constructor(brand) {
//         this.brand = brand;
//     }
// }

// class Bike extends Vehicle {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }

//     display() {
//         console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//     }
// }

// const bike1 = new Bike("Yamaha", "R15");
// bike1.display();

//Create a button and change the text of a heading when clicked

function changeText() {
    document.getElementById("heading").innerText = "Text Changed!";
}

//Create an input field and display whatever the user types

function showText() {
    document.getElementById("output").innerText =
        document.getElementById("inputBox").value;
}

//Change the background color of a page using JavaScript

function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

//Create a counter button that increases a number on every click

let counter = 0;

function increase() {
    counter++;
    document.getElementById("count").innerText = counter;
}





