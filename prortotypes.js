/*prototype kya hai

Har function (jab constructor ki tarah use ho) ke paas ek (prototype) property hoti hai — ye ek object hai jahan hum shared methods rakhte hain, taake har naya instance apna alag copy na bana kar sabse share kare.*/

function Kutta( breed , color , age , price){
    this.breed= breed;
    this.color=color;
    this.age= age;
    this.peice= price;
    this.write = function (text){ // ek mathod banya 
        //now create h1
        let h1 = document.createElement("h1");
        h1.textContent=text;
        h1.style.color=color;
        document.body.append(h1)

    };
}
let dog1= new Kutta("labra", "black", 1.5,2000);
let dog2= new Kutta("INDI", "brown", 3,3000);