// 5.	Study new array api methods then create the following methods and apply it on this array var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 
// •	test that every element in the given array is a string 
// •	test that some of array elements starts with "a"
// •	generate new array filtered from the given array with only elements that starts with "b" or "s" 
// •	use forEach to display all elements of the new array from previous 


var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 


fruits.forEach(function (x) {

 if(isNaN(x)){
    console.log("done")
 }else{  console.log("no a string")}
        
    });

//////////////////////////////////////////////////////////////////////////////////////

    fruits.forEach(function (x) {
       
        if(x.indexOf("a",0)==0)
        {
           console.log("done :",x , "starts with a")
        }
        else {  console.log(x , " donot starts with a")}
               

           }
           
    )
//////////////////////////////////////////////////////////////////////////////////////
var filtered=[];

    fruits.forEach(function (x) {
        if(x.indexOf("b",0)==0 || x.indexOf("s",0)==0 )
{
    filtered.push(x)
}

    })
    console.log(filtered)
//////////////////////////////////////////////////////////////////////////////////////
var i=0;

    fruits.forEach(function (x) {

    for(i=0;i<filtered.length;i++)
    {
        if(filtered[i]==x){
            console.log (x)
        }
    }

}    )
