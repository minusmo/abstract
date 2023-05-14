import { motion } from 'framer-motion';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface IAnimatingCard {
  project: any;
  index: number;
}
function AnimatingCard({ project, index }: IAnimatingCard) {
  const animationProps = {
    initial: {
      y: 50,
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 0.5,
      delay: 0.5 * index,
      type: 'tween',
      stiffness: 200,
    },
  };
  return (
    <motion.div {...animationProps}>
      <Card
        w={['sm', 'md', 'lg', 'xl', '2xl', '4xl']}
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
    </motion.div>
  );
}

export default AnimatingCard;
