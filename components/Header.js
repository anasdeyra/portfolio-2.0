import React from "react";
import { Group, Header as H, Text, createStyles, Button } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((t) => ({
  header: {
    padding: `${t.spacing.xs}px ${t.spacing.md}px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { fontSize: t.fontSizes.xl * 1.2, color: "black" },
}));

export default function Header() {
  const { classes, theme } = useStyles();
  return (
    <H height={"60px"} className={classes.header}>
      <Link href={"/"} passHref>
        <Text component="a" className={classes.logo} weight={"900"}>
          Deyra
        </Text>
      </Link>
      <Group></Group>
      <Button
        radius={"xl"}
        variant="gradient"
        gradient={{ from: "#FF416C", to: "#FF4B2B" }}
      >
        Contact
      </Button>
      <div className="custom-shape-divider-top-1654279257">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </H>
  );
}
