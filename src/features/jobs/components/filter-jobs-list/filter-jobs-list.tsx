import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';

import { useJobsFilters } from '../../stores/jobs-filter';
import { JobFilters } from '../../types';

import filtersJSON from './filters.json';

export const FilterJobsList = () => {
  const { filters, initFilters, addFilter } = useJobsFilters();

  useEffect(() => {
    if (initFilters) initFilters();
  }, [initFilters]);

  return (
    <VStack minW="200px" alignItems="flex-start">
      <Text fontSize="xl" fontWeight="bold">
        Filter By (4)
      </Text>

      {filters && (
        <Accordion
          allowMultiple
          w="full"
          defaultIndex={[0, 1, 2]}
        >
          {Object.entries(filtersJSON).map(([key, filter]) => (
            <FilterAccordionItem
              filterLabel={filter.label}
              key={key}
            >
              <CheckboxGroup
                colorScheme="brand"
                onChange={(value) =>
                  addFilter(
                    key as keyof JobFilters,
                    value as JobFilters[keyof JobFilters]
                  )
                }
                value={
                  filters[key as keyof JobFilters] as string[]
                }
              >
                {filter.options.map((option) => (
                  <VStack
                    key={option.label}
                    w="full"
                    spacing="2"
                    alignItems="flex-start"
                  >
                    <Checkbox value={option.value}>
                      {option.label}
                    </Checkbox>
                  </VStack>
                ))}
              </CheckboxGroup>
            </FilterAccordionItem>
          ))}
        </Accordion>
      )}
    </VStack>
  );
};

type FilterAccordionItemProps = {
  filterLabel: string;
  children: React.ReactNode;
};

const FilterAccordionItem = ({
  filterLabel,
  children,
}: FilterAccordionItemProps) => {
  return (
    <AccordionItem w="full" border="none">
      <AccordionButton
        px="0"
        flex="1"
        _hover={{
          bg: 'transparent',
        }}
      >
        <Box
          as="span"
          flex="1"
          textAlign="left"
          whiteSpace="nowrap"
          fontWeight="bold"
        >
          {filterLabel}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px="1">{children}</AccordionPanel>
    </AccordionItem>
  );
};
