// Number Methods

/*
  - toString() // will convert the string number to number => ("100") = 100

  - toFixed() // if you have like 5.555555 and you used this methed will cut after dost and in between brackets you will write how many numbers do you want to apear  after the dots => ((99.55555).toFixed(2)) = 99.56

  - parseInt() // in this methods will return only numbers => ( parseInt (this item is 99.55) ) = 99 

  - parsFloat() // in this methos is the same of parseInt put will return with decimol like => (parseFloat(this item is 99.55)) = 99.55

  - isInteger() // will return wether this value is an integer or not like :
    isInteger("100") = false
    isInteger("100.55") = false
    isInteger(100) = true


  isNaN() will return true or false like :
    isNaN("nouraddin")  = true
    isNaN("100")  = false
    isNaN(100)  = false
*/


// toString()
let toString = "100";
console.log(`toString: ${toString.toString()}`);

// toFixed()
let toFixed = 99.5555;
console.log(`toFixed: ${toFixed.toFixed(2)}`);



// parseInt()

// it will change the string in to a number and if was a number but has a decimal numbers it will return only the number without decimal numbers
console.log(`parseInt: ${parseInt("100")}`);
console.log(`parseInt: ${parseInt(143)}`);
console.log(`parseInt: ${parseInt(9.55)}`);




// parsFloat()
console.log(`ParsFloat: ${parseFloat(10)}`);
console.log(`ParsFloat: ${parseFloat(10.5)}`);


// isInteger()
console.log(`is "100" Integer : ${Number.isInteger("100")}`);
console.log(`is "9.5" Integer : ${Number.isInteger("9.5")}`);
console.log(`is 40 Integer : ${Number.isInteger(40)}`);



// isNaN()
// isNaN() returns true if a value is NaN:
console.log(`is "NOURADIN" / "NOURADIN NaN : ${Number.isNaN("NOURADIN" / "NOURADIN")}`); // true ==> because it's  not posible string devide by string 
console.log(`is 2 * "N" NaN : ${Number.isNaN(2 * "N")}`); // true  ==> because it's  not posible Number multiple by string 
console.log(`is "9.5" NaN : ${Number.isNaN("9.5")}`); // false ==> because it's number already
console.log(`is 40 NaN : ${Number.isNaN(40)}`); // false ==> because it's number already