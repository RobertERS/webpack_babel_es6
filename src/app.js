import { person, sayHello } from './lib'

let test = () => 
    console.log('Webpack 4.x is working - :)' +
    ' ' +
    person.name)
test();

console.log(sayHello('Robert'));