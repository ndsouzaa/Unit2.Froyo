
const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors!", "vanilla,vanilla, chocolate, chocolate, strawberry"
);

const stringArray = userInputString.split(",");

const flavorCount ={
  // flavorType: stringArray[i],-->empty?
  price: 25,
  // vanilla: ,
};
for (let i=0; i < stringArray.length; i++){
  const flavorType = stringArray[i];
  if (flavorType in flavorCount){
    flavorCount[flavorType]++;
  }
  else {
    flavorCount[flavorType] = 1;
  }
  
  
};
console.table(flavorCount);


// const flavorType =stringArray[i];


// const flavors =stringArray[i];
// if (flavorCount[flavors]){
//   flavorCount[flavors].count++;
// }
// else flavorCount[flavors] = {count:1};
