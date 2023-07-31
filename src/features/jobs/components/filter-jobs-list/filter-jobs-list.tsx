import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { BsFilter } from 'react-icons/bs';

import { Button } from '@/components/button';

import filtersObject from '../../data/filters-object';
import { useJobsFilters } from '../../stores/jobs-filter';
import { JobFilters } from '../../types';

export const FilterJobsList = () => {
  const { filters, initFilters, addFilter } = useJobsFilters();
  const filtersDrawer = useDisclosure();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  useEffect(() => {
    if (initFilters) initFilters();
  }, [initFilters]);

  if (isLargerThan800) {
    return <Filters filters={filters} addFilter={addFilter} />;
  }

  return (
    <>
      <Button
        onClick={filtersDrawer.onOpen}
        rightIcon={<BsFilter />}
      >
        Filters
      </Button>
      <Drawer
        isOpen={filtersDrawer.isOpen}
        placement="right"
        onClose={filtersDrawer.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter by</DrawerHeader>

          <DrawerBody>
            <Filters
              filters={filters}
              addFilter={addFilter}
              mobile
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Filters = ({
  filters,
  addFilter,
  mobile = false,
}: {
  filters: JobFilters | undefined;
  addFilter: (
    filterKey: keyof JobFilters,
    value: string[] | undefined
  ) => void;
  mobile?: boolean;
}) => {
  return (
    <VStack minW="200px" alignItems="flex-start">
      {!mobile && (
        <Text fontSize="xl" fontWeight="bold">
          Filter By (4)
        </Text>
      )}

      {filters && (
        <Accordion
          allowMultiple
          w="full"
          defaultIndex={[0, 1, 2]}
        >
          {Object.entries(filtersObject).map(([key, filter]) => (
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
                  (filters[
                    key as keyof JobFilters
                  ] as string[]) || []
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
