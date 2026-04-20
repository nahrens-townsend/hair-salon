import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Heading, Text, Container } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TeamMemberProfile from './pages/TeamMemberProfile';
import CTAButton from './components/CTAButton';

function NotFound() {
  return (
    <Box minH="80vh" display="flex" alignItems="center" justifyContent="center" bg="warm.50">
      <Container maxW="600px" textAlign="center" py={20}>
        <Text
          fontFamily="body"
          fontSize="1rem"
          letterSpacing="0.25em"
          textTransform="uppercase"
          color="warm.400"
          mb={4}
        >
          404
        </Text>
        <Heading
          fontFamily="heading"
          fontWeight="300"
          fontSize="3.5rem"
          color="warm.900"
          mb={5}
        >
          Page not found.
        </Heading>
        <Text fontFamily="body" fontSize="1rem" color="warm.500" mb={8} lineHeight="1.9">
          The page you're looking for doesn't exist. Perhaps you'd like to head back home?
        </Text>
        <CTAButton to="/" variant="brand">Return Home</CTAButton>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="team/:memberId" element={<TeamMemberProfile />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
