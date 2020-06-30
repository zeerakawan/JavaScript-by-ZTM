// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

1.
const promise = new Promise ((reject, resolve) => {
  setTimeout(resolve, 4000, "Success")
})

const urls = [
  'https://robohash.org/api1',
  'https://robohash.org/api2',
  'https://robohash.org/api3',
  'https://robohash.org/api4'
]
Promise.all(urls.map(url => {
  return fetch(url).then(values => {
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])
    console.log(values[3])
  })
})).catch(() => console.log("Error"))

async function fetchUsers() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`) 
  const res = await res.json();
  console.log(data);
}

const animals = {
  lion: 10, 
  tiger: 20, 
  monkey: 5,
  cat: 4
}

function objectSpread ( p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { lion, tiger, ...rest} = animals;
objectSpread (tiger, lion, rest);

//********************************************************

const urls = [
  `https://jsonplaceholder.typicode.com/users`,
  `https://jsonplaceholder.typicode.com/posts`,
  `https://jsonplaceholder.typicode.com/albums`
]

const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  ))
  console.log('users', users)
  console.log('posts', posts)
  console.log('albums', albums)
}

const getData2 = async function () {
  const array = urls.map(url => fetch(url));
  for await (let request of array) {
    const data = await request.json();
    console.log(data);
  }
}
