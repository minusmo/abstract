import { useState } from 'react';
import * as Three from 'three';

import { useFrame, useThree, Vector3 } from '@react-three/fiber';

import { randomNVertices } from './utils/points';

const usePoints = () => {
  const geometry = new Three.BufferGeometry();
  const vertices = randomNVertices(20).map(
    (vertex) => new Three.Vector3(vertex[0], vertex[1], vertex[2])
  );
  const [points, setPoints] = useState<Vector3[]>(vertices);
  const camera = useThree((threeState) => threeState.camera);
  useFrame((threeState, delta, xrFrame) => {
    // update camera position and draw line from point to point
  });
  return { points };
};

export default usePoints;
