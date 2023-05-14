import React, { FC } from 'react';

import { Card, CardHeader, Container, Heading } from '@chakra-ui/react';

import Title from '../../components/title';

interface IEducation {
  title: string;
  subtitle: string;
}
const Education: FC<IEducation> = ({ title, subtitle }: IEducation) => (
  <Container centerContent width="100vw" height="100vh">
    <Card>
      <CardHeader>
        <Heading>My Education</Heading>
      </CardHeader>
      <Title heading={title} />
      <Title heading={subtitle} />
    </Card>
  </Container>
);

export default Education;
