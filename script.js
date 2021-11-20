const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1637315145639-1c4ede81dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, at.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="" />'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Nov 20, 2021'

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bgs - texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}