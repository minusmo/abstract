type vertex = number[];
export const origin: vertex = [0, 0, 0];
export const randomRadius = (): number => Math.random() * 10;
export const randomPointAtR = (r: number, point: vertex) =>
  point.map(
    (coordinate) =>
      r * coordinate * Math.floor(new Date().getMilliseconds() / 10)
  );
export const randomNVertices = (N: number): Array<Array<number>> =>
  new Array(N)
    .fill([...origin])
    .map((eachV) => randomPointAtR(randomRadius(), eachV));
