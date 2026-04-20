import { Box, Heading, Text, VStack, Divider } from '@chakra-ui/react';
import type { ServiceCategory } from '../data/services';

interface ServiceCardProps {
  category: ServiceCategory;
}

export default function ServiceCard({ category }: ServiceCardProps) {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="warm.100"
      p={{ base: 7, md: 9 }}
      position="relative"
      role="article"
      borderRadius="4px"
      overflow="hidden"
      h="100%"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 48px rgba(111,96,82,0.12)',
        borderColor: 'warm.300',
      }}
    >
      {/* Icon */}
      <Text
        fontFamily="heading"
        fontSize="2rem"
        color="warm.300"
        mb={4}
        lineHeight={1}
        aria-hidden="true"
      >
        {category.icon}
      </Text>

      <Heading
        as="h3"
        fontFamily="heading"
        fontSize={{ base: '1.4rem', md: '1.6rem' }}
        fontWeight="400"
        color="warm.900"
        mb={3}
        letterSpacing="0.02em"
      >
        {category.title}
      </Heading>

      <Text
        fontFamily="body"
        fontSize="1rem"
        color="warm.500"
        lineHeight="1.8"
        mb={6}
      >
        {category.description}
      </Text>

      <Divider borderColor="warm.100" mb={6} />

      <VStack align="stretch" spacing={3}>
        {category.items.map((item) => (
          <Box
            key={item.name}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            gap={4}
          >
            <Box flex={1}>
              <Text fontFamily="body" fontSize="1rem" color="warm.900" lineHeight="1.5">
                {item.name}
              </Text>
              {item.note && (
                <Text fontFamily="body" fontSize="1rem" color="warm.200" mt={0.5}>
                  {item.note}
                </Text>
              )}
            </Box>
            <Text
              fontFamily="body"
              fontSize="1rem"
              color="warm.400"
              fontWeight="400"
              whiteSpace="nowrap"
              flexShrink={0}
            >
              {item.price}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
