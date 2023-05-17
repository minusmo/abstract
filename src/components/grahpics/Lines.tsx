import React, { useEffect, useState } from 'react';
import { Vector3 } from 'three';

import { QuadraticBezierLine } from '@react-three/drei';

interface ILines {
  points: number[][];
}

function Lines({ points }: ILines) {
  const nOfPoints = points.length;
  const [currentPoints, setCurrentPoints] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPoints === nOfPoints) return;
      setCurrentPoints(currentPoints + 1);
    }, 1500);
    return () => clearInterval(interval);
  });
  return (
    <>
      {points.slice(0, currentPoints + 1).map((point, index, thisArray) => {
        if (index === thisArray.length - 1) return <></>;
        const lineProp = {
          start: new Vector3(point[0], point[1], point[2]),
          end: new Vector3(
            thisArray[index + 1][0],
            thisArray[index + 1][1],
            thisArray[index + 1][2]
          ),
        };
        return (
          <QuadraticBezierLine
            {...lineProp}
            lineWidth={3}
            dashed
            color="orange"
          />
        );
      })}
    </>
  );
}

export default Lines;
