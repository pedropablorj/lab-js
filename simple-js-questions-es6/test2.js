let name = 'Rick';

function greetMe(name) {
  console.log(`Hi ${this.name}!`);
}

greetMe('George');

// 1. What name will it print and why
// It'll print Hi Undefined, function's this has a defaul bingind to the global, but "let" declar name only for the scope of that block preventing global declarations. 
