import React from "react";
import projects from "./projects.json";
import {
  Box,
  Button,
  Text,
  createStyles,
  Group,
  Stack,
  Title,
  Image,
  Badge,
} from "@mantine/core";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const useStyles = createStyles((t) => ({
  container: {
    background: "white",
    borderRadius: t.radius.lg,
    maxWidth: 1100,
  },
  title: {
    fontSize: t.headings.sizes.h2.fontSize,
  },
}));

export default function Project({ name, website, description, images, tags }) {
  const { classes } = useStyles();

  return (
    <Box my={40} mx={"md"}>
      <Stack spacing={"xs"} mx={"auto"} p={0} className={classes.container}>
        <Group mt={"xs"} mx={"xs"} position="apart">
          <Title className={classes.title}>{name}</Title>
          <Link passHref href={website}>
            <Button
              variant="gradient"
              gradient={{ from: "#FF416C", to: "#FF4B2B" }}
              radius="md"
              size="sm"
              component="a"
              target={"_blank"}
            >
              Visit
            </Button>
          </Link>
        </Group>

        <Carousel showThumbs={false} showStatus={false}>
          {images.map((src, i) => (
            <Image key={i} alt={name + i} src={src} />
          ))}
        </Carousel>

        <Group spacing={"xs"} mx={"xs"}>
          {tags.split(", ").map((tag, i) => (
            <Badge
              key={i}
              variant="gradient"
              gradient={{ from: "#FF416C", to: "#FF4B2B" }}
            >
              {tag}
            </Badge>
          ))}
        </Group>
        <Text weight={"500"} mb={"xs"} mx={"xs"}>
          <Box sx={{ fontWeight: "700" }}>About:</Box> {description}
        </Text>
      </Stack>
    </Box>
  );
}

export async function getStaticProps({ params }) {
  const project = projects.filter(({ name }) => {
    return name.toLowerCase() === params.name;
  })[0];
  return {
    props: { ...project }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = projects.map(({ name }) => ({
    params: { name: name.toLowerCase() },
  }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
