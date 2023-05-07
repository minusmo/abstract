import React, { FC } from 'react';

import { Heading } from '@chakra-ui/react';

interface ITextPresenter {
  content: string;
}
const TextPresenter: FC<ITextPresenter> = ({ content }: ITextPresenter) => (
  <Heading>{content}</Heading>
);

export default TextPresenter;
