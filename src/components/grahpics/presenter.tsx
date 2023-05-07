import React, { FC } from 'react';

import { Point, Points, Wireframe } from '@react-three/drei';
import { Canvas, Vector3 } from '@react-three/fiber';

interface IGraphicsPresenter {
  points: Array<Vector3>;
}
const GrahpicsPresenter: FC<IGraphicsPresenter> = ({
  points,
}: IGraphicsPresenter) => (
  <Canvas
    gl={{ antialias: false }}
    camera={{ position: [0, 0, 15], near: 5, far: 20 }}
  >
    <mesh>
      <Points limit={50} range={1000}>
        {points.map((point) => (
          <Point position={point} color="red" />
        ))}
      </Points>
      <Wireframe />
    </mesh>
  </Canvas>
);

export default GrahpicsPresenter;
