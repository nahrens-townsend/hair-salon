import { Box, Heading, Text, AspectRatio } from '@chakra-ui/react';
import CTAButton from './CTAButton';
import type { TeamMember } from '../data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Box
      role="article"
      aria-label={`${member.name}, ${member.role}`}
      transition="all 0.35s ease"
      _hover={{
        transform: 'translateY(-6px)',
        '& .team-card-image': {
          transform: 'scale(1.04)',
        },
      }}
    >
      {/* Image */}
      <AspectRatio ratio={3 / 4} mb={0} overflow="hidden" borderTopRadius="4px">
        <Box overflow="hidden">
          <Box
            as="img"
            className="team-card-image"
            src={member.image}
            alt={`${member.name} — ${member.role} at Lumière Hair Studio`}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 0.6s ease"
            loading="lazy"
          />
        </Box>
      </AspectRatio>

      {/* Info */}
      <Box
        bg="white"
        border="1px solid"
        borderColor="warm.100"
        borderTop="none"
        borderBottomRadius="4px"
        p={{ base: 5, md: 6 }}
      >
        <Text
          fontFamily="body"
          fontSize="0.65rem"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color="warm.400"
          mb={1}
        >
          {member.role}
        </Text>
        <Heading
          as="h3"
          fontFamily="heading"
          fontSize={{ base: '1.4rem', md: '1.6rem' }}
          fontWeight="400"
          color="warm.900"
          mb={4}
        >
          {member.name}
        </Heading>
        <CTAButton
          to={`/team/${member.id}`}
          variant="brandOutline"
          w="full"
          py={4}
          fontSize="0.65rem"
        >
          View Profile
        </CTAButton>
      </Box>
    </Box>
  );
}
