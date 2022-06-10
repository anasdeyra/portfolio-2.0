import {
  createStyles,
  Stack,
  Title,
  List,
  ThemeIcon,
  Text,
  Group,
  Center,
  Grid,
  SimpleGrid,
  Box,
} from "@mantine/core";
import React from "react";
import { HiExternalLink, HiArrowRight as ArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { NextLink } from "@mantine/next";

const useStyles = createStyles((t) => ({
  container: {
    position: "relative",
    color: "black",
    paddingTop: "44px",
    paddingBottom: "44px",
    background: "white",
  },
  list: {
    fontWeight: "bold",
  },
}));

export default function Technologies() {
  const { classes } = useStyles();
  return (
    <Stack px={"md"} className={classes.container}>
      <Title mb={"xl"}>What i use</Title>
      <Center>
        <Image
          width={1280 / 2}
          height={720 / 2}
          alt="technologies"
          src={"/tech.jpg"}
        />
      </Center>
      <SimpleGrid
        cols={2}
        pt={"xs"}
        spacing={"sm"}
        mt={"xl"}
        breakpoints={[{ maxWidth: 700, cols: 1 }]}
        className={classes.list}
      >
        {TECHNOLOGIES.map(({ name, link, usage }, i) => (
          <NextLink key={i} href={link} target="_blank">
            <List.Item
              icon={
                <ThemeIcon
                  radius={"xl"}
                  gradient={{ from: "#FF416C", to: "#FF4B2B" }}
                  variant="gradient"
                >
                  <ArrowRight size={16} />
                </ThemeIcon>
              }
            >
              <Group spacing={"xs"}>
                <Text size="lg">{name}</Text>{" "}
                <Text weight={"500"} size="sm" color={"dimmed"}>
                  ({usage})
                </Text>
              </Group>
            </List.Item>
          </NextLink>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

const TECHNOLOGIES = [
  { name: "React", link: "https://reactjs.org/", usage: "Front-end framework" },
  {
    name: "Express",
    link: "https://expressjs.com/",
    usage: "Back-end framework",
  },
  { name: "Next", link: "https://nextjs.org/", usage: "Full-stack framework" },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    usage: "Programming language",
  },
  { name: "Mantine", link: "https://mantine.dev/", usage: "UI library" },
  { name: "Git", link: "https://git-scm.com/", usage: "Version control" },
  { name: "Thirdweb", link: "https://thirdweb.com/", usage: "Web 3.0 library" },
];
