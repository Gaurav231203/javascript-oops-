
//SUPER AND EXTAND
//"(extends) sets up inheritance between two classes, allowing a child class to access the parent's properties and methods. (super) is used inside the child class — calling super() in the constructor invokes the parent's constructor to initialize inherited properties,



class UserInfo {
    constructor(name,address,age ,email) {
        this.name= name;
        this.address=address ;
        this.age=age ;
        this.email=email ;
        this.role= "user" ;
        
    }
    write (text) {
       let h1 = document.createElement("h1");
       h1.textContent = `${this.name}: ${text}`;

       document.body.appendChild(h1);

    }
}
    class Admin extends UserInfo {
    constructor(name,address,age ,email) {

        super(name,address,age ,email)
        this.role = "admin"; 
    }
    remove(){
        document.querySelectorAll("h1").forEach((element) => {
            element.remove();
            
        }

        )};
    } 
    

 let u1 = new UserInfo ("gaurav","ksp",22,"abc@gmail.com");
 let u2 = new UserInfo ("gauri","nagar",22,"abcd@gmail.com");

 let admin1 = new Admin("admin","jps",50,"admin@gmail.com");
