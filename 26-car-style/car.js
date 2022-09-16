// class Car {
//   constructor(x, y, width, height, controlType, maxSpeed = 3) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;

//     this.speed = 0;
//     this.acceleration = 0.2;
//     this.maxSpeed = maxSpeed;
//     this.friction = 0.05;
//     this.angle = 0;
//     this.damaged = false;

//     if (controlType !== "DUMMY") {
//       this.sensor = new Sensor(this);
//     }

//     this.controls = new Controls(controlType);

    this.img = new Image();
    this.img.src = "car.png";

    this.mask = document.createElement("canvas");
    this.mask.width = width;
    this.mask.height = height;
  }

  // createPolygon() {
  //   const points = [];

  //   const radius = Math.hypot(this.width, this.height) / 2;
  //   const alpha = Math.atan2(this.width, this.height);

  //   points.push({
  //     x: this.x - Math.sin(this.angle - alpha) * radius,
  //     y: this.y - Math.cos(this.angle - alpha) * radius,
  //   });
  //   points.push({
  //     x: this.x - Math.sin(this.angle + alpha) * radius,
  //     y: this.y - Math.cos(this.angle + alpha) * radius,
  //   });
  //   points.push({
  //     x: this.x - Math.sin(Math.PI + this.angle - alpha) * radius,
  //     y: this.y - Math.cos(Math.PI + this.angle - alpha) * radius,
  //   });
  //   points.push({
  //     x: this.x - Math.sin(Math.PI + this.angle + alpha) * radius,
  //     y: this.y - Math.cos(Math.PI + this.angle + alpha) * radius,
  //   });

  //   return points;
  // }

  // assessDamage(roadBorders, traffic) {
  //   for (let i = 0; i < roadBorders.length; i++) {
  //     if (polysIntersect(this.polygon, roadBorders[i])) {
  //       return true;
  //     }
  //   }

  //   for (let i = 0; i < traffic.length; i++) {
  //     if (polysIntersect(this.polygon, traffic[i].polygon)) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }

  // move(roadBorders, traffic) {
  //   if (!this.damaged) {
  //     if (this.controls.forward) {
  //       this.speed += this.acceleration;
  //     }
  //     if (this.controls.reverse) {
  //       this.speed -= this.acceleration;
  //     }

  //     if (this.speed > this.maxSpeed) {
  //       this.speed = this.maxSpeed;
  //     }
  //     if (this.speed < -this.maxSpeed / 2) {
  //       this.speed = -this.maxSpeed / 2;
  //     }

  //     if (this.speed > 0) {
  //       this.speed -= this.friction;
  //     }
  //     if (this.speed < 0) {
  //       this.speed += this.friction;
  //     }
  //     if (Math.abs(this.speed) < this.friction) {
  //       this.speed = 0;
  //     }

  //     if (this.speed != 0) {
  //       const flip = this.speed > 0 ? 1 : -1;

  //       if (this.controls.left) {
  //         this.angle += 0.03 * flip;
  //       }
  //       if (this.controls.right) {
  //         this.angle -= 0.03 * flip;
  //       }
  //     }

  //     this.x -= Math.sin(this.angle) * this.speed;
  //     this.y -= Math.cos(this.angle) * this.speed;

  //     this.polygon = this.createPolygon();
  //     this.damaged = this.assessDamage(roadBorders, traffic);
  //   }

  //   if (this.sensor) {
  //     this.sensor.update(roadBorders, traffic);
  //   }
  // }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);
    ctx.drawImage(
      this.img,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.restore();

    if (this.sensor) {
      this.sensor.draw(ctx);
    }
  }
}
