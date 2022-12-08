// 6.	 Make a set that holds countries names.
// a)	return the numbers of repeated items in set 


var countries=["Algeria","Andorra","Angola","Angola","Albania","Albania"];

var L=countries.length 
var S=new Set(countries)

var X=L-S.size

console.log(X)

// console.log(countries.size)


    



// function toFindDuplicates(arry) {
//     const uniqueElements = new Set(arry);
//     const filteredElements = arry.filter( function (item){
//         if (uniqueElements.has(item)) {
//             uniqueElements.delete(item);
//         } else {
//             return item;
//         }
//     });

//     return [...new Set(uniqueElements)]
// }

//  const arry = [1, 2, 1, 3, 4, 3, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

