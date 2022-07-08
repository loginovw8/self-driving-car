class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.controls = new Controls();
  }

  move() {
    if (this.controls.forward) {
      this.y -= 2;
    }
    if (this.controls.reverse) {
      this.y += 2;
    }

    // left and right? 
  }

  draw(ctx) {
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.rect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  }
}
