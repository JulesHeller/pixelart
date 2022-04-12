for (let i = 0; i < 256; i++) {
    document.querySelector(".container").innerHTML += "<div draggable='false'></div>"
}

let selectedColour = "noir"
let isClicking = false;
let fill = false;

let pixels = document.querySelectorAll(".container div")
let couleurs = document.querySelectorAll(".couleurs>div:not(.outils)")
let outils = document.querySelectorAll(".outils div")

document.querySelector(".container").addEventListener("mousedown", () => { isClicking = true; })
document.addEventListener("mouseleave", () => { isClicking = false; })
document.body.addEventListener("mouseup", () => { isClicking = false; })

pixels.forEach(e => {
    e.addEventListener("mouseenter", contour)
    e.addEventListener("mouseleave", contour)

    e.addEventListener("mousedown", fillPixel)

    e.addEventListener("mouseenter", draw)

    e.addEventListener("click", fillPixel)
})

function draw() {
    if (fill == false) {
        if (isClicking) {
            this.classList.remove("blanc", "noir", "gris", "rouge", "vert", "bleu", "jaune", "rose")
            this.classList.add(selectedColour)
        }
    }
}

function contour() {
    this.classList.toggle("contour");
}

couleurs.forEach(e => {
    e.addEventListener("click", selectColour)
})

function selectColour() {
    couleurs.forEach(e => {
        e.classList.remove("selected")
    })

    selectedColour = this.getAttribute("class")
    console.log(selectedColour)

    this.classList.add("selected")
}

outils.forEach(e => {
    e.addEventListener("click", swapTool)
})

function swapTool() {
    outils.forEach(e => {
        e.classList.toggle("cache")
    })

    if (fill) {
        fill = false;
        console.log(fill)
    } else {
        fill = true;
        console.log(fill)
    }
}

function fillPixel() {
    if (fill == true) {
        pixels.forEach(e => {
            e.classList.remove("blanc", "noir", "gris", "rouge", "vert", "bleu", "jaune", "rose")
            e.classList.add(selectedColour)
        })
    } else {
        this.classList.remove("blanc", "noir", "gris", "rouge", "vert", "bleu", "jaune", "rose")
        this.classList.add(selectedColour)
    }
}