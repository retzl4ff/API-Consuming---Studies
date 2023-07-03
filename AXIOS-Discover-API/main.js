const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`) 
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name : "Marcelo Calvis",
    avatar : "data:image/jpeg;base64,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",
    city: "Barueri" 
}

const newUser = {
    name: "Joao Matos",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

deleteUser(1)
// updateUser(1, userUpdated)
// getUsers()
getUser(1)
// addNewUser()

