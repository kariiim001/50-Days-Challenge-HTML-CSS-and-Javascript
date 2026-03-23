const cups = document.querySelectorAll(".cup-small")
const liters = document.querySelector("#liters")
const percent = document.querySelector(".percent")
const remained = document.querySelector(".remained")

updateBigCup()

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => highLightCup(index))
})

function highLightCup(index) {
    cups.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullcup = document.querySelectorAll(".cup-small.full").length
    const totalcups = cups.length

    // update percentage
    if (fullcup === 0) {
        percent.style.visibility = 'hidden'
        percent.style.height = '0px'
    } else {
        percent.style.visibility = 'visible'
        percent.style.height = `${(fullcup / totalcups) * 330}px`
        percent.innerText = `${(fullcup / totalcups) * 100}%`
    }

    // update remained
    if (fullcup === totalcups) {
        remained.style.visibility = 'hidden'
        remained.style.height = '0px'
    } else {
        remained.style.visibility = 'visible'
        remained.style.height = `${330 - (fullcup / totalcups) * 330}px`
        liters.innerText = `${2 - (250 * fullcup / 1000)}L`
    }
}