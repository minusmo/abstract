import { motion } from 'framer-motion';
import React, { FC } from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Heading,
  Highlight,
  HighlightProps,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

function Tag(tagProps: HighlightProps) {
  return <Highlight {...tagProps} />;
}

function TechInterests() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Card variant="outline" padding={5}>
        <CardHeader>
          <Heading fontSize="lg">My Technical Interests</Heading>
        </CardHeader>
        <CardBody>
          <Wrap>
            <WrapItem>
              <Tag
                query="Computer Graphics"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  fontWeight: 600,
                  boxShadow: 'md',
                  bg: 'teal.100',
                }}
                children="Computer Graphics"
              />
            </WrapItem>
            <WrapItem>
              <Tag
                query="Neural Network"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'red.200',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
                children="Neural Network"
              />
            </WrapItem>
            <WrapItem>
              <Tag
                query="Resilent Services"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'yellow.300',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
                children="Resilent Services"
              />
            </WrapItem>
            <WrapItem>
              <Tag
                query="Algorithmic Solutions"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'green.300',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
                children="Algorithmic Solutions"
              />
            </WrapItem>
            <WrapItem>
              <Tag
                query="Distributed System"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'blue.300',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
                children="Distributed System"
              />
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </motion.div>
  );
}

function PersonalInterests() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
    >
      <Card>
        <CardHeader>
          <Heading fontSize="xl" padding={5}>
            My Personal Interests
          </Heading>
        </CardHeader>
        <CardBody>
          <Wrap spacing={5} alignItems="center" justify="center">
            <WrapItem>
              <Card
                variant="outline"
                width={['sm', 'md', 'lg', 'xl', '2xl']}
                height="100%"
              >
                <CardHeader>
                  <Heading as="h2" fontSize="xl">
                    Watching Movies
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src="/src/assets/titanic.png"
                    alt="Titanic"
                    borderRadius="lg"
                    boxSize={['sm', 'md', 'lg', 'xl', '2xl']}
                  />
                </CardBody>
                <CardFooter>
                  <Text verticalAlign="top" as="em" fontSize="md">
                    I'd like to watch movies! From the old one to the latest!
                  </Text>
                </CardFooter>
              </Card>
            </WrapItem>
            <WrapItem>
              <Card
                variant="outline"
                width={['sm', 'md', 'lg', 'xl', '2xl']}
                height="100%"
              >
                <CardHeader>
                  <Heading as="h2" fontSize="xl">
                    Listening to Musics
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    src="/src/assets/outoftheblue.png"
                    alt="Out Of The Blue"
                    borderRadius="lg"
                    boxSize={['sm', 'md', 'lg', 'xl', '2xl']}
                  />
                </CardBody>
                <CardFooter>
                  <Text verticalAlign="top" as="em" fontSize="md">
                    I'd love to listen musics! Across all genres.
                  </Text>
                </CardFooter>
              </Card>
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </motion.div>
  );
}

const Interests: FC = () => (
  <Center>
    <VStack spacing={5}>
      <TechInterests />
      <PersonalInterests />
    </VStack>
  </Center>
);

export default Interests;
