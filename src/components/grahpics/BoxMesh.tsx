import React, { useEffect, useRef, useState } from 'react';
import { Color } from 'three';

import { useFrame, Vector3 } from '@react-three/fiber';

import { rgbToHex } from './utils/points';

export interface IBox {
  position: Vector3;
  boxColor: number[];
  rotationDirection: number;
  index: number;
}
function BoxMesh({ position, boxColor, rotationDirection, index }: IBox) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((threeState, delta, xrFrame) => {
    // update camera position and draw line from point to point
    ref.current.rotation.x += 0.01 * rotationDirection;
    ref.current.rotation.y += 0.02 * rotationDirection;
  });
  const [isRevealed, setIsRevealed] = useState(false);
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        transparent={!isRevealed}
        color={rgbToHex(boxColor[0], boxColor[1], boxColor[2])}
      />
    </mesh>
  );
}

export default BoxMesh;
