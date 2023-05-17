import React, { FC } from 'react';
import * as Three from 'three';

import { Box } from '@chakra-ui/react';
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { BOUND } from './utils/points';
import BoxMesh from './BoxMesh';
import Lines from './Lines';
import Navigator from '../navigator';

interface IGraphicsPresenter {
  points: number[][];
  colors: number[][];
  rotationDirections: number[];
  augmentedPoints: number[][];
}

const GrahpicsPresenter: FC<IGraphicsPresenter> = ({
  points,
  colors,
  rotationDirections,
  augmentedPoints,
}: IGraphicsPresenter) => {
  const vertices = points.map(
    (vertex) => new Three.Vector3(vertex[0], vertex[1], vertex[2])
  );
  const nearDistance = BOUND / 5;
  const farDistance = BOUND;
  return (
    <Box w="100vw" h="100vh" id={'section-0'}>
      <Canvas
        dpr={window.devicePixelRatio}
        gl={{ antialias: false }}
        camera={{
          position: [farDistance / 3, farDistance / 3, farDistance / 3],
          near: nearDistance,
          far: farDistance,
        }}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[BOUND, BOUND, BOUND]} angle={0.15} penumbra={1} />
        <pointLight position={[-50, -50, -50]} />
        <Text anchorX={'center'} anchorY={'middle'} color={'skyblue'}>
          Connect Each Other
        </Text>
        {vertices.map((vertex, index) => (
          <BoxMesh
            position={vertex}
            boxColor={colors[index]}
            rotationDirection={rotationDirections[index]}
            index={index}
          />
        ))}
        <Lines points={augmentedPoints} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      <Navigator />
    </Box>
  );
};

export default GrahpicsPresenter;
