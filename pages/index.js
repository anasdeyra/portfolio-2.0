import Work from "../components/Work";

import { useScrollIntoView } from "@mantine/hooks";

import Features from "../components/Features.js";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";

export default function Home() {
  const { scrollIntoView, targetRef } = useScrollIntoView();

  return (
    <>
      <Hero scrollIntoView={scrollIntoView} />
      <Features />
      <Work targetRef={targetRef} />
      <Technologies />
    </>
  );
}
