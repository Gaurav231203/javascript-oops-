/*prototype kya hai

prototyoes ek object hai jo hr javascript object kay kaath attached hota hai it tells ki object ko kon si property/mathod automaticlly mielngi bine define kiye */

//======>PROTOTYPE is like a shared memeory


function Kutta( breed , color , age , price){
    this.breed= breed;
    this.color=color;
    this.age= age;
    this.peice= price;
  
};
Kutta.prototype.write = function (text){ // ek mathod banya 
        //now create h1
        
        let h1 = document.createElement("h1");
        console.log(h1)
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1)
        


    };
let dog1= new Kutta("labra", "black", 1.5,2000);
let dog2= new Kutta("INDI", "brown", 3,3000);
