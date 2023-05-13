import { motion } from 'framer-motion';
import React, { FC } from 'react';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

interface IProjects {
  projects: any[];
}
const Projects: FC<IProjects> = ({ projects }: IProjects) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
    viewport={{ once: false }}
  >
    <Center width="100vw" height="100vh" verticalAlign="center">
      <VStack spacing={30}>
        <Heading>Projects I've been through</Heading>
        <Wrap
          spacing={3}
          flexDirection="row"
          alignItems="center"
          justify="center"
          overflow="none"
        >
          {projects.map((project, index) => (
            <WrapItem key={`wid${index}`}>
              <Card
                w="100%"
                boxShadow="xl"
                borderWidth={1}
                borderColor="green.300"
              >
                <CardHeader>
                  <Heading size="md">{project.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{project.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button>
                    <Link href={project.link}>See Details</Link>
                  </Button>
                  {project.demo.length > 0 ? (
                    <Button marginLeft={2}>
                      <Link href={project.demo}>See Demo</Link>
                    </Button>
                  ) : (
                    <></>
                  )}
                </CardFooter>
              </Card>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Center>
  </motion.div>
);

export default Projects;
