import Facebook from "../../assets/facebook-square-brands.svg";

import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "emailjs-com"

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #04448c;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    margin-left: 1rem;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: black;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: #fff;
    }
    &::placeholder {
      color: black;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    color: black;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: #fff;
    }
    &::placeholder {
      color: black;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  
     const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7vlaj77",
        "template_5wtjndy",
        formRef.current,
        "user_pu0T7ZU48rvVGSCvVKx8W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Row>
          <input name="name" type="text" placeholder="your name" name1="user_name" />
          <input name="email" type="email"
           placeholder="enter working email id" name2="user_email"
          />
        </Row>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="your message" name3="message"
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button>Submit</button>
          {done && "Thank you..."}
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;