import { Stack, Title, SimpleGrid, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((t) => ({
  features: {
    color: "black",
    background: "white",
    marginTop: "-1px",
  },
}));

export default function Features() {
  const { classes } = useStyles();
  return (
    <Stack spacing={"xs"} py={"xl"} px={"md"} className={classes.features}>
      <Title mb={"xl"} order={1}>
        Why me ?
      </Title>
      <SimpleGrid cols={1}>
        {FEATURES.map(({ label, text }, i) => (
          <Stack key={i} spacing={0}>
            <Text weight={"600"} size="xl">
              {label}
            </Text>
            <Text weight={"500"} size="md">
              {text}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

const FEATURES = [
  {
    label: "User friendly UI",
    text: "88% of people have negative feelings about brands with poorly performing websites and mobile apps, so I make sure that the website I build is as user-friendly as possible.",
  },
  {
    label: "Good looking design",
    text: "A well-designed website can help you form a good impression on your prospective customers, so I carefully pick a pleasing color scheme and minimalistic design with high quality photos, etc..",
  },
  {
    label: "Affordable price",
    text: "The websites that I make are pocket-friendly too.",
  },
];
