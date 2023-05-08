import React, { FC, useRef, useState } from 'react';
import * as Three from 'three';

import { Container } from '@chakra-ui/react';
import { Point, Points, Wireframe } from '@react-three/drei';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber';

interface IGraphicsPresenter {
  points: number[][];
}

function Box(props: {
  vector3s: Vector3[];
  callbackfn: (vertex) => JSX.Element;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  // const camera = useThree((threeState) => threeState.camera);
  useFrame((threeState, delta, xrFrame) => {
    // update camera position and draw line from point to point
    ref.current.rotation.x += 0.01;
  });
  return (
    <mesh ref={ref}>
      <Points limit={50} range={1000}>
        {props.vector3s.map(props.callbackfn)}
      </Points>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const GrahpicsPresenter: FC<IGraphicsPresenter> = ({
  points,
}: IGraphicsPresenter) => {
  const geometry = new Three.BufferGeometry();
  const vertices = points.map(
    (vertex) => new Three.Vector3(vertex[0], vertex[1], vertex[2])
  );
  return (
    <Container centerContent width="100vw" height="100vh">
      <Canvas
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      >
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box
          vector3s={vertices}
          callbackfn={(vertex) => <Point position={vertex} color="red" />}
        />
      </Canvas>
    </Container>
  );
};

export default GrahpicsPresenter;
