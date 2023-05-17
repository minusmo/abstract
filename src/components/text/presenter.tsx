import React, { FC } from 'react';

import { Text } from '@chakra-ui/react';

interface ITextPresenter {
  content: string;
}

const TextPresenter: FC<ITextPresenter> = ({ content }: ITextPresenter) => (
  <Text>{content}</Text>
);

export default TextPresenter;
