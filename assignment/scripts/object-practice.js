console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Jack',
  lastName: 'Blonigen',
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: ['ramen', 'pasta', 'chocolate']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/ 
const fullName = (me.firstName + ' ' + me.lastName);

console.log(fullName)

//space between the ' ' for space to show in console

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);

//.me is constantly pulling information from the me object

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);
me.shoeCount++;
console.log(me.shoeCount);

//below can do the same, just doesn't call the object
//let shoeCount = 4;
//console.log(shoeCount);
//shoeCount ++
//console.log(shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoritecolor = "purple";
console.log(me.favoritecolor);
console.log('A little about me', me);

//don't forget quotes on the new property as it;s undefined without them.