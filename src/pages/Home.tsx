import { Box, Container, Flex, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';

const marqueeText = 'Balayage · Precision Cuts · Bridal Styling · Color Artistry · Extensions · Keratin ·';

const alternatingBlocks = [
  {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
    alt: 'Stylist performing a balayage color treatment at Lumière Hair Studio, Winnipeg',
    label: 'The Art of Color',
    heading: 'Winnipeg colour services crafted by hand',
    body: 'We believe that colour should feel lived-in, not labored. Our Winnipeg colorists blend, paint, and balance every shade by hand — creating results that grow out gracefully and turn heads effortlessly.',
    cta: { label: 'Explore Services', to: '/services' },
    reverse: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80',
    alt: 'Elegant salon interior at Lumière Hair Studio in Winnipeg with warm lighting',
    label: 'Our Studio',
    heading: 'A Winnipeg hair studio designed for calm',
    body: 'Step into an environment crafted for intention. Soft light, warm materials, unhurried appointments. At Lumière, the experience begins the moment you walk through the door.',
    cta: { label: 'About the Studio', to: '/about' },
    reverse: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&q=80',
    alt: 'Stylist working on a client\'s hair at Lumière Hair Studio',
    label: 'Meet the Team',
    heading: 'Six artists. One shared standard.',
    body: 'Our Winnipeg stylists are specialists, not generalists. Each brings a unique depth of expertise — whether it\'s balayage, bridal styling, precision cuts, or colour correction. Together, they form a team that consistently delivers.',
    cta: { label: 'Meet Our Stylists', to: '/team' },
    reverse: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80',
    alt: 'Beautiful bridal hair updo created at Lumière Hair Studio, Winnipeg',
    label: 'Bridal & Events',
    heading: 'Winnipeg bridal hair — your most important day, perfected.',
    body: 'We have been part of hundreds of Winnipeg weddings, and we understand the weight of those mornings. Ava and the Lumière team bring calm precision and years of bridal expertise to every appointment.',
    cta: { label: 'Contact Us', to: '/contact' },
    reverse: true,
  },
];

export default function Home() {
  return (
    <Box>
      <SEOHead
        title="Lumière Hair Studio | Premier Hair Salon in Winnipeg, MB"
        description="Lumière Hair Studio in Winnipeg, MB — expert balayage, precision cuts, bridal styling, colour correction & more. Where artistry meets intention. Book today."
        canonical="/"
      />

      {/* Hero */}
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=85"
        preheading="Winnipeg · Manitoba"
        heading={`Lumière\nHair Studio`}
        subheading="Where artistry meets intention. Premium hair services crafted for you — in the heart of Winnipeg."
        ctas={[
          { label: 'Our Services', to: '/services', variant: 'brand' },
          { label: 'Book Now', to: '/contact', variant: 'brandOutline' },
        ]}
        height="100vh"
        overlayOpacity={0.45}
        priority
      />

      {/* Marquee strip */}
      <Box
        as="div"
        aria-hidden="true"
        bg="warm.400"
        py={4}
        overflow="hidden"
        sx={{
          '@media (prefers-reduced-motion: no-preference)': {
            '& .marquee-track': {
              animation: 'marquee 30s linear infinite',
            },
          },
        }}
      >
        <Box
          className="marquee-track"
          display="flex"
          gap={0}
          css={{
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {[marqueeText, marqueeText].map((t, i) => (
            <Text
              key={i}
              fontFamily="body"
              fontSize="1rem"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="white"
              whiteSpace="nowrap"
              px={8}
            >
              {t}
            </Text>
          ))}
        </Box>
      </Box>

      {/* Alternating image + text blocks */}
      {alternatingBlocks.map((block, i) => (
        <Box
          key={block.label}
          as="section"
          bg={i % 2 === 0 ? 'warm.50' : 'white'}
          py={{ base: 16, md: 24 }}
        >
          <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
            <Flex
              direction={{ base: 'column', md: block.reverse ? 'row-reverse' : 'row' }}
              align="center"
              gap={{ base: 12, md: 16, lg: 24 }}
            >
              {/* Image */}
              <AnimatedSection flex={1} direction={block.reverse ? 'right' : 'left'}>
                <Box overflow="hidden" borderRadius="4px" position="relative">
                  <Box
                    as="img"
                    src={block.image}
                    alt={block.alt}
                    w="100%"
                    h={{ base: '340px', md: '520px' }}
                    objectFit="cover"
                    display="block"
                    loading="lazy"
                    transition="transform 0.8s ease"
                    _hover={{ transform: 'scale(1.03)' }}
                  />
                  {/* Decorative accent */}
                  <Box
                    position="absolute"
                    bottom={-4}
                    left={block.reverse ? 'auto' : -4}
                    right={block.reverse ? -4 : 'auto'}
                    w="80px"
                    h="80px"
                    border="2px solid"
                    borderColor="warm.300"
                    zIndex={-1}
                    aria-hidden="true"
                  />
                </Box>
              </AnimatedSection>

              {/* Text */}
              <AnimatedSection
                flex={1}
                maxW={{ md: '480px' }}
                direction={block.reverse ? 'left' : 'right'}
                delay={0.15}
              >
                <VStack align="flex-start" spacing={5}>
                  <Text
                    fontFamily="body"
                    fontSize="1rem"
                    letterSpacing="0.25em"
                    textTransform="uppercase"
                    color="warm.400"
                  >
                    {block.label}
                  </Text>
                  <Heading
                    as="h2"
                    fontFamily="heading"
                    fontWeight="300"
                    fontSize={{ base: '2.2rem', md: '3rem' }}
                    color="warm.900"
                    lineHeight="1.15"
                  >
                    {block.heading}
                  </Heading>
                  <Text fontFamily="body" fontSize="1rem" color="warm.500" lineHeight="1.9">
                    {block.body}
                  </Text>
                  <CTAButton to={block.cta.to} variant="brandOutline" mt={2}>
                    {block.cta.label}
                  </CTAButton>
                </VStack>
              </AnimatedSection>
            </Flex>
          </Container>
        </Box>
      ))}

      {/* Stats strip */}
      <Box as="section" bg="warm.900" py={{ base: 14, md: 20 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <AnimatedSection>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 8, md: 0 }}>
              {[
                { number: '14+', label: 'Years of artistry' },
                { number: '6', label: 'Specialist stylists' },
                { number: '5,000+', label: 'Happy clients' },
                { number: '∞', label: 'Good hair days' },
              ].map((stat, i) => (
                <Box
                  key={stat.label}
                  textAlign="center"
                  px={{ md: 8 }}
                  borderRight={{ md: i < 3 ? '1px solid' : 'none' }}
                  borderColor="warm.500"
                >
                  <Text
                    fontFamily="heading"
                    fontSize={{ base: '3rem', md: '4rem' }}
                    fontWeight="300"
                    color="white"
                    lineHeight={1}
                    mb={2}
                  >
                    {stat.number}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="1rem"
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

      {/* Final CTA banner */}
      <Box
        as="section"
        position="relative"
        py={{ base: 20, md: 32 }}
        overflow="hidden"
      >
        <Box
          as="img"
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1400&q=80"
          alt=""
          aria-hidden="true"
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          objectFit="cover"
          loading="lazy"
        />
        <Box position="absolute" inset={0} bg="rgba(45,37,32,0.6)" aria-hidden="true" />
        <Container maxW="900px" px={{ base: 6, md: 10 }} position="relative" zIndex={1} textAlign="center">
          <AnimatedSection>
            <VStack spacing={6}>
              <Text
                fontFamily="body"
                fontSize="1rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                color="warm.300"
              >
                Ready when you are
              </Text>
              <Heading
                as="h2"
                fontFamily="heading"
                fontWeight="300"
                fontSize={{ base: '2.8rem', md: '4.5rem' }}
                color="white"
                lineHeight="1.1"
              >
                Book your Winnipeg hair appointment today.
              </Heading>
              <CTAButton to="/contact" variant="brand" mt={4} px={12} py={7}>
                Book Your Appointment
              </CTAButton>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}
