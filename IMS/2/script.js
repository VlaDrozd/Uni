const config1 = [20, 35, 15];

const config2 = [15, 30, 45];

const distributionOfMachines = count => {
  let rnd1 = Math.random();
  let rnd2 = (1 - rnd1) * Math.random();
  const machines1 = Math.floor(count * rnd1);
  const machines2 = Math.floor(count * rnd2);
  const machines3 = count - machines2 - machines1;

  return [machines1, machines2, machines3];
}

const parts = (machines, config) => {
  return machines.map((machine, i) => machine * config[i]);
}

const machines = (parts, config) => {
  return parts.map((part, i) => part / config[i]);
}

const process = (mass = { profit: 0 }) => {
  mass.machine1 = parts(distributionOfMachines(20), config1);
  mass.machine2 = parts(distributionOfMachines(30), config2);

  if ((mass.machine1[0] + mass.machine2[0] >= 150) && (mass.machine1[1] + mass.machine2[1] >= 100)) {
    mass.profit = (mass.machine1[0] + mass.machine2[0]) * 6
      + (mass.machine1[1] + mass.machine2[1]) * 4
      + (mass.machine1[2] + mass.machine2[2]) * 8;

    return mass
  } else {
    return process()
  }
}

(() => {
  let mass = process()

  for (let i = 0; i < 1000000; i++) {
    const option = process()
    if (option.profit > mass.profit) {
      mass = { ...option }
    }
  }

  mass.machine1 = [...machines(mass.machine1, config1)]
  mass.machine2 = [...machines(mass.machine2, config2)]
  console.log(mass)
})()
