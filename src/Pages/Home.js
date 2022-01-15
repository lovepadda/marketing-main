//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import styled from "styled-components";

import Services from "../Sections/Services/index";
import Contact from "../Sections/Contact/index";
import Service from "../Sections/About";
import Testimonials from "../Sections/Testimonials";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;



const Home = () => {
  return (
    <Container>
      <HeroSection />
       <Service/>
      <Services />
      <Testimonials/>
      <Contact />
    </Container>
  );
};

export default Home;
