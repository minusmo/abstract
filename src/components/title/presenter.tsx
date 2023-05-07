import React, { FC } from 'react';

import { Heading } from '@chakra-ui/react';

interface ITitlePresenter {
  heading: string;
  tag: string;
}
const TitlePresenter: FC<ITitlePresenter> = ({
  heading,
  tag,
}: ITitlePresenter) => <Heading as={tag}>{heading}</Heading>;

export default TitlePresenter;
