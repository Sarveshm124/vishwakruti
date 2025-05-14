import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHeader
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AboutTitle>About Us</AboutTitle>
        <AboutSubtitle>Our story, mission, and values</AboutSubtitle>
      </AboutHeader>

      <AboutContent>
        <AboutImageSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AboutImage 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" 
            alt="Our Team" 
          />
        </AboutImageSection>

        <AboutTextSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AboutSectionTitle>Our Story</AboutSectionTitle>
          <AboutText>
          Vishwakruti Design Studio was founded in 2020 with a simple mission: to help businesses create impactful digital experiences. What started as a small team of passionate designers and developers has grown into a full-service digital agency.
          </AboutText>
          <AboutText>
          At Vishwakruti Design Studio, we specialize in transforming homes, offices, and commercial spaces through expert interior design and architectural services. Our mission 
          is to craft spaces that are both functional and visually stunning, tailored to your unique style and needs. From custom furniture and decor selection to lighting design, material choices, 
          and renovation assistance, we handle every detail with precision. Whether it's creating architectural layouts, planning spaces, or implementing structural modifications, we ensure your space is both beautiful and practical.          </AboutText>
        </AboutTextSection>
      </AboutContent>

      <ValuesSection>
        <ValuesSectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </ValuesSectionTitle>

        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

     
    </AboutContainer>
  );
};

// Dummy data
const values = [
  {
    title: 'Design Excellence',
    description: 'We deliver elegant, functional designs that meet both aesthetic and practical needs',
    icon: '✨'
  },
  {
    title: 'Client-Centric Approach',
    description: 'We listen, collaborate, and create spaces that reflect our clients’ vision and lifestyle',
    icon: '🤝'
  },
  {
    title: 'Sustainability',
    description: 'We use eco-friendly materials and energy-efficient designs to build a better future.',
    icon: '🌱'
  },
  {
    title: 'Innovation & Technology',
    description: 'We integrate the latest design software and tools for accuracy and creativity',
    icon: '🧠'
  }
];

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO & Creative Director',
    bio: 'Jane has over 15 years of experience in digital design and marketing. She leads our creative direction and business strategy.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'John Smith',
    role: 'Technical Lead',
    bio: 'John is our technical wizard with expertise in both frontend and backend development. He ensures our projects are built with best practices.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'UX Designer',
    bio: 'Sarah specializes in user experience design, creating intuitive and user-friendly interfaces for our clients.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
  },
  {
    name: 'Michael Brown',
    role: 'Project Manager',
    bio: 'Michael keeps our projects on track, ensuring they are delivered on time and within budget.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }
];

// Styled Components
const AboutContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  padding: 5rem 0 3rem;
`;

const AboutTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const AboutSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 4rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImageSection = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AboutTextSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const ValuesSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 3rem -2rem;
  padding: 5rem 2rem;
`;

const ValuesSectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const TeamSection = styled.section`
  padding: 5rem 0;
`;

const TeamSectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TeamSectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMemberCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

const TeamMemberName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 1.5rem 1.5rem 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TeamMemberRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0 1.5rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const TeamMemberBio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0 1.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default AboutPage; 