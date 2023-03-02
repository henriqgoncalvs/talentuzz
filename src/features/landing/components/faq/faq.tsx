import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const FaqItem = ({
  title,
  children,
}: {
  title: string;
  children: string;
}) => {
  return (
    <AccordionItem>
      <Text>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize="xl"
            fontWeight="bold"
            p="2"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4} pl={6}>
        <Text>{children}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const FaqSection = () => {
  return (
    <VStack as="section" w="full" mt="20" spacing="10">
      <Heading fontSize="6xl" as="h4">
        FAQ
      </Heading>

      <Accordion
        w="full"
        border="1px solid black"
        borderRadius="lg"
      >
        <FaqItem title="What is the best way to get started?">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </FaqItem>
        <FaqItem title="How can i create an organization?">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </FaqItem>
        <FaqItem title="Who created this platform?">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </FaqItem>
      </Accordion>
    </VStack>
  );
};
