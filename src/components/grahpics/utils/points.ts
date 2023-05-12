import {
  normalize,
  randomPhi,
  randomTheta,
  reverse,
  sphereCoordinate,
} from './mathutils';

export type Vertex = number[];
export const BOUND = 50;
export const origin = (): Vertex => [0, 0, 0];
export const base = (): Vertex => [1, 1, 1];
export const randomRadius = (): number => Math.random() * 10 + 1;
export const randomPointAtR = (r: number, point: Vertex) =>
  point.map((coordinate) =>
    Math.floor(coordinate + (r * new Date().getMilliseconds()) / 100)
  );
export const randomNVertices = (N: number): Array<Array<number>> =>
  normalize(
    new Array(N)
      .fill([])
      .map((eachV, index) =>
        randomPointAtR(randomRadius(), reverse(base(), index % 3))
      ),
    BOUND
  );
export const randomSphereGeometryVertices = (n: number, r: number): Vertex[] =>
  new Array(n)
    .fill([])
    .map((vertex) => sphereCoordinate(r, randomPhi(), randomTheta()));
export const randomRotationDirection = () =>
  Math.floor(Math.random() * 1000) % 10 > 5 ? 1 : -1;

export const componentToHex = (c: number) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};
export const rgbToHex = (r: number, g: number, b: number) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
