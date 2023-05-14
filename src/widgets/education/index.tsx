import React, { FC } from 'react';

import { CardHeader, Container, Heading, Card } from '@chakra-ui/react';

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
      <Title tag="h1" heading={title} />
      <Title tag="h2" heading={subtitle} />
    </Card>
  </Container>
);

export default Education;
