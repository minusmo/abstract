import { Vertex } from './points';

export const reverse = (v: Vertex, coor: number): Vertex => {
  const reversed = [v[0], v[1], v[2]];
  reversed[coor] = v[coor] * -1;
  return reversed;
};

export const normalize = (vertices: Vertex[], scale: number): Vertex[] => {
  const coords = vertices.map((vertex) => Math.abs(vertex[0]));
  const maxScale = Math.max(...coords);
  return vertices.map((vertex) =>
    vertex.map((coor) => (scale * coor) / maxScale)
  );
};

export const sphereCoordinate = (r: number, phi: number, theta: number) => {
  const x = r * Math.sin(theta) * Math.cos(phi);
  const y = r * Math.sin(theta) * Math.sin(phi);
  const z = r * Math.cos(theta);
  return [x, y, z];
};
export const randomPhi = () => Math.random() * 2 * Math.PI;
export const randomTheta = () => randomPhi();
