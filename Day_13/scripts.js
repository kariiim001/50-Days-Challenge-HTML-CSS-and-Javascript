const tags = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    const tagsvalues = input.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim())

    tags.innerHTML = ''

    tagsvalues.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tags.appendChild(tagEl)
    })
}

function randomSelect(){

    const times = 30

    const interval = setInterval(() => {

        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)

    }, 100)


    setTimeout(() => {

        clearInterval(interval)

        setTimeout(() => {

            const randomTag = pickRandomTag()
            highlightTag(randomTag)

        },100)

    }, times * 100)
}

function pickRandomTag(){
    const tagElements = document.querySelectorAll('.tag')
    return tagElements[Math.floor(Math.random() * tagElements.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}