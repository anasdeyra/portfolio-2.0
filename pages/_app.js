import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AppShell, MantineProvider } from "@mantine/core";
import Header from "../components/Header";
import { NotificationsProvider } from "@mantine/notifications";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{ fontFamily: "Work Sans", headings: { fontFamily: "Work Sans" } }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Head>
        <title>Anasdeyra - portfolio</title>
        <meta
          name="description"
          content="Hi, Im Anas Deyra, A full stack web developer & UI/UX designer that will make your buisness boom."
        />
      </Head>
      <NotificationsProvider>
        <AppShell
          padding={0}
          styles={{
            body: {
              marginTop: "60px",
              backgroundImage: "url('/bg.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            },
          }}
          fixed
          header={<Header />}
        >
          <Component {...pageProps} />
        </AppShell>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
