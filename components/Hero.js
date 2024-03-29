import {
  Stack,
  Title,
  Text,
  Group,
  ActionIcon,
  Button,
  createStyles,
} from "@mantine/core";
import { TopCurves } from "./Curves";
import Link from "next/link";
import ContactModal from "./ContactModal";
import { useDisclosure } from "@mantine/hooks";
import {
  FaFacebookSquare as FaFacebook,
  FaLinkedin as Linkedin,
  FaInstagram as FaInstagram,
  FaPhoneAlt as FaPhone,
  FaEnvelope as FaEmail,
  FaGithub as FaGithub,
} from "react-icons/fa";

const useStyles = createStyles((t) => ({
  container: {
    color: "white",
    position: "relative",
    padding: `${72}px 72px`,
    [t.fn.smallerThan("sm")]: {
      padding: `${72}px ${t.spacing.md}px`,
    },
  },
  title: {
    fontSize: t.headings.sizes.h1.fontSize * 2,
    [t.fn.smallerThan("sm")]: {
      fontSize: t.headings.sizes.h1.fontSize * 1.4,
    },
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
}));

export default function Hero({ scrollIntoView }) {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure();
  return (
    <Stack spacing={"xl"} mt={44} className={classes.container} size={"xl"}>
      <ContactModal opened={opened} close={close} />
      <Stack>
        <Title className={classes.title}>Hi, I&#39;m Anas Deyra</Title>
        <Text weight={"400"} size="xl">
          A full stack <span className={"highlight"}>web developer</span> &
          UI/UX designer that will make your business go to the moon.
        </Text>
      </Stack>
      <Stack spacing={"xs"}>
        <Group spacing={4}>
          <Text>Find me here:</Text>
          {SOCIALS.map(({ Icon, href, alt }, i) => (
            <Link title={alt} key={i} href={href} passHref>
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
        <Button
          onClick={open}
          radius={"xl"}
          size="lg"
          color="dark"
          variant="white"
        >
          Contact
        </Button>
        <Button
          className={classes.scButton}
          radius={"xl"}
          size="lg"
          variant="default"
          onClick={() => {
            scrollIntoView({ alignment: "start" });
          }}
        >
          See work
        </Button>
      </Group>

      <TopCurves />
    </Stack>
  );
}

const SOCIALS = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/anas-deyra-7015b9240/",
    alt: "linkedin",
  },

  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/anassdeyra/",
    alt: "facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/anas_deyra/",
    alt: "instagram",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/anasdeyra",
    alt: "github",
  },
];
