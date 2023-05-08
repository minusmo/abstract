import { useState } from 'react';

import { randomNVertices } from './utils/points';

const usePoints = () => {
  const [points, setPoints] = useState(randomNVertices(10));
  return { points };
};

export default usePoints;
