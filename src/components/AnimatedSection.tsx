import { useRef } from 'react';
import { Box, type BoxProps } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionBox = motion(Box) as any;

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  ...rest
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  const initialMap = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    fade: { opacity: 0 },
  };

  const animateMap = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    fade: { opacity: 1 },
  };

  return (
    <MotionBox
      ref={ref}
      initial={initialMap[direction]}
      animate={isInView ? animateMap[direction] : initialMap[direction]}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
}
