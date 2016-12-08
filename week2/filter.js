var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array: ", numberArray);

function above5Filter(value){
  return value > 5;
}
var filteredNumberArray = numberArray.filter(above5Filter);

console.log("Filtered Number Array:" , filteredNumberArray);

var list = ["Tea", "Coffee", "Milk","Juice", "Cookies", "Chips", "Cookies Icecream"];
console.log("Shopping List:" , list) ;

var searchValue = "Cookies";
function containsFilter(value){
  return value.indexOf(searchValue) != -1;
}

var searchedList = list.filter(containsFilter);
console.log("Searched List", searchedList);
