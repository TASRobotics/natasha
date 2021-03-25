import p5Types from 'p5';

export const mult = (p5: p5Types, v1: p5Types.Vector, mag: number) => {
  return p5.createVector(v1.x * mag, v1.y * mag);
};

export const add = (p5: p5Types, v1: p5Types.Vector, v2: p5Types.Vector) => {
  return p5.createVector(v1.x + v2.x, v1.y + v2.y);
};
