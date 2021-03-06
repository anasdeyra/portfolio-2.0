import React from "react";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  Overlay,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  title: {
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  tag: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export default function ProjectCard({ image, title, tag }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Overlay
        zIndex={0}
        blur={1}
        opacity={0.6}
        color="#000"
        radius="md"
      ></Overlay>

      <div style={{ zIndex: 1 }}>
        <Text className={classes.tag} size="xs">
          {tag}
        </Text>
        <Text className={classes.title}>{title}</Text>
      </div>
      <Link passHref href={`/projects/${title.toLowerCase()}`}>
        <Button component="a" variant="white" color="dark">
          Details
        </Button>
      </Link>
    </Paper>
  );
}
