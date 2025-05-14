

import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #5e5341;
  color: #e6dfd3;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  min-width: 200px;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Link = styled.a`
  color: #e6dfd3;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    color: #e6dfd3;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }
`;

const SubscribeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-width: 200px;
`;

const SubscribeButton = styled.button`
  background-color: #a6a08f;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #c3bfb3;
  }
`;

const BottomNote = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #e6dfd3;
  margin-top: 2rem;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer style={{marginTop:"12px"}}>
      <Section>
        <Title>Stay in Touch</Title>
        <SocialIcons>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </Link>
          <Link href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </Link>
        </SocialIcons>
      </Section>

      <Section>
        <Title>Explore</Title>
        <Link href="/brandstory">Brand Story</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </Section>

      <Section>
        <Title>Contact us</Title>
        <Link href="tel:+91 7028424912">+91 7028424912</Link>
        <Link href="mailto: vishwakrutidesignstudio@gmail.com"> vishwakrutidesignstudio@gmail.com </Link>
        <Link href=""> Address: 2nd Floor, Trimruti Apartment, S.No.2, Tilak Road, Sadashiv Peth, Pune-411030 </Link>
       
      </Section>

      <SubscribeBox>
        <Title>Want to stay up to date?</Title>
        <SubscribeButton>SUBSCRIBE →</SubscribeButton>
      </SubscribeBox>

      <BottomNote>©2023 Aashi Gupta Designs. All rights reserved</BottomNote>
    </FooterContainer>
  );
};

export default Footer;
