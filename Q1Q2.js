// 1.	Implement the following classes (Add classes’ variables and method according to your logic):
// a)	Person class with need variables and methods.
// b)	Employee class that inherits from Person class and add need variables and methods.
// c)	Student class that inherits from Person class and add need variables and methods.
// d)	Try the following:
// i)	In Employee class add static method: displayHTRules(), that prints the company’s HR rules.
// •	What’s the difference between static method and member method?
// •	Add static variable that counts the number of Employee object.
// ii)	Try private members, getters and setters. Why Getters and setters are better than public accessible variables.

// iii)	Can we handle abstract class in JS? Try to make person class can’t be instanced.










    class Person {
        static #count = 0;
        #id;
        constructor(a, b,c) {
            console.log(this.constructor)
            if(this.constructor==Person)
            {
                throw 'error this is abstract class'
            }
            this.name = a;
            this.age = b;
            this.salary = c;
        }
        setID(x)
        {
    
            this.#id=x;
        }
    
        getID()
        {
            return this.#id;
        }
    
    }
    class Employee extends Person {
        static count=0;
        constructor(a, b,c) {
            Employee.count++;
            super(a, b,c)
        }
        static displayHTRules() {
          console.log("marina ayman , anfallll , shima  " )
        }
        getcount() {
            return Employee.count;
        }
        showSalary(){
            console.log(this.salary)
        }
        increaseSalalry(){
            console.log(this.salary+2000)
        }
    
    }
    
    class Student extends Person {
        constructor(a, b) {
            super(a, b)
        }
    }
    
    Employee.displayHTRules()
    
    var p1=new Employee("ahmed",22,2000);
    var p2=new Employee("mohamed",44,5000);
    var p2=new Employee("negm",44,3000);
    console.log(Employee.count);
    p2.showSalary()
    p2.increaseSalalry()
    

    













    // static member functions are referenced with the class and available for all objects of the class 
    // and in general with the class reference, whereas
    //  the member functions are referenced with objects created to the class and available to that objects.




//  instance obj : data pertaining to each instance separately 

    // static :Shared, but it is not possible to change any instance in it