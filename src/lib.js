export const person = {
    name: 'John Doe',
    lication: 'London',
    age: 30
}

export const sayHello = (name) => `Hello ${name}`

// Modules
/**
 * Async Await ES6
 */

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts))