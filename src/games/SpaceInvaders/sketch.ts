import p5Types from 'p5';
import { SCALE, SHOOT_INTERVAL } from './config';
import { Invader, Player, Bullet } from './Sprite';
import BulletImg from './bullet.png';
import InvaderImg from './invader.png';
import Invader2Img from './invader2.png';
import SpaceshipImg from './spaceship.png';

import { mult } from './helpers';

//how many frames it takes to move a space invader
let MOVE_INTERVAL = 30;

let invaders: Invader[] = [];
let bullets: Bullet[] = [],
  invaderBullets: Bullet[] = [];
let player: Player;

let invaderImg: p5Types.Image,
  invader2Img: p5Types.Image,
  spaceshipImg: p5Types.Image,
  bulletImg: p5Types.Image,
  barrierImg: p5Types.Image;
let invaderFont: p5Types.Font;

let frameCount = 0;
let invaderSpeed = 1;

let playerLives: number, score: number, win: boolean, streak: number;

let shootInterval: NodeJS.Timeout;

export const preload = (p5: p5Types) => {
  invaderImg = p5.loadImage(InvaderImg);
  invader2Img = p5.loadImage(Invader2Img);
  spaceshipImg = p5.loadImage(SpaceshipImg);
  bulletImg = p5.loadImage(BulletImg);

  //"cosmic alien" font
  // invaderFont = p5.loadFont('ca.ttf');
};

export const setup = (p5: p5Types, parentRef: Element) => {
  console.log(Math.min(500, window.innerWidth));
  p5.createCanvas(
    Math.min(500, window.innerWidth),
    Math.min(500, window.innerWidth)
  ).parent(parentRef);
  p5.noSmooth();
  // p5.textFont(invaderFont);

  //create barrier image
  barrierImg = p5.createImage(1, 1);
  barrierImg.set(0, 0, p5.color(255, 0, 255));

  //create invaders
  let invWidth = SCALE * invaderImg.width,
    invHeight = SCALE * invaderImg.height;

  let x = -(SCALE * 5 + invWidth) + SCALE,
    y = SCALE,
    yidx = 0;
  for (let i = 0; i < 9 * 4; ++i) {
    x += SCALE * 5 + invWidth;
    if (x >= p5.width - invWidth * 3) {
      y += SCALE * 5 + invHeight;
      yidx++;
      x = SCALE;
    }
    invaders.push(
      new Invader(
        p5,
        x,
        y,
        invWidth,
        invHeight,
        yidx % 2 == 0 ? invaderImg : invader2Img,
        bulletImg
      )
    );
  }

  //create player
  player = new Player(
    p5,
    p5.width / 2,
    p5.height - spaceshipImg.height * SCALE,
    spaceshipImg.width * SCALE,
    spaceshipImg.height * SCALE,
    spaceshipImg,
    bulletImg
  );

  playerLives = 2;
  score = streak = 0;
  win = false;

  MOVE_INTERVAL = 30;

  p5.loop();

  shootInterval = setInterval(() => {
    player.shoot(bullets);
  }, SHOOT_INTERVAL);
};

