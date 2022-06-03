import {
  Button,
  Container,
  Paper,
  Text,
  Title,
  createStyles,
  Stack,
  Group,
  Image,
  ActionIcon,
  SimpleGrid,
  AspectRatio,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import Link from "next/link";
import {
  FaFacebookSquare as FaFacebook,
  FaLinkedin as Linkedin,
  FaInstagram as FaInstagram,
  FaPhoneAlt as FaPhone,
  FaEnvelope as FaEmail,
} from "react-icons/fa";
import { HiExternalLink as Ext } from "react-icons/hi";

const useStyles = createStyles((t) => ({
  container: {
    color: "white",
    position: "relative",
  },
  title: {
    fontSize: t.headings.sizes.h1.fontSize * 1.4,
  },
  scButton: {
    color: "white",
    background: "none",
    border: "none",
    "&:hover, &:active": {
      color: "white",
      background: "none",
      border: "none",
    },
  },
  underlined: {
    backgroundImage: "url('/underline.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "contain",
  },
  features: {
    color: "black",
    background: "white",
    marginTop: "-1px",
  },
  showcase: {
    position: "relative",
    color: "white",
  },
}));

export default function Home() {
  const { classes, theme } = useStyles();
  const { scrollIntoView, targetRef } = useScrollIntoView();

  return (
    <>
      <Stack
        px={"md"}
        spacing={"xl"}
        mt={80}
        pb={100}
        size={"xl"}
        className={classes.container}
      >
        <Stack>
          <Title className={classes.title}>Hi, I&#39m Anas Deyra</Title>
          <Text weight={"500"} size="xl">
            A full stack <span className={"highlight"}>web developer</span> &
            UI/UX designer that will make your business go to the moon.
          </Text>
        </Stack>
        <Stack spacing={"xs"}>
          <Group spacing={4}>
            <Text>Find me here:</Text>
            {SOCIALS.map(({ Icon, href }, i) => (
              <Link key={i} href={href} passHref>
                <ActionIcon
                  p={0}
                  sx={{ color: "white" }}
                  variant="transparent"
                  component="a"
                  target={"_blank"}
                >
                  <Icon />
                </ActionIcon>
              </Link>
            ))}
          </Group>
          <Stack spacing={0}>
            <Group spacing={"xs"}>
              <FaEmail size={"14px"} />
              <Text>anasdoura607@gmail.com</Text>
            </Group>
            <Group spacing={"xs"}>
              <FaPhone size={"14px"} />
              <Text>(+216) 93 028 674</Text>
            </Group>
          </Stack>
        </Stack>
        <Group mt={"md"}>
          <Button radius={"xl"} size="lg" color="pink" variant="white">
            Contact
          </Button>
          <Button
            className={classes.scButton}
            radius={"xl"}
            size="lg"
            variant="default"
            onClick={() => {
              scrollIntoView({ alignment: "center" });
            }}
          >
            See work
          </Button>
        </Group>

        <div className="custom-shape-divider-bottom-1654255011">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Stack>
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
      <Stack ref={targetRef} pt={44} className={classes.showcase}>
        <Title mb={"xl"} px={"md"}>
          My work{" "}
        </Title>
        <SimpleGrid cols={1}>
          <Stack>
            <Link passHref href={"/venix"}>
              <Group
                sx={{ cursor: "pointer", width: "fit-content" }}
                ml={"md"}
                align={"center"}
                spacing={4}
              >
                <Title sx={{ fontWeight: "600" }} order={3}>
                  Venix
                </Title>
                <Ext size={"20px"} />
              </Group>
            </Link>
            <Link passHref href={"/venix"}>
              <Image alt="venix" sx={{ cursor: "pointer" }} src="/venix.png" />
            </Link>
          </Stack>
        </SimpleGrid>
        <div className="custom-shape-divider-top-1654278756">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Stack>
    </>
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

const SOCIALS = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/anas-deyra-7015b9240/" },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/anassdeyra/",
  },
  { Icon: FaInstagram, href: "https://www.instagram.com/anas_deyra/" },
];
