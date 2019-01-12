/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Inhabitant {
  constructor(name, gender, saying, friends) {
    this.name = name;
    this.gender = gender;
    this.saying = saying;
    this.friends = friends;
  }
}

class Cat extends Inhabitant {
  constructor(name, gender, saying, friends, legs) {
    super(name, gender, saying, friends, legs);
    this.species = 'cat';
    this.legs = 4;
  }

}

class Dog extends Inhabitant {
  constructor(name, gender, saying, friends) {
    super(name, gender, saying, friends);
    this.species = 'dog';
    this.legs = 4;
  }

}

class Human extends Inhabitant {
  constructor(name, gender, saying, friends) {
    super(name, gender, saying, friends);
    this.species = 'human';
    this.legs = 2;
    this.hands = 2;
  }
}

function getInfo(obj) {
  let massage = [
    `${this.species}`,
    `<strong>${this.name}</strong>`,
    `${this.gender}`,
    this.legs === (null || undefined) ? '' : `${this.legs}`,
    this.hands === (null || undefined) ? '' : `${this.hands}`,
    `<em>${this.saying}</em>`,
    `${this.friends}`
  ];
  massage = massage.filter(function (n) {
    return n !== ''
  });
  return massage.join('; ');
}

const dog = new Dog('Toby', 'male', 'woof-woof!', ['Tiki, Taki']);
const cat = new Cat('Fabula', 'female', 'meow-meow!', ['Tom, Mimi']);
const man = new Human('Kan', 'male', 'I am Superman!', ['Tony, Alice']);
const woman = new Human('Kandy', 'female', 'Who is there?', ['Kan, Andy']);
const catWoman = new Human('Lili', 'female', 'meow-meow! Who is there?', ['Tor, Iron-man']);

let inhabitants = [dog, cat, woman, man, catWoman];

inhabitants.forEach(element => {
  console.log(element);
  // print(getInfo(element));
});


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */