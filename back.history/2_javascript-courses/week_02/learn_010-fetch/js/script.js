/* 
    GET     - hämtar data, okrypterat. (I klartext i webbläsaradressfältet) (Kan jämföras med ett Vykort)
    POST    - skriva data, krypterat i en body. (Kan jämföras med ett brev)
    PUT     - uppdaterar HELA alltet utav ett tillhörande objekt.
    PATCH   - uppdaterar delar utav ett objekt.
    DELETE  - tar bort ett objekt.
*/

// Del 1 

const getPosts = () => {

    fetch('posts.json')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })

}

// getPosts()

// Del 2

const getPosts2 = () => {

    fetch('posts.json')
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}

// getPosts2()

// Del 3

const getFakePosts = () => {

    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => {
            console.log(res)
            // if response status isn't 200 (ok) skip sending response
            if(res.status !== 200) return
            // return response from JSON source (link)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}

// getFakePosts()

// Del 4

const post = {
    title: "Ny Post",
    body: "hej hej bla bla bla"
}

const getFakePosts2 = () => {

    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        // Nedkortad till skicka responsen direkt.
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}

const addFakePost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        // Nedkortad till skicka responsen direkt.
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}

// getFakePosts2()
// addFakePost()

// Del 5

const post2 = {
    title: "Ny Post igen",
    body: "hej flubber flabber"
}
// Hämta data från placeholdern
const getFakePosts3 = () => {

    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        // Nedkortad till skicka responsen direkt.
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}
// Skapa en ny post (id 101)
const addFakePost2 = () => {

    // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post2)
    })
        // Nedkortad till skicka responsen direkt.
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}
// Ändra på HELA innehållet av orginal API post id 5
const updateFakePost = () => {

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    fetch('https://jsonplaceholder.typicode.com/posts/5', {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post2)
    })
        // Nedkortad till skicka responsen direkt.
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}
// Ändra titeln på orginal API innehållet av post id 5
const patchFakePost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/5', {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: "New Awesome Title" })
    })
        // Nedkortad till skicka responsen direkt.
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}

// Ta bort innehåll id 5
const deleteFakePost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/5', {
        method: "DELETE",
    })
        // Nedkortad till skicka responsen direkt.
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        })

}

// getFakePosts3()
// addFakePost2()
updateFakePost()
patchFakePost()
deleteFakePost()



