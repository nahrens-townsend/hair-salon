import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
];

export default function Footer() {
  return (
    <Box as="footer" bg="warm.900" color="warm.100" pt={16} pb={8}>
      <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={{ base: 10, md: 12 }}
          mb={12}
        >
          {/* Brand */}
          <GridItem colSpan={{ base: 1, lg: 1 }}>
            <Text
              fontFamily="heading"
              fontSize="2rem"
              fontWeight="300"
              letterSpacing="0.08em"
              color="white"
              mb={4}
            >
              Lumière
            </Text>
            <Text
              fontFamily="body"
              fontSize="0.8rem"
              lineHeight="1.9"
              color="warm.200"
              mb={6}
              maxW="220px"
            >
              Where artistry meets intention. Winnipeg's premier hair studio.
            </Text>
            <HStack spacing={4}>
              <Link
                href="https://instagram.com/lumierehair"
                isExternal
                aria-label="Lumière on Instagram"
                fontFamily="body"
                fontSize="0.7rem"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="warm.300"
                _hover={{ color: 'warm.400', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                Instagram
              </Link>
              <Text color="warm.500">·</Text>
              <Link
                href="https://facebook.com/lumierehairstudio"
                isExternal
                aria-label="Lumière on Facebook"
                fontFamily="body"
                fontSize="0.7rem"
                letterSpacing="0.15em"
                textTransform="uppercase"
                color="warm.300"
                _hover={{ color: 'warm.400', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                Facebook
              </Link>
            </HStack>
          </GridItem>

          {/* Navigation */}
          <GridItem>
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              fontWeight="400"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="warm.300"
              mb={5}
            >
              Navigate
            </Text>
            <VStack align="flex-start" spacing={3}>
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  fontFamily="body"
                  fontSize="0.85rem"
                  color="warm.200"
                  _hover={{ color: 'warm.400', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </GridItem>

          {/* Hours */}
          <GridItem>
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              fontWeight="400"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="warm.300"
              mb={5}
            >
              Hours
            </Text>
            <VStack align="flex-start" spacing={3}>
              {hours.map((h) => (
                <Box key={h.day}>
                  <Text fontFamily="body" fontSize="0.75rem" color="warm.200" lineHeight="1.6">
                    {h.day}
                  </Text>
                  <Text fontFamily="body" fontSize="0.8rem" color={h.time === 'Closed' ? 'warm.500' : 'warm.100'}>
                    {h.time}
                  </Text>
                </Box>
              ))}
            </VStack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              fontWeight="400"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="warm.300"
              mb={5}
            >
              Visit Us
            </Text>
            <VStack align="flex-start" spacing={4}>
              <Box>
                <Text fontFamily="body" fontSize="0.85rem" color="warm.100" lineHeight="1.7">
                  67 Alenbrook Bay
                </Text>
                <Text fontFamily="body" fontSize="0.85rem" color="warm.100">
                  Winnipeg, Manitoba R3X 1Y2
                </Text>
              </Box>
              <Link
                href="tel:2045550192"
                fontFamily="body"
                fontSize="0.85rem"
                color="warm.200"
                _hover={{ color: 'warm.400', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                (204) 555-0192
              </Link>
              <Link
                href="mailto:hello@lumierehair.ca"
                fontFamily="body"
                fontSize="0.85rem"
                color="warm.200"
                _hover={{ color: 'warm.400', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                hello@lumierehair.ca
              </Link>
            </VStack>
          </GridItem>
        </Grid>

        <Divider borderColor="warm.500" mb={6} />

        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={3}
        >
          <Text fontFamily="body" fontSize="0.72rem" color="warm.500" letterSpacing="0.05em">
            © {new Date().getFullYear()} Lumière Hair Studio. All rights reserved.
          </Text>
          <Text fontFamily="body" fontSize="0.72rem" color="warm.500">
            67 Alenbrook Bay, Winnipeg, MB
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
