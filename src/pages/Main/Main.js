import {
  About,
  Achievement,
  Blog,
  Contacts,
  Education,
  Experience,
  Footer,
  Landing,
  Navbar,
  Projects,
  Services,
  Skills,
  Testimonials,
} from "../../components";

import { Helmet } from "react-helmet";
import NewNavbar from "../../components/NewNavbar/NewNavbar";
import React from "react";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <NewNavbar />
      <Navbar />
      <Landing />
      <About />
      <Skills />
      {/* <Education /> */}
      <Projects />
      <Achievement />
      {/* <Blog /> */}
      <Contacts />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
