   
// Only change code below this line
    
function myBouncer(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// Only change code above this line

console.log(myBouncer([false, null, 0 , NaN, undefined, '', 1, 2]));     // Change this line
module.exports = myBouncer;