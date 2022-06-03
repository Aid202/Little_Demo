const slide = document.querySelectorAll('.slide')
const current = 0


function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    cls()
    if (current === slide.length - 1) current = -1
        current++

        slide[current].style.display = 'block'
        slide[current].style.opacity = 0.4

        const x = 0.4
        const intX = setInterval(() => {
            x += 0.1
            slide[current].style.opacity = x
            if (x == 1) {
                classInterval(intX)
                x = 0.4
            }
        }, 100)
}

function prev() {
    cls()
    if (current === 0) current = slide.length
    current--

    slide[current].style.display = 'block'
    slide[current].style.opacity = 0.4

    const x = 0.4
    const intX = setInterval(() => {
        x += 0.1
        slide[current].style.opacity = x
        if (x == 1) {
            classInterval(intX)
            x = 0.4
        }
    }, 100)
}

function start() {
    cls()
    slide[current].display = 'block'
}

start()