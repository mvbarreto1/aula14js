const form = document.querySelector('#form')
const input = document.querySelector('#username')
const section = document.querySelector('#showUser')

const getApi = async (username) => {
    const req = await fetch(`https://viacep.com.br/ws/{60862200}/json/`)
    const res = await req.json()
    try {
        return renderApi(res)
    } catch (error) {
        console.error(error);
    }
}

const renderApi = (req) => {
    const img = document.createElement('img')
    const nome = document.createElement('h2')
    const bio = document.createElement('p')

    img.src = req.avatar_url
    nome.textContent = req.name
    bio.textContent = req.bio

    section.append(img, nome, bio)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = input.value
    getApi(username)
})