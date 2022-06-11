import { SimpleGrid, Stack, Title, createStyles } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import { BottomCurves, TopCurves } from "./Curves";
import projects from "../pages/projects/projects.json";

const useStyles = createStyles((t) => ({
  showcase: {
    position: "relative",
    color: "white",
    paddingBottom: "44px",
  },
}));

export default function Work({ targetRef }) {
  const { classes } = useStyles();

  return (
    <Stack px={"md"} ref={targetRef} pt={44} className={classes.showcase}>
      <Title mb={"xl"}>My work </Title>
      <SimpleGrid
        cols={2}
        spacing={"xl"}
        breakpoints={[{ maxWidth: 700, cols: 1, spacing: "md" }]}
        mb="xl"
      >
        {projects.map(({ name, thumbnail, tags }, i) => (
          <ProjectCard key={i} tag={tags} title={name} image={thumbnail} />
        ))}
      </SimpleGrid>
      <BottomCurves />
      <TopCurves />
    </Stack>
  );
}
