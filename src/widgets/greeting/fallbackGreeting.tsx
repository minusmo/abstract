import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { Center, Heading, Text, VStack } from '@chakra-ui/react';

interface IAnimatingChar {
  char: string;
  index: number;
}
function AnimatingChar({ char, index }: IAnimatingChar) {
  const animationProps = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 1,
      delay: 0.5 * index,
      ease: 'linear',
    },
  };
  return (
    <motion.div style={{ display: 'inline' }} {...animationProps}>
      <Text display="inline">{char}</Text>
    </motion.div>
  );
}
const FallbackGreeting: FC = () => {
  const greeting = 'Hi There!';
  const message = "I'm HoJoon Eum, Software Engineer!";
  return (
    <Center padding={20} textAlign={'center'}>
      <VStack>
        <Heading as="h1" fontSize={['lg', 'xl', '2xl', '4xl']}>
          {Array.from(greeting).map((char, index) => (
            <AnimatingChar char={char} index={index} />
          ))}
        </Heading>
        <Heading as="h1" fontSize={['lg', 'xl', '2xl', '4xl']}>
          {Array.from(message).map((char, index) => (
            <AnimatingChar char={char} index={greeting.length + index} />
          ))}
        </Heading>
      </VStack>
    </Center>
  );
};
export default FallbackGreeting;
