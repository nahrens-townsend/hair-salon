import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';

export default function OurTeam() {
  return (
    <Box>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1400&q=85"
        preheading="The People Behind Lumière"
        heading="Our Team"
        subheading="Six specialists. One shared commitment to craft, care, and exceptional results."
        height="70vh"
        overlayOpacity={0.52}
      />

      {/* Team intro */}
      <Box as="section" bg="warm.50" py={{ base: 18, md: 24 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <AnimatedSection mb={16} maxW="680px">
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="warm.400"
              mb={4}
            >
              The Team
            </Text>
            <Heading
              fontFamily="heading"
              fontWeight="300"
              fontSize={{ base: '2.4rem', md: '3.4rem' }}
              color="warm.900"
              lineHeight="1.12"
              mb={5}
            >
              Specialists, not generalists.
            </Heading>
            <Text fontFamily="body" fontSize="0.95rem" color="warm.500" lineHeight="1.95">
              Every stylist at Lumière has a deep specialty — whether that's lived-in color, precision cutting, men's grooming, bridal styling, or dimensional highlights. We hire slowly, develop continuously, and build a culture where expertise is respected and curiosity is constant.
            </Text>
          </AnimatedSection>

          {/* Team grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 8, md: 10 }}>
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1} direction="up">
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Culture note */}
      <Box as="section" bg="warm.900" py={{ base: 16, md: 20 }}>
        <Container maxW="900px" px={{ base: 6, md: 10 }} textAlign="center">
          <AnimatedSection>
            <VStack spacing={5}>
              <Text
                fontFamily="heading"
                fontStyle="italic"
                fontSize={{ base: '1.6rem', md: '2.2rem' }}
                fontWeight="300"
                color="white"
                lineHeight="1.4"
              >
                "We built Lumière to be the kind of place where both our clients and our team can truly thrive."
              </Text>
              <Text
                fontFamily="body"
                fontSize="0.72rem"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="warm.300"
                mt={2}
              >
                — Sophia Laurent, Founder
              </Text>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}
