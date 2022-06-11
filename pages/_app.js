import "../styles/globals.css";
import { AppShell, MantineProvider } from "@mantine/core";
import Header from "../components/Header";
import { NotificationsProvider } from "@mantine/notifications";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{ fontFamily: "Work Sans", headings: { fontFamily: "Work Sans" } }}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider>
        <AppShell
          padding={0}
          styles={{
            body: {
              marginTop: "60px",
              backgroundImage: "url('/bg.svg')",
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
