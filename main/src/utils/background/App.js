import { Round } from "./round.js";

const COLORS = [
  // { r: 45, g: 74, b: 227 },
  // { r: 250, g: 255, b: 89 },
  // { r: 255, g: 104, b: 248 },
  { r: 44, g: 209, b: 252 },
  // { r: 54, g: 233, b: 84 },
  { r: 217, g: 83, b: 79 },
  { r: 249, g: 249, b: 249 },
  { r: 91, g: 192, b: 222 },
  { r: 92, g: 184, b: 92 },
  { r: 66, g: 139, b: 202 },
]

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.getElementById("isCanvas").appendChild(this.canvas);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;


    this.totalParticles = 15;
    this.particles = [];
    this.maxRadius = 900;
    this.minRadius = 400;


    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio)

    this.ctx.globalCompositeOperation = "saturation"

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new Round(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor]
      )

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }

      this.particles[i] = item;
    };

  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this))
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight)
    }
  }
}

export default App;