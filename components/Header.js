import React from "react";
import { Group, Header as H, Text, createStyles, Button } from "@mantine/core";
import Link from "next/link";
import ContactModal from "./ContactModal";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  header: {
    padding: `${t.spacing.xs}px ${72}px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "none",

    [t.fn.smallerThan("sm")]: {
      padding: `${t.spacing.xs}px ${t.spacing.md}px`,
    },
  },

  logo: { fontSize: t.fontSizes.xl * 1.2, color: "black" },
}));

export default function Header() {
  const { classes, theme } = useStyles();
  const [opened, { open, close }] = useDisclosure();
  return (
    <H height={"60px"} className={classes.header}>
      <ContactModal opened={opened} close={close} />
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
        onClick={open}
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
