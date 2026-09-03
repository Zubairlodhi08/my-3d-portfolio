import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import WhatIDo from "./WhatIDo";
import Career from "./Career";
import TechStack from "./TechStack";
import Work from "./Work";
import Contact from "./Contact";

export default function MainContainer() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <About />
        <WhatIDo />
        <Career />
        <TechStack />
        <Work />
        <Contact />
      </main>
    </>
  );
}
