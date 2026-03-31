const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - button.offsetLeft;
        const y = e.clientY - button.offsetTop;
        const ripple = document.createElement('span');
        
        console.log(x, y);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        this.appendChild(circle);

        setTimeout(() => {circle.remove();}, 500);

    })
});