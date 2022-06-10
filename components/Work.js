import { SimpleGrid, Stack, Title, createStyles } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { useListState } from "@mantine/hooks";
import { useEffect } from "react";

const useStyles = createStyles((t) => ({
  showcase: {
    position: "relative",
  },
}));

export default function Work({ targetRef }) {
  const { classes } = useStyles();
  const [projects, { setState }] = useListState([]);

  async function fetchProjects() {
    await fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <Stack px={"md"} ref={targetRef} pt={44} className={classes.showcase}>
      <Title mb={"xl"}>My work </Title>
      <SimpleGrid
        cols={2}
        spacing={"xl"}
        breakpoints={[{ maxWidth: 700, cols: 1, spacing: "md" }]}
      >
        {projects.map(({ name }, i) => (
          <ProjectCard
            key={i}
            tag={"React, next"}
            title={name}
            image={`/${name}.png`}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
