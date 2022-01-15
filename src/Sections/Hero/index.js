// This is HeroSection component, Main top section of website

import styled from "styled-components";
import wave from "../../assets/waves.svg";

import Mobile from "../../assets/mobile.svg";
import Tilt from "react-tilt";


const TiltWrapper = styled(Tilt)`
  width: 60%;
  margin-top: 80px;
  min-width: 400px;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;
  

const HomeSection = styled.section`
  width: 100vw;
  height: 51vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Mobilesvg = styled.img`
  max-width: 150%;
  width: calc(50% + 40vw);
  height: auto;
  justify-content: right;
  z-index: 7;
  
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  margin-right: 0%;
  margin-top: 80px;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--black);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #04448c;
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;



const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const CTA1 = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: #04448c;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 68em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
const scrollUp = (id, e) => {
  e.preventDefault();
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};


const HeroSection = () => {
  return (
    <HomeSection id="home">
      <Waves src={wave} alt="" />

      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <span>We Design & Build Web</span>
          </Topic>
          
          <Title>Transforming your digital presence Transforming your digital presence</Title>
          <SubText>
            we help fast growing companies build award winning websites
          </SubText>
          <CTA1 onClick={(e) => scrollUp("contact", e)}>
            Contact Us &nbsp;
          </CTA1>
          
        </Lb>
         <TiltWrapper options={{ max: 25 }}>
        <Mobilesvg
          src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width=""
          height="400"
        />
        </TiltWrapper>
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
