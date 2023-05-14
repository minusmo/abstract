import { motion } from 'framer-motion';
import React from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import eloImg from '../../assets/outoftheblue.png';
import titanicImg from '../../assets/titanic.png';

function PersonalInterests() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
    >
      <Card>
        <CardHeader textAlign="center">
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
                    src={titanicImg}
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
                    src={eloImg}
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

export default PersonalInterests;
