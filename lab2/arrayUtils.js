
/*Returns the mean (Links to an external site.) value of the elements of an array
You must check:
- That the array parameter exists (meaning the function has input at all)
- The array parameter is of the proper type (meaning, it's an array)
- The array is not empty.
- Each array element is a number. */




function mean(value){
    const a1 = value;
    if (a1 instanceof(Array)){
        if (a1.length == 0){
            let empty = "The array is empty"
            return empty;
        }
        let sum = 0;
        for (let i = 0; i < a1.length; i += 1) {     
            if(typeof a1[i] !== 'number'){
                return "not a number"
            }
            sum = sum + a1[i];
        }
        const mean = (sum / a1.length)
        return mean;
   } else{
       return " not an array"
   }
}



/* Returns the median (Links to an external site.) value of the elements of an array squared. As the function name states.  It's the median squared, so you will first find the median and then square it!
You must check:
- That the array parameter exists
- The array parameter is of the proper type (meaning, it's an array)
- The array is not empty
- Each array element is a number */
function medianSquared(value){
    const a1 = value;
    if (a1 instanceof(Array)){
        if (a1.length == 0){
            let empty = "The array is empty";
            return empty;
        }
        for (let i = 0; i < a1.length; i += 1) {     
            if(typeof a1[i] !== 'number'){
                return "not a number"
            }
        }
        let sorted = a1.sort((a,b) => a - b);
        if (sorted.length % 2 == 0){
            let middle = sorted.length / 2;
            let med = ( sorted[middle] + sorted[middle -1] ) /2;
            return med * med;
        }else{
            let temp = (sorted.length -1) / 2;
            return sorted[temp] * sorted[temp];
        } 
    }else{
       return " not an array"
   }
}



/* Scan the array from one end to the other to find the largest element. 
//Return both the maximum element of the array and the index (position) of this element 
// as a new object with the value as the key and the index as the value. 

You must check:

That the array parameter exists
The array parameter is of the proper type (meaning, it's an array)
The array is not empty
Each array element is a number
*/
function maxElement(value){
    const a1 = value;
    if (a1 instanceof(Array)){
        if (a1.length == 0){
            let empty = "The array is empty"
            return empty;
        }
        for (let i = 0; i < a1.length; i += 1) { 
            if(typeof a1[i] !== 'number'){
                return "not a number"
            }
        }
        // return object - pop and push??
        for (let i = 1; i < a1.length;) {
            if(a1[i]>a1[i-1]){
                let max = a1[i]
                let index = i
                i++
            }else{
                let max = a1[i-1]
                i++
            }

        }



   } else{
       return " not an array"
   }
}

// test for mean
let array1 = [5, 2, 3, 1, 11, 72];
console.log(maxElement(array1));





//fill(end, value)
/* Creates a new numbered array starting at 0 increasing by one up to, but not including the end argument. The value argument is optional, but when specified each element will be set to that value. If the value argument is not supplied, you will fill the array with numbers as shown below in the examples. 

You must check that the end parameter exists
You must check that the end parameter is of proper type,
You must check that the end parameter is a positive integer greater than 0.
*/




//countRepeating(array)
/* Will return an object with the count of each element that is repeating in the array.

Note: Order does not matter in a JavaScript object, so your answer may have a different ordering.

Note: in JavaScript, all object keys are coerced to strings. For example:

const foo = {};
foo[7] = "bar";
foo["7"] = "foobar";

console.log(foo); // { "7": "foobar"}
You must check:

That the array parameter exists
The array parameter is of the proper type (meaning, it's an array)
You must check that each element in the array is either a string or number (unless an empty array is provided)
If any of those conditions fail, the function will throw.

This function allows empty arrays.

If an empty array is passed in, just return an empty object {}.  

if there are no repeating elements, just return an empty object {}.

If the element's value is a number and there is a string value of that same number in the array, you can count that as a repeating element. This is because you cannot have a key in the object as the number 7 and another key "7" as they are considered the same like the above example. 

If it's a string, it's case sensitive. 

Note that,

7 and '7' are counted as 2
Hello, Hello, hello are counted as 2 */


//isEqual(arrayOne, arrayTwo)
/* Given two arrays,   check if they are equal in terms of size. Next you will sort them first (however you like, as long as they are both sorted the same way) and then check the elements to see if they are equal. and return a boolean. 

You must check:

That the array parameter exists
Each array parameter is of the proper type (meaning it's an array)
This function allows empty arrays. You must also take into account if it's an array of arrays!!!!  You will not have to worry about if the elements are objects or functions.  We will not test with objects or functions as elements for this function, however, you should test with all the other data types, boolean, number, string, undefined, null etc.. */