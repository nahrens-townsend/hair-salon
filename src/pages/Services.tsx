import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Flex,
  Divider,
} from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import CTAButton from '../components/CTAButton';
import { serviceCategories, bookingPolicy } from '../data/services';

export default function Services() {
  return (
    <Box>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1400&q=85"
        preheading="What We Offer"
        heading="Services"
        subheading="Every treatment, every price. No surprises — just exceptional results."
        height="65vh"
        overlayOpacity={0.5}
      />

      {/* Services grid */}
      <Box as="section" bg="warm.50" py={{ base: 20, md: 28 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <AnimatedSection mb={14}>
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="warm.400"
              mb={4}
            >
              Our Offerings
            </Text>
            <Heading
              fontFamily="heading"
              fontWeight="300"
              fontSize={{ base: '2.4rem', md: '3.4rem' }}
              color="warm.900"
              maxW="560px"
              lineHeight="1.12"
            >
              Priced clearly. Delivered beautifully.
            </Heading>
          </AnimatedSection>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={{ base: 6, md: 8 }}>
            {serviceCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.08} direction="up">
                <ServiceCard category={cat} />
              </AnimatedSection>
            ))}
          </SimpleGrid>

          <AnimatedSection mt={8}>
            <Box
              bg="warm.100"
              p={6}
              border="1px solid"
              borderColor="warm.200"
            >
              <Text
                fontFamily="body"
                fontSize="0.72rem"
                color="warm.500"
                letterSpacing="0.05em"
              >
                * All prices are starting prices and may vary depending on hair length, density, and complexity. A complimentary consultation is offered before any color service. Final pricing will be confirmed during your consultation.
              </Text>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Booking Policy */}
      <Box as="section" bg="white" py={{ base: 20, md: 28 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <AnimatedSection mb={14}>
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="warm.400"
              mb={4}
            >
              Policies
            </Text>
            <Heading
              fontFamily="heading"
              fontWeight="300"
              fontSize={{ base: '2.2rem', md: '3rem' }}
              color="warm.900"
              lineHeight="1.12"
            >
              Booking & Cancellation
            </Heading>
          </AnimatedSection>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 12 }}>
            {[
              {
                title: 'Cancellation Policy',
                body: bookingPolicy.cancellation,
              },
              {
                title: 'New Client Deposit',
                body: bookingPolicy.newClientDeposit,
              },
              {
                title: 'Late Arrivals',
                body: bookingPolicy.lateArrival,
              },
              {
                title: 'Color Consultations',
                body: bookingPolicy.consultations,
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <Box>
                  <Heading
                    fontFamily="heading"
                    fontWeight="400"
                    fontSize="1.4rem"
                    color="warm.900"
                    mb={3}
                  >
                    {item.title}
                  </Heading>
                  <Divider borderColor="warm.200" mb={4} />
                  <Text fontFamily="body" fontSize="0.88rem" color="warm.500" lineHeight="1.9">
                    {item.body}
                  </Text>
                </Box>
              </AnimatedSection>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box as="section" bg="warm.400" py={{ base: 16, md: 22 }}>
        <Container maxW="900px" px={{ base: 6, md: 10 }} textAlign="center">
          <AnimatedSection>
            <VStack spacing={5}>
              <Text
                fontFamily="body"
                fontSize="0.65rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                color="rgba(255,255,255,0.75)"
              >
                Ready to book?
              </Text>
              <Heading
                fontFamily="heading"
                fontWeight="300"
                fontSize={{ base: '2.2rem', md: '3.2rem' }}
                color="white"
                lineHeight="1.15"
              >
                Let's make an appointment.
              </Heading>
              <Flex gap={4} wrap="wrap" justify="center" pt={2}>
                <CTAButton to="/contact" variant="brand">
                  Contact Us
                </CTAButton>
              </Flex>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}
