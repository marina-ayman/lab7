// 3.	Make a literal object “ScientificDepartment” that has properties: name, Location, Address which is composed from: City, Street, zip code, and add display function that prints all content of the object.
// a)	Why do we need literal objects? And how does it differs than normal classes?





var Scientific=
{

    name : "marina",

    location : 123,

    Adress :{
        City:"aswan",
        Street:" 345str",
        zipcode:"345",
    },
  display :
    function(){
        return "name "+ Scientific.name +"location", Scientific.location + "Scientific.Adress.City"+Scientific.Adress.City + "Scientific.Adress.Street"+Scientific.Adress.Street +"Scientific.Adress.zipcode"+Scientific.Adress.zipcode ;
      

    }}


document.write(Scientific.display);









//Why do we need literal objects? And how does it differs than normal classes?
//literal
 class account = {
    name: "ahly",
    salary: 807776.78,

 };
 //literal dot notation
console.log (account.name)
 //literal bracket notation 
 console.log (account[salary])


 //obj constructor notation
 class account2 =new account {
    name: "ahly",
    salary: 807776.78,

 };



// normal classes has more property (private#,static,constructor, destructor, ...) inhertanc ,encapsulation, abstruction
 class Person
{

  
   
    constructor(a,b)
    {
      
        this.name=a; //
        this.age=b;
    }

}

