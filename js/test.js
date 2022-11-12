const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(10, 50)
ctx.lineTo(50, 50)
ctx.lineTo(50, 10)
ctx.fillStyle= 'red'
ctx.fill()
ctx.closePath()

canvas.addEventListener('click', function (e) {
    window.location.href = "heart.html";
})