import React, { FC, useEffect, useState } from 'react';

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { IconButton, Link, VStack } from '@chakra-ui/react';

const NavigatorPresenter: FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <VStack position="fixed" right={'40px'} top="50vh" zIndex={100}>
      <Link href={`#section-${currentSection}`}>
        <IconButton
          aria-label="navigator-up"
          icon={<TriangleUpIcon />}
          onClick={() => {
            if (currentSection === 0) return;
            setCurrentSection(currentSection - 1);
          }}
        />
      </Link>
      <Link href={`#section-${currentSection}`}>
        <IconButton
          aria-label="navigator-down"
          icon={<TriangleDownIcon />}
          onClick={() => {
            if (currentSection === 5) return;
            setCurrentSection(currentSection + 1);
          }}
        />
      </Link>
    </VStack>
  );
};

export default NavigatorPresenter;
