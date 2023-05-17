import React, { FC, useEffect, useState } from 'react';

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { IconButton, Link, VStack } from '@chakra-ui/react';

interface INavigatorPresenter {}

const NavigatorPresenter: FC<
  INavigatorPresenter
> = ({}: INavigatorPresenter) => {
  const [currentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);
  return (
    <VStack position="fixed" right={2} top="50vh" zIndex={100}>
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
            if (currentSection === 4) return;
            setCurrentSection(currentSection + 1);
          }}
        />
      </Link>
    </VStack>
  );
};

export default NavigatorPresenter;
