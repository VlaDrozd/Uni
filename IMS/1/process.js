const expon = (avg) => {
  const r = Math.random();
  return -avg * Math.log(r);
}

const getSymbolsCount = () => {
  const r = Math.random();
  if (r < 0.3) {
    return 300;
  } else if (r >= 0.4) {
    return getRandomSymbols();
  } else {
    return 6000;
  }
}

const getRandomSymbols = () => {
  const r = Math.random();
  if (r < 0.1) { // 1500 => 2000
    return (r + 0.3) / 0.0002;
    // 0,0002x - 0.3
  } else if (r >= 0.5) { // 2800 => 4800
    return (r + 0.2) / 0.00025;
    // 0.00025x - 0.2
  } else {  // 2000 => 2800 
    return (r + 0.9) / 0.0005;
    // 0.0005x - 0.9
  }
}


module.exports = () => {
  const requestTime = expon(15);
  const bd1Time = expon(30);
  const bd2Time = Math.random > 0.6 ? expon(30) : 0;
  const responseTime = getSymbolsCount() / 80 * 6;
  return requestTime + bd1Time + bd2Time + responseTime;
}
