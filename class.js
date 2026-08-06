class Pencil {
    constructor(name,brand,price,color) {
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.color=color;
        
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((element) => {
            if(element.style.color === this.color){
                element.remove();
            }
            
        });

    }
    write= function(text){
       let h1= document.createElement("h1");
       h1.textContent=text;
       h1.style.color=this.color;
       document.body.appendChild(h1)

    }
}
let p1 =  new Pencil("natraj","nataraj" ,10 ,"red");
let p2 =  new Pencil("doms","doms" ,10 ,"blue");