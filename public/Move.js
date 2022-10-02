const eyes = document.querySelectorAll('.eye')
const anchor = document.getElementById('anchor');
const rekt = eye.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

document.addEventListener('mousemove' , (e) => {
    console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;


    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90+ angleDeg}deg)`
    }
    )
}