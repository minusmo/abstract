import { useMemo, useState } from 'react';

import {
  randomRotationDirection,
  randomSphereGeometryVertices,
} from './utils/points';

const usePoints = () => {
  const RADIUS = 10;
  const ranVs = useMemo(
    () => randomSphereGeometryVertices(100, RADIUS),
    [RADIUS]
  );
  const ranColors = useMemo(
    () =>
      new Array(ranVs.length)
        .fill([255, 255, 255])
        .map((color: number[]) =>
          color.map((c) => Math.floor(c * Math.random()))
        ),
    []
  );
  const ranRotationDirections = useMemo(
    () =>
      new Array(ranVs.length).fill(1).map((dir) => randomRotationDirection()),
    [ranVs]
  );
  const [points, setPoints] = useState<number[][]>(ranVs);
  const [colors, setColors] = useState(ranColors);
  const [rotationDirections, setRotationDirections] = useState(
    ranRotationDirections
  );
  return { points, colors, rotationDirections };
};

export default usePoints;
