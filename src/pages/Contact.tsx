import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Divider,
  useToast,
  Flex,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import CTAButton from '../components/CTAButton';
import SEOHead from '../components/SEOHead';

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9:00 AM – 7:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 7:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 7:00 PM' },
  { day: 'Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
];

export default function Contact() {
  const toast = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: 'Please fill in all required fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
      toast({
        title: 'Message sent!',
        description: "Thank you — we'll be in touch within 24 hours.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }, 1200);
  };

  return (
    <Box>
      <SEOHead
        title="Book an Appointment | Lumière Hair Studio Winnipeg"
        description="Contact Lumière Hair Studio in Winnipeg to book your appointment. Located at 67 Alenbrook Bay, Winnipeg, MB. Call (204) 555-0192 or send us a message."
        canonical="/contact"
      />
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1400&q=85"
        preheading="Get in Touch"
        heading="Contact"
        subheading="We'd love to hear from you. Reach out to book, ask a question, or just say hello."
        height="60vh"
        overlayOpacity={0.52}
      />

      {/* Contact content */}
      <Box as="section" bg="warm.50" py={{ base: 20, md: 28 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 14, lg: 20 }}>

            {/* Left: info */}
            <AnimatedSection direction="left">
              <VStack align="flex-start" spacing={10}>
                {/* Salon info */}
                <Box>
                  <Text
                    fontFamily="body"
                    fontSize="1rem"
                    letterSpacing="0.25em"
                    textTransform="uppercase"
                    color="warm.400"
                    mb={5}
                  >
                    Studio Details
                  </Text>
                  <Heading
                    fontFamily="heading"
                    fontWeight="300"
                    fontSize={{ base: '2.2rem', md: '2.8rem' }}
                    color="warm.900"
                    mb={8}
                    lineHeight="1.12"
                  >
                    Lumière Hair Studio
                  </Heading>
                  <VStack align="flex-start" spacing={5} divider={<Divider borderColor="warm.100" />}>
                    <Box w="full">
                      <Text
                        fontFamily="body"
                        fontSize="1rem"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="warm.400"
                        mb={1.5}
                      >
                        Address
                      </Text>
                      <Text fontFamily="body" fontSize="1rem" color="warm.900">
                        67 Alenbrook Bay
                      </Text>
                      <Text fontFamily="body" fontSize="1rem" color="warm.900">
                        Winnipeg, Manitoba R3X 1Y2
                      </Text>
                    </Box>
                    <Box w="full">
                      <Text
                        fontFamily="body"
                        fontSize="1rem"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="warm.400"
                        mb={1.5}
                      >
                        Phone
                      </Text>
                      <Link
                        href="tel:+12045550192"
                        fontFamily="body"
                        fontSize="1rem"
                        color="warm.900"
                        _hover={{ color: 'warm.400' }}
                      >
                        (204) 555-0192
                      </Link>
                    </Box>
                    <Box w="full">
                      <Text
                        fontFamily="body"
                        fontSize="1rem"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="warm.400"
                        mb={1.5}
                      >
                        Email
                      </Text>
                      <Link
                        href="mailto:hello@lumierehair.ca"
                        fontFamily="body"
                        fontSize="1rem"
                        color="warm.900"
                        _hover={{ color: 'warm.400' }}
                      >
                        hello@lumierehair.ca
                      </Link>
                    </Box>
                    <Box w="full">
                      <Text
                        fontFamily="body"
                        fontSize="1rem"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="warm.400"
                        mb={3}
                      >
                        Follow Us
                      </Text>
                      <HStack spacing={5}>
                         <Link
                           href="https://instagram.com/lumierehair"
                           isExternal
                           fontFamily="body"
                           fontSize="1rem"
                           color="warm.900"
                           _hover={{ color: 'warm.400' }}
                           aria-label="Lumière on Instagram"
                         >
                           @lumierehair
                         </Link>
                         <Link
                           href="https://facebook.com/lumierehairstudio"
                           isExternal
                           fontFamily="body"
                           fontSize="1rem"
                          color="warm.900"
                          _hover={{ color: 'warm.400' }}
                          aria-label="Lumière on Facebook"
                        >
                          /lumierehairstudio
                        </Link>
                      </HStack>
                    </Box>
                  </VStack>
                </Box>

                {/* Hours */}
                <Box w="full">
                  <Text
                    fontFamily="body"
                    fontSize="1rem"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color="warm.400"
                    mb={5}
                  >
                    Hours
                  </Text>
                  <VStack align="stretch" spacing={0} divider={<Divider borderColor="warm.100" />}>
                    {hours.map((h) => (
                      <Flex
                        key={h.day}
                        justify="space-between"
                        py={3}
                        align="center"
                      >
                        <Text
                           fontFamily="body"
                           fontSize="1rem"
                           color={h.time === 'Closed' ? 'warm.200' : 'warm.900'}
                           fontWeight={h.time === 'Closed' ? '400' : '400'}
                         >
                           {h.day}
                         </Text>
                         <Text
                           fontFamily="body"
                           fontSize="1rem"
                           color={h.time === 'Closed' ? 'warm.200' : 'warm.500'}
                        >
                          {h.time}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection direction="right" delay={0.15}>
              <Box
                as="form"
                onSubmit={handleSubmit}
                bg="white"
                p={{ base: 8, md: 10 }}
                border="1px solid"
                borderColor="warm.100"
                borderRadius="4px"
              >
                <Heading
                  fontFamily="heading"
                  fontWeight="400"
                  fontSize={{ base: '1.8rem', md: '2.2rem' }}
                  color="warm.900"
                  mb={8}
                >
                  Send us a message
                </Heading>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel
                      fontFamily="body"
                      fontSize="1rem"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="warm.400"
                      mb={2}
                    >
                      Name
                    </FormLabel>
                    <Input
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      aria-label="Your full name"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontFamily="body"
                      fontSize="1rem"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="warm.400"
                      mb={2}
                    >
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      aria-label="Your email address"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontFamily="body"
                      fontSize="1rem"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="warm.400"
                      mb={2}
                    >
                      Phone (optional)
                    </FormLabel>
                    <Input
                      type="tel"
                      placeholder="(204) 555-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      aria-label="Your phone number"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontFamily="body"
                      fontSize="1rem"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="warm.400"
                      mb={2}
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      placeholder="Tell us what you're looking for, or ask us anything..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      aria-label="Your message"
                    />
                  </FormControl>

                  <CTAButton
                    type="submit"
                    variant="brand"
                    w="full"
                    isLoading={submitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </CTAButton>
                </VStack>
              </Box>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Google Map */}
      <Box as="section" h={{ base: '320px', md: '480px' }} overflow="hidden">
        <Box
          as="iframe"
          title="Lumière Hair Studio Location — Winnipeg, Manitoba"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41786.01455286994!2d-97.18922245693361!3d49.8951003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea75f800a01505%3A0x28c58ac4a50c7a5c!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
          w="100%"
          h="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* Booking CTA */}
      <Box as="section" bg="warm.900" py={{ base: 16, md: 20 }}>
        <Container maxW="900px" px={{ base: 6, md: 10 }} textAlign="center">
          <AnimatedSection>
            <VStack spacing={5}>
              <Heading
                fontFamily="heading"
                fontWeight="300"
                fontSize={{ base: '2.2rem', md: '3.2rem' }}
                color="white"
                lineHeight="1.15"
              >
                Your next appointment is waiting.
              </Heading>
              <Text
                fontFamily="body"
                fontSize="1rem"
                color="warm.300"
                lineHeight="1.9"
                maxW="500px"
              >
                Call, email, or fill out the form above — we respond to all enquiries within one business day.
              </Text>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}
