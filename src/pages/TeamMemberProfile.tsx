import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Flex,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { useParams, Link as RouterLink, Navigate } from 'react-router-dom';
import { teamMembers } from '../data/team';
import AnimatedSection from '../components/AnimatedSection';
import CTAButton from '../components/CTAButton';

export default function TeamMemberProfile() {
  const { memberId } = useParams<{ memberId: string }>();
  const member = teamMembers.find((m) => m.id === memberId);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  const details = [
    { label: 'Years of Experience', value: `${member.yearsExp} years` },
    { label: 'Specialty', value: member.specialty },
    { label: 'Favourite Style', value: member.favoriteStyle },
    { label: 'What She / He Loves Most', value: member.enjoysMost },
  ];

  return (
    <Box>
      {/* Portrait hero */}
      <Box
        position="relative"
        h={{ base: '70vh', md: '88vh' }}
        overflow="hidden"
        mt="80px"
      >
        <Box
          as="img"
          src={member.image}
          alt={`${member.name} — ${member.role} at Lumière`}
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center top"
          loading="eager"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, rgba(45,37,32,0.85) 0%, rgba(45,37,32,0.15) 55%, transparent 100%)"
        />

        {/* Name overlay */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={{ base: 8, md: 14 }}
        >
          <Container maxW="1400px" px={0}>
            <Text
              fontFamily="body"
              fontSize="0.65rem"
              letterSpacing="0.25em"
              textTransform="uppercase"
              color="warm.300"
              mb={2}
            >
              {member.role}
            </Text>
            <Heading
              fontFamily="heading"
              fontWeight="300"
              fontSize={{ base: '3.2rem', md: '5.5rem' }}
              color="white"
              lineHeight="1.05"
            >
              {member.name}
            </Heading>
          </Container>
        </Box>
      </Box>

      {/* Profile content */}
      <Box as="section" bg="warm.50" py={{ base: 18, md: 24 }}>
        <Container maxW="1400px" px={{ base: 6, md: 10, lg: 16 }}>
          {/* Breadcrumb */}
          <AnimatedSection mb={12}>
            <Breadcrumb
              separator="/"
              fontFamily="body"
              fontSize="0.72rem"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="warm.200"
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/team" _hover={{ color: 'warm.400' }}>
                  Our Team
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink color="warm.400">{member.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </AnimatedSection>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 14, lg: 24 }}>

            {/* Bio */}
            <AnimatedSection direction="left">
              <VStack align="flex-start" spacing={6}>
                <Text
                  fontFamily="body"
                  fontSize="0.65rem"
                  letterSpacing="0.25em"
                  textTransform="uppercase"
                  color="warm.400"
                >
                  About {member.name.split(' ')[0]}
                </Text>
                <Text
                  fontFamily="body"
                  fontSize={{ base: '1rem', md: '1.05rem' }}
                  color="warm.500"
                  lineHeight="2"
                >
                  {member.bio}
                </Text>
                <Divider borderColor="warm.100" />
                <Box>
                  <Text
                    fontFamily="body"
                    fontSize="0.65rem"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color="warm.400"
                    mb={3}
                  >
                    A Fun Fact
                  </Text>
                  <Text
                    fontFamily="heading"
                    fontStyle="italic"
                    fontSize={{ base: '1.3rem', md: '1.6rem' }}
                    color="warm.900"
                    lineHeight="1.45"
                  >
                    "{member.funFact}"
                  </Text>
                </Box>
              </VStack>
            </AnimatedSection>

            {/* Details grid */}
            <AnimatedSection direction="right" delay={0.15}>
              <VStack align="stretch" spacing={0} divider={<Divider borderColor="warm.100" />}>
                {details.map((d) => (
                  <Box key={d.label} py={7}>
                    <Text
                      fontFamily="body"
                      fontSize="0.65rem"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="warm.400"
                      mb={2}
                    >
                      {d.label}
                    </Text>
                    <Text fontFamily="body" fontSize="0.92rem" color="warm.900" lineHeight="1.7">
                      {d.value}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box as="section" bg="warm.900" py={{ base: 16, md: 20 }}>
        <Container maxW="900px" px={{ base: 6, md: 10 }} textAlign="center">
          <AnimatedSection>
            <VStack spacing={6}>
              <Heading
                fontFamily="heading"
                fontWeight="300"
                fontSize={{ base: '2rem', md: '2.8rem' }}
                color="white"
              >
                Ready to book with {member.name.split(' ')[0]}?
              </Heading>
              <Text fontFamily="body" fontSize="0.88rem" color="warm.300" lineHeight="1.9" maxW="460px">
                Reach out to request {member.name.split(' ')[0]} for your next appointment. We'll be happy to arrange it.
              </Text>
              <Flex gap={4} wrap="wrap" justify="center" pt={2}>
                <CTAButton to="/contact" variant="brand">Book an Appointment</CTAButton>
                <CTAButton to="/team" variant="brandOutline">Back to Team</CTAButton>
              </Flex>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
}
