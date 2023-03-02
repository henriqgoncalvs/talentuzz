import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import { Link } from '@/components/link';

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    bg="accent"
    color="white"
    w="full"
  >
    <Container maxW="container.lg">
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Link
            variant="ghost"
            href="/"
            fontFamily="clash-display"
            fontSize="3xl"
            pl="0"
            color="white"
          >
            talentuzz
          </Link>
        </Stack>
        <Stack
          direction={{
            base: 'column-reverse',
            md: 'column',
            lg: 'row',
          }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Heading as="h4" fontSize="2xl" color="subtle">
                Product
              </Heading>
              <Stack spacing="3" shouldWrapChildren>
                <Link
                  color="gray.400"
                  href="/jobs"
                  fontSize="sm"
                >
                  Find a Job
                </Link>
                <Link
                  color="gray.400"
                  href="/organizations"
                  fontSize="sm"
                >
                  Startups
                </Link>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Heading as="h4" fontSize="2xl" color="subtle">
                Legal
              </Heading>
              <Stack spacing="3" shouldWrapChildren>
                <Link color="gray.400" href="/" fontSize="sm">
                  Privacy
                </Link>
                <Link color="gray.400" href="/" fontSize="sm">
                  Terms
                </Link>
                <Link color="gray.400" href="/" fontSize="sm">
                  License
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Talentuzz, by
          Henrique. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/henriiqueg/"
            target="_blank"
            aria-label="LinkedIn"
            icon={
              <FaLinkedin fontSize="1.25rem" color="white" />
            }
          />
          <IconButton
            as="a"
            href="https://github.com/hnqg"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" color="white" />}
          />
          <IconButton
            as="a"
            href="https://instagram.com/_hnqg"
            target="_blank"
            aria-label="Instagram"
            icon={
              <FaInstagram fontSize="1.25rem" color="white" />
            }
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);
