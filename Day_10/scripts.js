const joke = document.getElementById('joke')
const button = document.getElementById('jokeBtn')

generateJoke()

// -------------------------------------
// function using async await
// -------------------------------------

async function generateJoke() {
    const config = {headers:{'Accept':'application/json',},}

    const result = await fetch('https://icanhazdadjoke.com/',config)
    const data =await result.json()
    joke.innerHTML =data.joke
    }



// -------------------------------------
// function using .then 
// -------------------------------------
// function generateJoke(){
//     const config = {headers:{'Accept':'application/json',},}
//     fetch('https://icanhazdadjoke.com/',config)
//         .then(res => res.json())
//         .then(data =>{
//             joke.innerHTML =data.joke
//         })
// }

button.addEventListener('click',generateJoke)