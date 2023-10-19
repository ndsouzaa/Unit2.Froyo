// create an object to model a shoe
const shoe = {
  // key : value
  brand: "Converse ",
  hasLaces: true,
  hasVelcro: false,
  color: "green",
  price: 60,
  activityType:"casual",
  isClosedToe: true,
  availableSizes:[5, 6, 8, 9, 10],
  style: "hightop",
  onSale: false,

};
// console.log(shoe)

// dot vs bracket notation
console.log(shoe.brand);
// console.log(shoe[brand]);---> doesnt work
console.log(shoe["brand"]);

const property = "price";
// console.log(shoe.property); --> doesnt work has to match key
console.log(shoe[property]);

//adding and updating properties
shoe.isKnockoff = false;
shoe.discountPercentage = 0.25;
shoe.availableSizes.splice(2,0, 7);
shoe.availableSizes.push(11,12);

//changes(updating) object properties
// you can update object properties as much as you want you just assign a new value to an existing key like below
shoe.onSale = true;
shoe["discountPercentage"] = 0.3;


// console.table(shoe);

delete shoe.hasVelcro;

//OBJECT LOOPING
    // when looping through objects we have to use a diff structure 

          // for(const key in object){...};
    //the for....in loop syntax can be used for diff things but mostly used within objects

for(const key in shoe){
  // console.log(key + ": " + shoe[key]);
  console.log(`${key}: ${shoe[key]}`);
}

console.log('---------------');
console.log(Object.keys(shoe));
console.log(Object.values(shoe));