import { motion } from 'framer-motion';
import React, { FC } from 'react';

import {
  Card,
  CardBody,
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
      <Card variant="outline" width="100%">
        <CardHeader>
          <Heading>My Technical Interests</Heading>
        </CardHeader>
        <CardBody>
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
          <Tag
            query="Real Challenges"
            styles={{
              px: '2',
              py: '2',
              rounded: 'full',
              bg: 'green.300',
              fontWeight: 600,
              boxShadow: 'md',
            }}
            children="Real Challenges"
          />
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
          <Heading>My Personal Interests</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} spacing={5}>
            <Card variant="outline" width="40vw">
              <CardHeader>
                <Heading as="h2">Watching Movies</Heading>
              </CardHeader>
              <CardBody>
                <Wrap>
                  <WrapItem>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      boxSize="lg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Text verticalAlign="top" as="em">
                      I'd like to watch movies! From the old one to the latest!
                    </Text>
                  </WrapItem>
                </Wrap>
              </CardBody>
            </Card>
            <Card variant="outline" width="40vw">
              <CardHeader>
                <Heading as="h2">Listening to Musics</Heading>
              </CardHeader>
              <CardBody>
                <Wrap>
                  <WrapItem>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      boxSize="lg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Text verticalAlign="top" as="em">
                      I'd love to listen musics! Across all genres.
                    </Text>
                  </WrapItem>
                </Wrap>
              </CardBody>
            </Card>
          </SimpleGrid>
        </CardBody>
      </Card>
    </motion.div>
  );
}

const Interests: FC = () => (
  <Center w="100vw" h="100vh">
    <SimpleGrid columns={1} spacing={10}>
      <TechInterests />
      <PersonalInterests />
    </SimpleGrid>
  </Center>
);

export default Interests;
