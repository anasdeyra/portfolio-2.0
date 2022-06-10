import { createStyles, Stack, Title, Grid, Text, Center } from "@mantine/core";
import React from "react";
import { BottomCurves } from "./Curves";

const useStyles = createStyles((t) => ({
  container: {
    position: "relative",
    color: "white",
    paddingTop: "44px",
  },
  grid: {
    borderRadius: t.radius.md,
    color: "black",
  },
}));

export default function Technologies() {
  const { classes } = useStyles();
  return (
    <Stack px={"md"} className={classes.container}>
      <Title mb={"xl"}>What i use</Title>
      <Grid className={classes.grid}>
        <Grid.Col xs={4}>
          {
            <Center>
              <Text weight={800} size="xl">
                React
              </Text>
            </Center>
          }
        </Grid.Col>
        <Grid.Col xs={8}>
          {
            <Center>
              <Text>React</Text>
            </Center>
          }
        </Grid.Col>
        <Grid.Col xs={8}>
          {
            <Center>
              <Text>React</Text>
            </Center>
          }
        </Grid.Col>
        <Grid.Col xs={4}>
          {
            <Center>
              <Text>React</Text>
            </Center>
          }
        </Grid.Col>
        <Grid.Col xs={3}>
          {
            <Center>
              <Text>React</Text>
            </Center>
          }
        </Grid.Col>
        <Grid.Col xs={3}>
          {
            <Center>
              <Text>React</Text>
            </Center>
          }
        </Grid.Col>
        <Grid.Col xs={6}>
          {
            <Center>
              <Text>React</Text>
            </Center>
          }
        </Grid.Col>
      </Grid>
      <BottomCurves />
    </Stack>
  );
}