export const draw = (p5: p5Types) => {
  frameCount++;
  streak = p5.max(streak - 0.02, 0);

  //logic
  if (p5.mouseIsPressed) {
    move(p5);
  }
  if (p5.keyIsDown(p5.LEFT_ARROW)) {
    player.move(-SCALE);
  } else if (p5.keyIsDown(p5.RIGHT_ARROW)) {
    player.move(SCALE);
  }
  player.update(frameCount);

  for (let bullet of invaderBullets) {
    bullet.update();
    if (!player.invincible && player.intersects(bullet)) {
      bullet.deadMarked = true;
      gameOver(p5);
    }
  }

  for (let invader of invaders) {
    invader.update(frameCount, MOVE_INTERVAL, invaderBullets);
    // eslint-disable-next-line no-loop-func
    bullets.forEach((bullet) => {
      if (bullet.intersects(invader)) {
        score += p5.floor((1 / MOVE_INTERVAL) * 300 * streak);
        streak += 1;
        if (invader.img === invader2Img) score += 10;
        MOVE_INTERVAL -= 0.1;
        bullet.deadMarked = true;
        invader.deadMarked = true;
      }
    });
  }
  for (let bullet of bullets) {
    bullet.update();
  }
  if (
    invaders.some(
      (invader) => invader.right() >= p5.width || invader.left() <= 0
    )
  )
    invaders.forEach((invader) => {
      invader.pos.add(mult(p5, invader.vel, -1));
      invader.pos.y += SCALE * 5;
      invader.vel.x = -invader.vel.x;
    });

  //deletion of bullets and invaders
  bullets = bullets.filter(
    (bullet) => !bullet.deadMarked && bullet.lower() >= 0
  );
  invaderBullets = invaderBullets.filter(
    (bullet) => !bullet.deadMarked && bullet.upper() <= p5.height
  );
  invaders = invaders.filter((invader) => !invader.deadMarked);

  if (invaders.length == 0) {
    win = true;
  }

  //draw
  p5.background(0);

  for (let invader of invaders) {
    invader.draw();
  }
  for (let bullet of bullets) {
    bullet.draw();
  }
  for (let bullet of invaderBullets) {
    bullet.draw();
  }
  player.draw();

  p5.noStroke();
  p5.fill(255);
  p5.textSize(28);
  p5.textAlign(p5.LEFT, p5.TOP);
  p5.text(`Lives ${playerLives}\nStreak ${Math.round(streak * 10) / 10}`, 0, 0);
  p5.textAlign(p5.RIGHT, p5.TOP);
  p5.fill(win ? 0 : 255, 255, win ? 0 : 255);
  p5.text(`${score}`, p5.width, 0);

  if (playerLives < 0) {
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(64);
    p5.text('GAME OVER', p5.width / 2, p5.height / 2);
  }

  if (win) {
    //score logic and storing highscore in cookie
    score += playerLives * 100;
    if (score > hs()) {
      setHs(score);
    }

    p5.textAlign(p5.RIGHT, p5.TOP);
    p5.fill(win ? 0 : 255, 255, win ? 0 : 255);
    // p5.text(`${score}\nHi ${hs()}`, p5.width, 0);

    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(64);
    p5.text('YOU WIN', p5.width / 2, p5.height / 2);

    p5.noLoop();
  }
};

export const keyPressed = (p5: p5Types) => {
  // if (p5.keyCode === p5.UP_ARROW) {
  //   player.shoot(bullets);
  // }

  if (p5.key === 'r') {
    restart(p5);
  }
};

const move = (p5: p5Types) => {
  if (p5.mouseY < p5.height / 2) {
    player.shoot(bullets);
  } else if (p5.mouseX > p5.width / 2) {
    player.move(SCALE);
  } else if (p5.mouseX < p5.width / 2) {
    player.move(-p5.scale);
  }
};

export const mousePressed = () => {
  return false;
};

export const mouseDragged = () => {
  return false;
};

const gameOver = (p5: p5Types) => {
  playerLives--;
  //make player invincible
  player.invincible = true;

  if (playerLives < 0) {
    console.log('GAME OVER');
    restart(p5);
  }
};

const restart = (p5: p5Types) => {
  p5.redraw();
  p5.noLoop();
  clearInterval(shootInterval);

  setTimeout(() => {
    invaders = [];
    bullets = [];
    invaderBullets = [];
    player.pos.x = p5.width / 2;

    p5.setup();
  }, 3000);
};

//returns high score read from browser cookie. That's not a bad cookie!
const hs = () =>
  parseInt(
    document.cookie.replace(
      /(?:(?:^|.*;\s*)highscore\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
  );

const setHs = (val: number) => (document.cookie = `highscore=${val}`);
