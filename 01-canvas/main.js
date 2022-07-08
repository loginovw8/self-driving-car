const canvas = document.querySelector('canvas');
canvas.width = 200;

const ctx = canvas.getContext("2d");

animate();

function animate() {
    canvas.height = window.innerHeight;

    requestAnimationFrame(animate);
}