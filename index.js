function hasTargetSum(array, target) {
  // Write your algorithm here
  let newArray = array.slice(0);
  let sumMatchedTarget = new Array ();
  for (let index = 0; index <= array.length - 1; index++) {
    let base = newArray.shift();
    for (let element of newArray) {
      if (base + element === target) {
        sumMatchedTarget.push([base,element])
      }
    }
  }
  return (sumMatchedTarget.length > 0);
}
/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  create a copy of the array passed in
  create a new array to hold elements whose sum matches the target passed in
  iterate through the copy of array remove an element assign it to a variable
  iterate over modified copy of array pushing any elements whose sum matches the target to sumMatchedTarget
  return the result of the comparison of sumMatchedTargets length with zero 
*/

/*
  Add written explanation of your solution here
  newArray copies the array given for use within the function
  sumMatchedTarget is an array that stores elements whose sum match the target
  the first for loop iterates over every index in the given array
  base is assigned the first element from newArray using the shift method
  newArray is iterated over using a for of loop inside which an if statement decides whether or not to push a base, element array to sumMatchedTarget based on their sum
  the result of a comparison of sumMatchedTargets length is returned. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
