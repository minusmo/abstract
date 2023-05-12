import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import { Box, Button, Flex, Image, Link, Text, VStack } from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';
import Contact from './widgets/contact';
import Education from './widgets/education';
import FeaturedCourses from './widgets/featuredCourses';
import Greeting from './widgets/greeting';
import Interests from './widgets/interests';
import NavigationBar from './widgets/navigationBar';
import Projects from './widgets/projects';
import SoftSkills from './widgets/softSkills';
import TechSkills from './widgets/techSkills';
import Skills from './widgets/skills';

const textFontSizes = [16, 18, 24, 30];

const App: FC = () => {
  const projects = [
    {
      title: 'my music db',
      description: 'own favorite music archive',
      link: '',
    },
  ];

  return (
    <Box>
      <NavigationBar />
      <VStack>
        <Greeting />
        {/*<Education*/}
        {/*  title="Chung-Ang Univ"*/}
        {/*  subtitle="Physics(major), Cyber Security(minor)"*/}
        {/*/>*/}
        <Interests />
        <FeaturedCourses />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </VStack>
    </Box>
  );
};

export default App;
