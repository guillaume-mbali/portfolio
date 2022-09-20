import React, { useState, useEffect, useRef } from 'react';
import { Image, Box, Flex, Tooltip, Text, useColorModeValue } from '@chakra-ui/react';

type Stack = {
  image: string;
  label: string;
}

type Props = {
  stacks: Stack[];
}

const StackCard: React.FC<Props> = ({ stacks }) => {
  const bg = useColorModeValue('rgba(250, 247, 247, 0.2)', 'rgba(47,52,62)');
  const [visibleTooltipIndex, setVisibleTooltipIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTooltipToggle = (index: number) => {
    setVisibleTooltipIndex(visibleTooltipIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setVisibleTooltipIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={cardRef}>
      <Box bg={bg} py={3} px={10} borderRadius={5} position="relative">
        <Flex gap={5} justifyContent='center' alignItems='center' direction={{ base: 'column', md: 'row', lg: 'row' }}>
          {stacks.map((stack, index) => (
            <Box key={index} position="relative" textAlign="center">
              <Tooltip 
                label={stack.label} 
                aria-label={stack.label} 
                isOpen={visibleTooltipIndex === index}
                placement='top'
              >
                <Image
                  objectFit='cover'
                  borderRadius='full'
                  height={8}
                  src={stack.image}
                  alt={stack.label}
                  cursor="pointer"
                  onClick={() => handleTooltipToggle(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </Tooltip>
              {hoveredIndex === index && (
                <Box
                  width={1}
                  height={1}
                  bg="rgb(213, 216, 222)"
                  borderRadius="full"
                  position="absolute"
                  bottom="-10px"
                  left="50%"
                  transform="translateX(-50%)"
                />
              )}
            </Box>
          ))}
          <Text fontSize='3xl'>...</Text>
        </Flex>
      </Box>
    </div>
  );
}

export default StackCard;
