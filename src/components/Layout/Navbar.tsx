import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={scrolled ? 'rgba(250,248,245,0.97)' : 'transparent'}
        backdropFilter={scrolled ? 'blur(12px)' : 'none'}
        borderBottom={scrolled ? '1px solid' : 'none'}
        borderColor="warm.100"
        transition="all 0.4s ease"
        px={{ base: 6, md: 10, lg: 16 }}
        py={{ base: 4, md: 5 }}
      >
        <Flex align="center" justify="space-between" maxW="1400px" mx="auto">
          {/* Logo */}
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none', opacity: 0.8 }}
            transition="opacity 0.2s"
          >
            <Text
              fontFamily="heading"
              fontSize={{ base: '1.5rem', md: '1.75rem' }}
              fontWeight="300"
              letterSpacing="0.08em"
              color={scrolled ? 'warm.900' : 'white'}
              transition="color 0.4s"
            >
              Lumière
            </Text>
          </Link>

          {/* Desktop nav */}
          <HStack
            spacing={10}
            display={{ base: 'none', md: 'flex' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                as={RouterLink}
                to={link.to}
                fontFamily="body"
                fontSize="1rem"
                fontWeight="400"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color={scrolled ? (isActive(link.to) ? 'warm.400' : 'warm.900') : 'white'}
                opacity={isActive(link.to) ? 1 : 0.85}
                _hover={{ opacity: 1, color: scrolled ? 'warm.400' : 'white', textDecoration: 'none' }}
                transition="all 0.2s"
                pb={1}
                borderBottom="1px solid"
                borderColor={isActive(link.to) ? (scrolled ? 'warm.400' : 'white') : 'transparent'}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          {/* Mobile hamburger */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="Open navigation menu"
            variant="ghost"
            color={scrolled ? 'warm.900' : 'white'}
            onClick={onOpen}
            icon={
              <Box>
                <Box w="22px" h="1.5px" bg="currentColor" mb="5px" />
                <Box w="22px" h="1.5px" bg="currentColor" mb="5px" />
                <Box w="14px" h="1.5px" bg="currentColor" />
              </Box>
            }
            _hover={{ bg: 'transparent', opacity: 0.7 }}
          />
        </Flex>
      </Box>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent bg="warm.50" maxW="280px">
          <DrawerCloseButton color="warm.900" mt={2} mr={2} />
          <DrawerBody pt={16} pb={10}>
            <VStack align="flex-start" spacing={8}>
              <Text
                fontFamily="heading"
                fontSize="1.6rem"
                fontWeight="300"
                letterSpacing="0.08em"
                color="warm.900"
                mb={4}
              >
                Lumière
              </Text>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  onClick={onClose}
                  fontFamily="body"
                  fontSize="1rem"
                  fontWeight="400"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color={isActive(link.to) ? 'warm.400' : 'warm.900'}
                  _hover={{ color: 'warm.400', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
