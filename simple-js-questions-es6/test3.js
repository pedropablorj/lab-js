function showLuckyNumber(doubleIt) {
  const dateNow = new Date();
  const luckyNumber = Math.ceil(Math.random() * 100);
  const winningsText = doubleIt ? 'and wins double!' : 'and wins'
  console.log(`${dateNow} - The lucky number is ${luckyNumber} ${winningsText}`);
}

// 1. Create a function that will call showLuckyNumber every 5 seconds
// 2. Create a function that will call showLuckyNumber every 10 seconds and will pass it a value true (doubleIt to be true)
// 3. After 30 seconds, both functions should stop

const setTimer = (fn, timer, param = false) => {
	return setInterval(fn, timer, param);
};

const clearTimers = (arr) => {
	arr.forEach((int)=> {
		clearInterval(int);
	});
	
	return;
};

const int5 = setTimer(showLuckyNumber, 5000, false);
const int10 = setTimer(showLuckyNumber, 10000, true);

//Stop
setTimeout(clearTimers, 30000, [int5, int10]);
