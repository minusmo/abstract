import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { Center, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import AnimatingCard from './AnimatingCard';

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
    <Center padding={5} id={'section-3'}>
      <VStack spacing={30}>
        <Heading as={'h2'} fontSize={'2xl'} padding={10}>
          Projects I've been through
        </Heading>
        <Wrap
          spacing={3}
          flexDirection="row"
          alignItems="center"
          justify="center"
          overflow="none"
        >
          {projects.map((project, index) => (
            <WrapItem key={`wid${index}`}>
              <AnimatingCard project={project} index={index} />
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Center>
  </motion.div>
);

export default Projects;
