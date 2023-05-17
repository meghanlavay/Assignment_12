// STEP 1
// function Cat() {}
// console.log('The new cat has been created.');

// const Dog = function () {}
// console.log('The new dog has been created.');

// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {
// console.log('The Animal has been created');
//     }
// }

// STEP 4
// class Animal {
//     constructor(type) {
// console.log(`The new ${type} has been created`);
//     }
// }
// const cat2 = new Animal('cat');

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
//     console.log(`My ${this.type} is a ${this.color} ${this.breed} that is ${this.height} tall and ${this.length} long.`);
//     }
// }
// const myAnimal = new Animal('dog', 'Chihuahua', 'white', '12 in', '14 in');

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
//     console.log(`My ${this.type} is a ${this.color} ${this.breed} that is ${this.height} tall and ${this.length} long.`);
//     }
// }
// const myAnimal = new Animal('dog', 'Chihuahua', 'white', '12 in', '14 in');
// for(let prop in myAnimal) {
//   console.log(`${prop}: ${myAnimal[prop]}`)
// }

// STEP 7
// class Animal {
//   constructor(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length= length;
//   }

//   speak() {
//     if(this.type === 'cat') {
//       console.log(`The ${this.color} cat is meowing!`); 
//     } else if(this.type === 'dog') {
//       console.log(`The ${this.color} dog is barking!`); 
//     }
//   }
// }
// const myAnimal1 = new Animal('dog', 'Chihuahua', 'white', '12 in', '14 in');
// myAnimal1.speak();

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//     let _type = type;
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;
//     let checkType = function() {
//         if(_type === 'cat') {
//         return cat; 
//         } else if(_type === 'dog') {
//         return dog;     
//         }
//     }
  
//     this.speak = function() {
//     console.log(`The ${checkType()} has made a noise`);
//     }
//     }
// }

// const myAnimal1 = new Animal('dog', 'Chihuahua', 'white', '12 in', '14 in');
// myAnimal1.speak();

// STEP 9
// String.prototype.findWords = function(text, word) {
//     let i = 0;
//     let count = 0;
//     let textArr = text.split(' ');
//     for(i; i < textArr.length; i++){
//         if(textArr[i].toLowerCase() === word) {
//             count +=1;
//         }
//     return count;
//     }
// }
    
// const newString = new String();
// newString.findWords('Humpty Dumpty sat on a wall. Humpty Dumpty had a great fall. All the king\'s horses and all the king\'s men, couldn\'t put Humpty together again.', 'humpty')
// alert(`The word ${word} can be found in the text ${count} times.`)
