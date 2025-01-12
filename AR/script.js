let orbit = document.querySelector("#orbit");
let angle = 0; 

function animateOrbit() {
    angle += 0.01;
    let x = Math.cos(angle) * 1.5;
    let z = Math.sin(angle) * 1.5;
    orbit.setAttribute("position", `${x} 0 ${z}`);
    requestAnimationFrame(animateOrbit);
}

animateOrbit();
