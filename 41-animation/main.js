// const carCanvas = document.querySelector('#carCanvas');
// carCanvas.width = 200;

// const networkCanvas = document.querySelector('#networkCanvas');
// networkCanvas.width = 300;

// const carCtx = carCanvas.getContext("2d");
// const networkCtx = networkCanvas.getContext("2d");
// const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
// const car = new Car(road.getLaneCenter(1), 100, 30, 50, "KEYS");
// const traffic = [
//     new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2, getRandomColor()),
// 	new Car(road.getLaneCenter(0), -200, 30, 50, "DUMMY", 2, getRandomColor()),
// 	new Car(road.getLaneCenter(2), -300, 30, 50, "DUMMY", 2, getRandomColor())
// ];

// animate();

function animate(time) {
    // for (let i = 0; i < traffic.length; i++) {
    //     traffic[i].move(road.borders, []);
    // }

    // car.move(road.borders, traffic);

    // carCanvas.height = window.innerHeight;
    // networkCanvas.height = window.innerHeight;

    // carCtx.save();
    // carCtx.translate(0, -car.y + carCanvas.height * 0.7);

    // road.draw(carCtx);

    // for (let i = 0; i < traffic.length; i++) {
    //     traffic[i].draw(carCtx, "red");
    // }

    // car.draw(carCtx, "blue");

    // carCtx.restore();

	networkCtx.lineDashOffset = -time/50;

//     Visualizer.drawNetwork(networkCtx, car.brain);
//     requestAnimationFrame(animate);
// }
