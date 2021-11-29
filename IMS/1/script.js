const process = require('./process');

const getAverageTime = (itarations) => {
  const results = new Array(itarations).fill(0).map(el => process());
  const rusultsUnder100 = results.filter(el => el < 100);
  console.log(results);
  return [
    results.reduce((val, el) => val + el, 0) / itarations, 
    rusultsUnder100.reduce((val, el) => val + el, 0) / itarations
  ];
}

console.log(getAverageTime(100));
