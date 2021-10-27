//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

let evensArr = [2, 4, 6, 8, 10];
let oddsArr = [1, 3, 5, 7, 9];
let allNums = [...evensArr, ...oddsArr];
console.log(allNums);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built


const MyFavoriteFoods = {
    restaurantA: 'dish1',
    restaurantC: 'dish2',
    restaurantB: 'dish3',
  };
  const friendFavoriteFoods = {
    restaurantE: 'dish4',
    restaurantD: 'dish5',
    restaurantF: 'dish6',
  };
  const allFoods = { ...MyFavoriteFoods, ...friendFavoriteFoods };
  console.log(allFoods);
  

// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 

let matrix = {
    name: 'Neo',
    age: 30,
    hometown: 'kansas'
};

let {hometown, ...other} = matrix;

console.log(matrix);

const pet = {};
matrix = { ...matrix, pet };
let petName = "Bruce";
let petAge = 1;
let petBreed = "Shoggoth";

matrix.pet = {petName, petName, petBreed}
// matrix.pet.name = petName;
// matrix.pet.age = petAge;
// matrix.pet.reed = petBreed;


console.log(matrix.pet);

