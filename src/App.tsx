import { motion } from 'framer-motion';
import { FC, useState } from 'react';

import { Box, Button, Flex, Image, Link, Text, VStack } from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';
import Greeting from './widgets/greeting';
import Education from './widgets/education';
import NavigationBar from './widgets/navigationBar';
import Interests from './widgets/interests';
import FeaturedCourses from './widgets/featuredCourses';
import SoftSkills from './widgets/softSkills';
import TechSkills from './widgets/techSkills';
import Projects from './widgets/projects';
import Contact from './widgets/contact';

const textFontSizes = [16, 18, 24, 30];

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <NavigationBar />
      <VStack>
        <Greeting />
        <Education />
        <Interests />
        <FeaturedCourses />
        <SoftSkills />
        <TechSkills />
        <Projects />
        <Contact />
      </VStack>
    </Box>
  );
};

export default App;
