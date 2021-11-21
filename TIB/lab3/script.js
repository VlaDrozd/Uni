const fs = require('fs');

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}


fs.writeFileSync('./class.json', JSON.stringify(new User('Name', 'Surnamee')));


const array = [];

for(let i = 0; i<10; i++) {
  array.push(new User(`Name${i}`, `Surname${i}`));
}

fs.writeFileSync('./array.json', JSON.stringify(array));
