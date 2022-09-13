// class Car {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;

  //   this.controls = new Controls();
  // }

  // move() {
  //   if (this.controls.forward) {
      this.speed += this.acceleration;
    // }
    // if (this.controls.reverse) {
      this.speed -= this.acceleration;
    // }
    // if (this.controls.left) {
    //   this.x -= 2;
    // }
    // if (this.controls.right) {
    //   this.x += 2;
    // }

    this.y -= this.speed;
  // }

//   draw(ctx) {
//     ctx.translate(this.x, this.y);
//     ctx.beginPath();
//     ctx.rect(
//       -this.width / 2,
//       -this.height / 2,
//       this.width,
//       this.height
//     );
//     ctx.fill();
//   }
// }
