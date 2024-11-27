import Hero from "./_sections/hero";
import { Metadata } from "next";
import About from "./_sections/about";

import PageLayout from "./_components/PageLayout";

export const metadata: Metadata = {
  title: "Home | Algi Nugraha",
  description: "Portofolio Algi Nugraha",
};

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
    </PageLayout>
  );
}