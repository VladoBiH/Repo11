
  // Only change code below this line
    
function splitArrayInGroups(arr, n) {
    var result = [];
    for(var i=0; i < arr.length; i+= n) {
        result.push(arr.slice(i, i+n));
    }
    result.splice(n, result.length);
    return result;
}

// Only change code above this line


console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));     // Change this line
module.exports = splitArrayInGroups;