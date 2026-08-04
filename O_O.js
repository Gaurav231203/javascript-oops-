//hume sikhna hai factories bana mtlb ki ek baar blueprint ban do ki hrr boject kesa dikhega orr hum log new new object with diffrent  values bana payenge 
//yahi upr upr say  pura kaaam hai oops mai

function kutta( breed , color , age , price){
    this.breed= breed;
    this.color=color;
    this.age= age;
    this.peice= price;
}
let dog1= new kutta("labra", "black", 1.5,2000);
let dog2= new kutta("INDI", "black/black", 3,3000);