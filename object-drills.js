// let loaf = {
//   water: 210,
//   flour: 300,
//   hydration(){
//     return ((loaf.water/loaf.flour)*100);
//   }
// };

// console.log(loaf.flour, loaf.water, loaf.hydration());

// let brianObject = {
//   foo: 'hello',
//   bar: 'watsup',
//   fum: 'indeed',
//   quux: 'however',
//   spam: 'bigbux'
// };

// for (const property in brianObject') {
//   console.log(`${property}: $'{brianObject[property]}`);
// }

// let whateverObject = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(whateverObject.meals[3]);

// let brianObject = {
//   name: 'brian',
//   job: 'developer'
// };

// let michaelaObject = {
//   name: 'michaela',
//   job: 'developer',
//   boss: 'brian'
// };

// let benObject = {
//   name: 'ben',
//   job: 'theragun',
//   boss: 'brian'
// };


// let arrayOfObjects = [brianObject, michaelaObject, benObject];

// arrayOfObjects.forEach(element => {
//   if (!element.boss){
//     console.log(`${element.job} ${element.name} doesn't report to anybody.`);
//   } else {
//     console.log(`${element.job} ${element.name} reports to ${element.boss}`);
//   }
// });

// function createCharacter(name, nickname, race, origin, attack, defense){

//   const character = {
//     name: name,
//     nickname: nickname,
//     race: race,
//     origin: origin,
//     attack: attack,
//     defense: defense,
//     describe: function(){
//       console.log(`${name} is a ${race} from {origin}`);
//     },
//     evaluateFight: function(char){
//       let x = this.attack - character.defense;
//       let y = this.defense - character.attack;
      

//     }
//   };



// }

// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

// function findOne(arr,query){
//   return arr.filter(a=>a.id===query.id);
// }

// findOne(HEROES, { id: 1 });

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ],
    {findOne: function(arr,query){
          return arr.filter(a=>a.id===query.id)}}}}

