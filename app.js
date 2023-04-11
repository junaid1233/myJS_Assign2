// ASSIGNMENT 02

// JAVASCRIP CRASH COURSE
// MUHAMMAD JUNAID
// roll no WMA-87563

// =======================Q1==========================

/*
1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/
// function sumCreater(num) {
//     return function (Z) {
//         return num + Z;
//     }
// }
// const addThree = sumCreater(3);
// const result = addThree(5);
// console.log(result);


// =======================Q2==========================


/*
2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/
// function arrayFinder(array, value) {
//     if (array.length === 0) {
//         return false;
//     }
//     if (array[0] === value) {
//         return true;
//     }
//     return arrayFinder(array.slice(1), value);
// }

// const myBrothersArray = ["waleed","khulaid","shoaib","hasnain","junaid"];
// const findValueFromAboveArray = "Junaid";
// const find = arrayFinder(myBrothersArray, findValueFromAboveArray);

// Convert the string to uppercase
// const uppercaseString = findValueFromAboveArray.toUpperCase();
// console.log(find);
// Convert the string to lowercase
// const lowercaseString = findValueFromAboveArray.toLowerCase();
// console.log(find);

// console.log(find);



// =======================Q3==========================

/*
3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/
// function paraAddition(text) {

//     var newParaVariable = document.createElement("J");

//     var textVariable = document.createTextNode(text);
//     newParaVariable.appendChild(textVariable);

//     document.body.appendChild(newParaVariable);
// }
// paraAddition(">> This is my new para <<<");
// function paragraphAddition(text) {

//     var newParagraph = document.createElement("J");

//     var textVariable = document.createTextNode(text);
//     newParagraph.appendChild(textVariable);

//     document.body.appendChild(newParagraph);
// }
// paraAddition(">> This is my new para <<<");





// =======================Q4==========================


/*
4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.
*/
// function addListItem(text) {

function addListItem(text){
    var liVar = document.createElement("li");
    var ul = document.getElementById("myItems");
    liVar.textContent = text;
    ul.appendChild(liVar)
}


// =======================Q1==========================



/*
5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
*/
// function backColor(target, color) {

//     target.style.backgroundColor = color;
// }
// let backGround = document.querySelector("#para");
// backColor(backGround, "red");






// =======================Q1==========================

/*
6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
*/
// function saveObjectToLocalStorage(key, obj) {

//     if (typeof (Storage) !== "undefined") {

//         localStorage.setItem(key, JSON.stringify(obj));
//     } else {
//         console.log("Local storage is not supported by this browser.");
//     }
// }
// const myObj = {
//     name: "Shehroz",
//     age: 17,
// };
// saveObjectToLocalStorage("myKey", myObj);

// const retrievedObj = JSON.parse(localStorage.getItem("myKey"));
// console.log(retrievedObj); // { name: "John", age: 30 }




// =======================Q1==========================




/*
7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.
*/
// function getObjectFromLocalStorage(key) {
//     const storedObject = localStorage.getItem(key);
//     if (storedObject) {
//         return JSON.parse(storedObject);
//     }
//     return null;
// }
// const myObject = getObjectFromLocalStorage("myKey");
// console.log(myObject);


// =======================Q1==========================



/*
8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.
*/
// function saveAndRetrieveFromLocalStorage(obj) {

//     for (const property in obj) {
//         localStorage.setItem(property, obj[property]);
//     }

//     const newObj = {};
//     for (const property in obj) {
//         newObj[property] = localStorage.getItem(property);
//     }
//     return newObj;
// }
// const myObj = {
//     name: "Muhammad junaid",
//     age: 17,
//     city: "junaid"
// };
// const newObj = saveAndRetrieveFromLocalStorage(myObj);
// console.log(newObj);
