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
      title: 'My Music DB',
      description: 'My own favorite music archive',
      link: 'https://github.com/minusmo/My-Music-DB',
      demo: 'https://minusmo.github.io/My-Music-DB/',
    },
    {
      title: 'YouTube Quick Search Extension for Chrome',
      description: 'Chrome extension to make shortcut for youtube search',
      link: 'https://github.com/minusmo/YouTube-Quick-Search-Chrome-Extension',
      demo: '',
    },
    {
      title: 'Anomaly Detection',
      description: 'ML model to predict anomalies',
      link: 'https://github.com/minusmo/Anomaly_Detection',
      demo: '',
    },
    {
      title: 'Mobile Topster',
      description: 'own favorite music archive',
      link: 'https://github.com/minusmo/mobile-topster',
      demo: 'https://minusmo.github.io/mobile-topster/',
    },
    {
      title: 'Seoul Ro',
      description: 'Real-Time schedule complexity solver',
      link: 'https://github.com/SeoulRo/SeoulRo',
      demo: '',
    },
    {
      title: 'Carbon Hero',
      description: 'Web game for climate change education',
      link: 'https://github.com/GDSC-CAU/Carbon-Hero',
      demo: 'https://carbon-hero.vercel.app/',
    },
    {
      title: 'NHN Toast Notification Service Custom Connector',
      description: 'Cloud API orchestration for BFF',
      link: 'https://github.com/minusmo/nhn-toast-notification-service-custom-connector',
      demo: '',
    },
  ];

  return (
    <Box>
      <NavigationBar />
      <VStack spacing={100}>
        <Greeting />
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
