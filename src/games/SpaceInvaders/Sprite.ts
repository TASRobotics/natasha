import p5Types from 'p5';
import { SHOT_PAUSE, PLAYER_INVINCIBLE, SCALE, CANVAS_SIZE } from './config';
import { add } from './helpers';

export class Sprite {
  p5: p5Types;
  pos: p5Types.Vector;
  size: p5Types.Vector;
  img: p5Types.Image;

  constructor(
    p5: p5Types,
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5Types.Image
  ) {
    this.p5 = p5;
    this.pos = p5.createVector(x, y);
    this.size = p5.createVector(width, height);
    this.img = img;
  }

  corner1() {
    return this.pos.copy();
  }

  corner2() {
    return add(this.p5, this.pos, this.size);
  }

  width() {
    return this.size.x;
  }
  height() {
    return this.size.y;
  }
  left() {
    return this.pos.x;
  }
  right() {
    return this.width() + this.left();
  }
  upper() {
    return this.pos.y;
  }
  lower() {
    return this.height() + this.upper();
  }

  intersects(other: Sprite) {
    return !(
      this.right() < other.left() ||
      other.right() < this.left() ||
      this.lower() < other.upper() ||
      other.lower() < this.upper()
    );
  }

  draw() {
    this.p5.push();
    this.p5.image(
      this.img,
      this.left(),
      this.upper(),
      this.width(),
      this.height()
    );
    this.p5.pop();
  }
}

export class Invader extends Sprite {
  vel: p5Types.Vector;
  timeToShoot: number;
  bulletImg: p5Types.Image;
  deadMarked: boolean = false;

  constructor(
    p5: p5Types,
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5Types.Image,
    bulletImg: p5Types.Image
  ) {
    super(p5, x, y, width, height, img);
    this.vel = p5.createVector(SCALE, 0);
    this.timeToShoot = Math.floor(p5.random(0, SHOT_PAUSE * 5));
    this.bulletImg = bulletImg;
  }

  update(frameCount: number, MOVE_INTERVAL: number, invaderBullets: Bullet[]) {
    if (frameCount % MOVE_INTERVAL < 1) {
      this.pos.add(this.vel);
    }
    this.timeToShoot--;
    if (this.timeToShoot <= 0) {
      let b = new Bullet(
        this.p5,
        this.left() + this.width() / 2,
        this.lower(),
        this.bulletImg
      );
      b.vel.mult(-0.9);
      invaderBullets.push(b);
      this.timeToShoot = SHOT_PAUSE;
    }
  }
}

export class Player extends Sprite {
  vel: p5Types.Vector;
  timeBetweenShots: number;
  shootCooldown: number;
  invincibleCounter: number;
  visible: boolean;
  bulletImg: p5Types.Image;

  constructor(
    p5: p5Types,
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5Types.Image,
    bulletImg: p5Types.Image
  ) {
    super(p5, x, y, width, height, img);
    this.vel = p5.createVector(SCALE / 2, 0);
    this.timeBetweenShots = 20;
    this.shootCooldown = 0;
    this.invincibleCounter = 0;
    this.visible = true;
    this.bulletImg = bulletImg;
  }

  update(frameCount: number) {
    this.shootCooldown--;
    this.invincibleCounter--;
    this.visible = this.invincible ? frameCount % 20 >= 20 / 2 : true;
  }

  move(x: number) {
    // this.pos.add(mult(this.p5, this.vel, Math.sign(dir)));
    this.pos = this.p5.createVector(x * this.maxX, this.pos.y);
  }

  shoot(bullets: Bullet[]) {
    if (this.shootCooldown <= 0) {
      let b = new Bullet(
        this.p5,
        this.left() + this.width() / 2,
        this.upper(),
        this.bulletImg
      );
      bullets.push(b);
      this.shootCooldown = this.timeBetweenShots;
    }
  }

  get invincible() {
    return this.invincibleCounter > 0;
  }
  set invincible(inv) {
    this.invincibleCounter = inv ? PLAYER_INVINCIBLE : 0;
  }
  get maxX() {
    return CANVAS_SIZE - this.width();
  }

  draw() {
    if (!this.visible) return;
    else super.draw();
  }
}

export class Barrier extends Sprite {
  constructor(p5: p5Types, x: number, y: number, img: p5Types.Image) {
    super(p5, x, y, SCALE, SCALE, img);
  }
}

export class Bullet extends Sprite {
  vel: p5Types.Vector;
  deadMarked: boolean;

  constructor(p5: p5Types, x: number, y: number, img: p5Types.Image) {
    super(p5, x, y, img.width * SCALE, img.height * SCALE, img);
    this.vel = p5.createVector(0, -SCALE * 2);
    this.deadMarked = false;
  }

  update() {
    this.pos.add(this.vel);
  }
}
