const progress = document.getElementById('progress')
const previous = document.getElementById('previous')
const next = document.getElementById('Next')
const circles = document.querySelectorAll('.circle')

let current_active = 1
console.log(circles.length)
next.addEventListener('click',() => {
    current_active++
    console.log(current_active)

    if(current_active>circles.length) {
        current_active=circles.length
    }

    update()

})

previous.addEventListener('click',()=>{
    current_active--
    console.log(current_active)

    if (current_active<1){
        current_active=1
    }

    update()
})

function update(){
    circles.forEach((circle,index)=>{
        if (index < current_active)
        {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives =document.querySelectorAll('.active')
    progress.style.width = ((actives.length-1)/
                            (circles.length-1)*100 +'%')

    if (current_active === 1){
        previous.disabled = true
    } else if (current_active === circles.length){
        next.disabled = true
    } else{
        previous.disabled = false
    }

}