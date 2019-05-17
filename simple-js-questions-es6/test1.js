let name = 'Rick';

function greetMe() {
  console.log(`Hi ${name}!`);
}

name = 'Morty';

greetMe();

// 1. What name will it print and why
// It'll print Hi Morty, becuse name is reasigned before greetMe function execution.
