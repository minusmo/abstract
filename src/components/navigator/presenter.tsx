import React, { FC, useState } from 'react';

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Button, IconButton, Link, VStack } from '@chakra-ui/react';

interface INavigatorPresenter {}
const NavigatorPresenter: FC<
  INavigatorPresenter
> = ({}: INavigatorPresenter) => {
  return (
    <Link href="#interests">
      <Button position={'fixed'} top={'95vh'} right={2} zIndex={100}>
        Read from My Interests
      </Button>
    </Link>
  );
};

export default NavigatorPresenter;
