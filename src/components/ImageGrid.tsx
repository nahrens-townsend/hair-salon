import { SimpleGrid, Box } from '@chakra-ui/react';
import AnimatedSection from './AnimatedSection';

interface ImageGridProps {
  images: { src: string; alt: string }[];
  columns?: number[];
  gap?: number;
}

export default function ImageGrid({
  images,
  columns = [1, 2, 3],
  gap = 4,
}: ImageGridProps) {
  return (
    <SimpleGrid columns={columns} gap={gap}>
      {images.map((img, i) => (
        <AnimatedSection key={img.src} delay={i * 0.08} direction="fade">
          <Box
            overflow="hidden"
            position="relative"
            _hover={{ '& img': { transform: 'scale(1.05)' } }}
          >
            <Box
              as="img"
              src={img.src}
              alt={img.alt}
              w="100%"
              h={{ base: '220px', md: '260px', lg: '300px' }}
              objectFit="cover"
              display="block"
              transition="transform 0.6s ease"
              loading="lazy"
            />
          </Box>
        </AnimatedSection>
      ))}
    </SimpleGrid>
  );
}
