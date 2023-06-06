import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "Spring 2022",
    title: "Hacking 4 Defense",
    description: ``,
  },
  {
    id: 2,
    date: "Spring 2022",
    title: "Graduated with a Bachelor's in CS from Stanford",
    description: ``,
  },
  {
    id: 3,
    date: "Summer 2022",
    title: "H4X Labs Accelerator",
    description: ``,
  },
  {
    id: 4,
    date: "Fall 2022",
    title: "Incorporated CausalTwin, Inc.",
    description: ``,
  },
  {
    id: 5,
    date: "Fall 2022",
    title: "NSIN Starts: Naval Tank Inspection Challenge",
    description: "",
  },
  {
    id: 6,
    date: "Spring 2023",
    title: "Z Fellowship",
    description: "",
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      {/* <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Milestones
      </chakra.h3> */}
      {milestones.map((milestone) => (
        <Flex key={milestone.id}>
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "#7fafe8")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#7fafe8"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "#33373d" : "#33373d"}>
          {date}
        </Text>

        <VStack textAlign="left">
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      {/* Vertical Line */}
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "#7fafe8")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "#f9fafa")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Milestones;
