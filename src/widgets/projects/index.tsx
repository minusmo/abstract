import React, { FC } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

interface IProjects {
  projects: any[];
}
const Projects: FC<IProjects> = ({ projects }: IProjects) => (
  <Container>
    <Wrap>
      {projects.map((project) => {
        return (
          <WrapItem>
            <Card>
              <CardHeader>
                <Heading size="md">{project['title']}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{project['description']}</Text>
              </CardBody>
              <CardFooter>
                <Button>{project['link']}</Button>
              </CardFooter>
            </Card>
          </WrapItem>
        );
      })}
    </Wrap>
  </Container>
);

export default Projects;
