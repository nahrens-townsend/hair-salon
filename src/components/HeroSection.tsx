import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import CTAButton from './CTAButton';

interface HeroSectionProps {
  imageUrl: string;
  preheading?: string;
  heading: string;
  subheading?: string;
  ctas?: { label: string; to?: string; href?: string; variant?: 'brand' | 'brandOutline' }[];
  height?: string;
  overlayOpacity?: number;
  textAlign?: 'left' | 'center' | 'right';
  objectPosition?: string;
}

export default function HeroSection({
  imageUrl,
  preheading,
  heading,
  subheading,
  ctas = [],
  height = '100vh',
  overlayOpacity = 0.48,
  textAlign = 'center',
  objectPosition = 'center',
}: HeroSectionProps) {
  return (
    <Box
      as="section"
      position="relative"
      h={height}
      minH="500px"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent={textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : 'center'}
    >
      {/* Background image */}
      <Box
        as="img"
        src={imageUrl}
        alt=""
        aria-hidden="true"
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition={objectPosition}
        loading="eager"
      />

      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg={`rgba(45,37,32,${overlayOpacity})`}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={1}
        px={{ base: 6, md: 12, lg: 20 }}
        py={20}
        maxW={textAlign === 'center' ? '800px' : '700px'}
        mx={textAlign === 'center' ? 'auto' : undefined}
        textAlign={textAlign}
      >
        <VStack
          spacing={{ base: 5, md: 7 }}
          align={textAlign === 'center' ? 'center' : textAlign === 'left' ? 'flex-start' : 'flex-end'}
        >
          {preheading && (
            <Text
              fontFamily="body"
              fontSize="0.68rem"
              letterSpacing="0.28em"
              textTransform="uppercase"
              color="warm.300"
              opacity={0.9}
            >
              {preheading}
            </Text>
          )}

          <Heading
            as="h1"
            fontFamily="heading"
            fontWeight="300"
            fontSize={{ base: '3.2rem', md: '5rem', lg: '6.5rem' }}
            color="white"
            lineHeight="1.05"
            letterSpacing="-0.01em"
          >
            {heading}
          </Heading>

          {subheading && (
            <Text
              fontFamily="body"
              fontSize={{ base: '0.9rem', md: '1rem' }}
              color="rgba(255,255,255,0.82)"
              lineHeight="1.9"
              maxW="480px"
              letterSpacing="0.03em"
            >
              {subheading}
            </Text>
          )}

          {ctas.length > 0 && (
            <Flex
              gap={4}
              wrap="wrap"
              justify={textAlign === 'center' ? 'center' : 'flex-start'}
              pt={2}
            >
              {ctas.map((cta) => (
                <CTAButton
                  key={cta.label}
                  to={cta.to}
                  href={cta.href}
                  variant={cta.variant ?? 'brand'}
                >
                  {cta.label}
                </CTAButton>
              ))}
            </Flex>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
