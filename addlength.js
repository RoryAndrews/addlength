/**
 * Created by Rory on 9/24/2015.
 */

var test1 = ["apple", "pear"];
var test2 = ["you", "can", "win"];

function addLength(list) {
  return _.map(list, addToEnd);
}

function addToEnd(elem) {
  return elem + " " + elem.length;
}

console.log(addLength(test1));
console.log(addLength(test2));