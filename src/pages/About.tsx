import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import ImageGrid from '../components/ImageGrid';
import CTAButton from '../components/CTAButton';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80', alt: 'Color service in progress at Lumière' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80', alt: 'Warm salon interior at Lumière' },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80', alt: 'Stylist styling a client\'s hair' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80', alt: 'Finished balayage result' },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80', alt: 'Haircut at a professional salon' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=700&q=80', alt: 'Bridal hair updo' },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80', alt: 'Hair styling tools and products' },
  { src: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=700&q=80', alt: 'Long flowing hair result' },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=700&q=80', alt: 'Salon interior with mirrors' },
];

const values = [
  {
    label: 'Craftsmanship',
    body: 'Every cut, color, and style is treated as a deliberate act of craft — not a routine task. We take the time to understand your hair, your life, and your vision.',
  },
  {
    label: 'Individuality',
    body: 'There is no universal standard of beautiful. Our stylists work with your unique features, texture, and personality — not against them.',
  },
  {
    label: 'Unhurried Care',
    body: 'We don\'t rush appointments. We don\'t overbook chairs. Your time in our studio is yours, and we treat it accordingly.',
  },
];

export default function About() {
  return (
    <Box>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=85"
        preheading="Our Story"
        heading="Made with intention."
        height="72vh"
        overlayOpacity={0.5}
      />

      {/* Welcome section */}
      <Box as="section" bg="warm.50" py={{ base: 20, md: 28 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: 14, lg: 24 }}
            align="flex-start"
          >
            {/* Intro text */}
            <AnimatedSection flex={1.2} maxW={{ lg: '600px' }}>
              <VStack align="flex-start" spacing={6}>
                <Text
                  fontFamily="body"
                  fontSize="0.65rem"
                  letterSpacing="0.25em"
                  textTransform="uppercase"
                  color="warm.400"
                >
                  Welcome to Lumière
                </Text>
                <Heading
                  fontFamily="heading"
                  fontWeight="300"
                  fontSize={{ base: '2.4rem', md: '3.4rem' }}
                  color="warm.900"
                  lineHeight="1.12"
                >
                  A studio built around the belief that hair is personal.
                </Heading>
                <Text fontFamily="body" fontSize="0.95rem" color="warm.500" lineHeight="1.95">
                  Lumière was born from a simple conviction: that a hair appointment should feel like a pause — a moment of genuine care in an otherwise relentless world. Sophia Laurent founded this studio in 2012 after years of training and working abroad, driven by a desire to bring a European sensibility for craft and service to her home city of Winnipeg.
                </Text>
                <Text fontFamily="body" fontSize="0.95rem" color="warm.500" lineHeight="1.95">
                  In the years since, Lumière has grown into a team of six deeply skilled specialists who share a single philosophy: that the most beautiful results come from truly listening. To your hair. To your life. To what you actually need.
                </Text>
                <CTAButton to="/team" variant="brand" mt={2}>
                  Meet Our Team
                </CTAButton>
              </VStack>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection flex={1} delay={0.2} direction="right">
              <VStack align="stretch" spacing={0} divider={<Divider borderColor="warm.100" />}>
                {values.map((v) => (
                  <Box key={v.label} py={8}>
                    <Heading
                      fontFamily="heading"
                      fontWeight="400"
                      fontSize="1.4rem"
                      color="warm.900"
                      mb={3}
                    >
                      {v.label}
                    </Heading>
                    <Text fontFamily="body" fontSize="0.88rem" color="warm.500" lineHeight="1.85">
                      {v.body}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </AnimatedSection>
          </Flex>
        </Container>
      </Box>

      {/* Experience strip */}
      <Box as="section" bg="warm.900" py={{ base: 14, md: 18 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <AnimatedSection>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 8, md: 0 }}>
              {[
                { number: '10+', label: 'Years serving Winnipeg' },
                { number: 'Premium', label: 'Product lines only' },
                { number: '100%', label: 'Personalized consultations' },
              ].map((stat, i) => (
                <Box
                  key={stat.label}
                  textAlign="center"
                  px={{ md: 10 }}
                  borderRight={{ md: i < 2 ? '1px solid' : 'none' }}
                  borderColor="warm.500"
                >
                  <Text
                    fontFamily="heading"
                    fontSize={{ base: '2.4rem', md: '3rem' }}
                    fontWeight="300"
                    color="white"
                    mb={1}
                  >
                    {stat.number}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="0.72rem"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    color="warm.300"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Gallery */}
      <Box as="section" bg="white" py={{ base: 20, md: 28 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <AnimatedSection mb={14} textAlign="center">
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="warm.400"
              mb={4}
            >
              The Studio in Images
            </Text>
            <Heading
              fontFamily="heading"
              fontWeight="300"
              fontSize={{ base: '2.2rem', md: '3rem' }}
              color="warm.900"
            >
              Craftsmanship, captured.
            </Heading>
          </AnimatedSection>
          <ImageGrid images={galleryImages} columns={[1, 2, 3]} gap={4} />
        </Container>
      </Box>

      {/* CTA */}
      <Box as="section" bg="warm.300" py={{ base: 16, md: 20 }}>
        <Container maxW="900px" px={{ base: 6, md: 10 }} textAlign="center">
          <AnimatedSection>
            <VStack spacing={5}>
              <Heading
                fontFamily="heading"
                fontWeight="300"
                fontSize={{ base: '2.2rem', md: '3.2rem' }}
                color="warm.900"
              >
                Ready to visit us?
              </Heading>
              <Text fontFamily="body" fontSize="0.95rem" color="warm.500" lineHeight="1.9">
                We'd love to meet you. Come in for a consultation or book your first appointment today.
              </Text>
              <Flex gap={4} wrap="wrap" justify="center" pt={2}>
                <CTAButton to="/contact" variant="brand">Book an Appointment</CTAButton>
                <CTAButton to="/services" variant="brandOutline">View Services</CTAButton>
              </Flex>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}
