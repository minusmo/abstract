import { normalize } from './mathutils';

export const distanceFromOrigin = (p: number[]) =>
  Math.sqrt(
    p.map((coord) => coord ** 2).reduce((sum, powered) => sum + powered, 0)
  );
export const thetaFromCos2 = (p1: number[], p2: number[]) => {
  const sumOfSquaredDiffs = p1
    .map((coord, index) => (coord - p2[index]) ** 2)
    .reduce((sum, squaredDiff) => sum + squaredDiff, 0);
  const oppositeEdgeLen = Math.sqrt(sumOfSquaredDiffs);
  const distP1 = distanceFromOrigin(p1);
  const distP2 = distanceFromOrigin(p2);
  const sqrdDistP1 = distP1 ** 2;
  const sqrdDistP2 = distP2 ** 2;
  const rhs = sqrdDistP1 + sqrdDistP2 - oppositeEdgeLen ** 2;
  const lhs = 2 * distP1 * distP2;
  const cosTheta = rhs / lhs;
  return Math.acos(cosTheta);
};

export const interpolationPoint = (
  v1: number[],
  v2: number[],
  deg: number,
  r: number
): number[] => {
  const theta = thetaFromCos2(v1, v2);
  const cost = Math.cos(theta * deg);
  const sint = Math.sin(theta * deg);
  const [normalizedV1, normalizedV2] = normalize([v1, v2], 1);
  const x = cost * normalizedV1[0] + sint * normalizedV2[0];
  const y = cost * normalizedV1[1] + sint * normalizedV2[1];
  const z = cost * normalizedV1[2] + sint * normalizedV2[2];
  return [x * r, y * r, z * r];
};
