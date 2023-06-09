import React, { useRef, useState } from 'react';

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
  const [isRevealed, setIsRevealed] = useState(false);
  useFrame((threeState, delta, xrFrame) => {
    // update camera position and draw line from point to point
    ref.current.rotation.x += 0.01 * rotationDirection;
    ref.current.rotation.y += 0.02 * rotationDirection;
  });
  setTimeout(() => {
    setIsRevealed(true);
  }, index * 1000);

  return (
    <mesh ref={ref} position={position} visible={isRevealed}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        roughness={0.2}
        metalness={0.5}
        color={rgbToHex(boxColor[0], boxColor[1], boxColor[2])}
      />
    </mesh>
  );
}

export default BoxMesh;
