import React, { FC } from 'react';

import { Container } from '@chakra-ui/react';
import Title from '../../components/title';

interface IEducation {
  title: string;
  subtitle: string;
}
const Education: FC<IEducation> = ({ title, subtitle }: IEducation) => {
  return (
    <Container centerContent width={'100vw'} height={'100vh'}>
      <Title tag={'h1'} heading={title} />
      <Title tag={'h2'} heading={subtitle} />
    </Container>
  );
};

export default Education;
