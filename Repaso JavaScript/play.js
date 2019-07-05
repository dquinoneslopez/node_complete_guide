import { callbackify } from "util";

// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi, Iam ' + this.name);
//     }
// }

// const hobbies = ['Sports', 'Cooking'];

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = hobbies.slice();
// const copiedArray = [hobbies]
// const copiedArray = [...hobbies]; // spread operator *****************
// console.log(copiedArray);

// const copiedPerson = [...person];
// console.log(copiedPerson); 

// const toArray = (...args) => { // rest operator *************
//     return [args];
// }

// const printName = (personData) => {
//     console.log(personData.name);
// }
// const printName = ({name}) => {
//     console.log(nmame);
// }

// printName(person);

// const {name, age} = person;
// console.log(name, age);

// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500)
    });
    return promise;
};

setTimeout(()=> {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');

