// PortfolioPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowRightLine, RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTextContainer>
            <HeroTag
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Portfolio
            </HeroTag>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Showcasing our <AccentText>creative</AccentText> work
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Browse through our diverse portfolio of projects delivered with passion and precision.
            </HeroDescription>
          </HeroTextContainer>
        </HeroContent>
      </HeroSection>

      <ProjectsSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>Some of our best work showcasing our skills and expertise</SectionSubtitle>
        
        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {['all', 'Interior design', 'Landscape design', 'Architectural design'].map((category) => (
            <FilterButton 
              key={category}
              isActive={filter === category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                }}
                layout
              >
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    
                  </ProjectOverlay>
                </ProjectImageContainer>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                {/* <ProjectDescription>{project.description}</ProjectDescription> */}
                
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </ProjectsSection>

      <CTASection>
        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Have a project in mind?
          </CTATitle>
          {/* <CTADescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's bring your ideas to life. Reach out to us for a consultation.
          </CTADescription> */}
          <CTAButton 
            to="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(108, 99, 255, 0.3)'
            }}
          >
            Contact Us
            <span style={{ marginLeft: '8px', display: 'inline-flex' }}>
              <RiArrowRightLine size={20} />
            </span>
          </CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

const projects = [
  {
    title: 'SAQ Residence',
    image: 'https://plus.unsplash.com/premium_photo-1661876005092-57b7b5d4060d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBpbnRlcmlvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Interior design',
    
   
  },
  {
    title: 'AAB Rsidence',
    image: 'https://images.unsplash.com/photo-1689263133482-26a9436369e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2UlMjBpbnRlcmlvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Interior design',
 
  },
  {
    title: 'Velare Resdence',
    image: 'https://plus.unsplash.com/premium_photo-1661876059928-3083512ebd54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlJTIwaW50ZXJpb3IlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    category: 'Interior design',
  },
  {
    title: 'The Windsor Residence',
    image: 'https://plus.unsplash.com/premium_photo-1661880106258-f1e62559f4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlJTIwaW50ZXJpb3IlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    category: 'Interior design',
  
  },
  {
    title: 'Bluebell Rise Residence',
    image: 'https://plus.unsplash.com/premium_photo-1661950439212-558fa5cc82e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBpbnRlcmlvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Interior design',
    
  },
  {
    title: 'Bluebell Rise Residence',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Interior design',
   
  },
  {
    title: 'Willow Haven Residence',
    image: 'https://images.unsplash.com/photo-1569227997603-33b9f12af927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Landscape design',
   
  },
  {
    title: 'Cedar Crest Residence',
    image: 'https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Landscape design',
   
  },
  {
    title: 'The Fern Hollow Residence',
    image: 'https://images.unsplash.com/photo-1656646549569-e3ad3ff8f9f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbmRzY2FwZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Landscape design',
   
  },
  {
    title: 'Silverleaf Grove Residence',
    image: 'https://images.unsplash.com/photo-1696177183619-da501a48fc35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhbmRzY2FwZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Landscape design',
   
  },
  {
    title: 'The Glasshaus Residence',
    image: 'https://images.unsplash.com/photo-1617850687395-620757feb1f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlJTIwZGVzaWdufGVufDB8fDB8fHww',
    category: 'Landscape design',
   
  },
  {
    title: 'Nova Heights Residence',
    image: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXJjaGl0ZWN0dXJhbCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Architectural design',
   
  },
  {
    title: 'Echelon Residences',
    image: 'https://images.unsplash.com/photo-1521713362244-1b5e5d150b29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXJjaGl0ZWN0dXJhbCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Architectural design',
   
  },
  {
    title: 'Crownview Manor',
    image: 'https://plus.unsplash.com/premium_photo-1679496470437-a09743179634?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXJjaGl0ZWN0dXJhbCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Architectural design',
   
  },
  {
    title: 'The Elysian Court',
    image: 'https://plus.unsplash.com/premium_photo-1661906314543-dd6b588f3556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFyY2hpdGVjdHVyYWwlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    category: 'Architectural design',
   
  },
  {
    title: 'The Zenith',
    image: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFyY2hpdGVjdHVyYWwlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    category: 'Architectural design',
   
  },
  {
    title: 'Obsidian Rise',
    image: 'https://images.unsplash.com/photo-1609013361109-88c3ad291979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEFyY2hpdGVjdHVyYWwlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
    category: 'Architectural design',
   
  }
];




// Styled Components
const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  width: 100%;
  text-align: center;
`;

const HeroTextContainer = styled.div`
  max-width: 800px;
`;

const HeroTag = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }
`;

const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => `rgba(108, 99, 255, 0.2)`};
    z-index: -1;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled(motion.button)<{ isActive: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? 'white' : theme.colors.text};
  border: 1px solid ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : `rgba(0, 0, 0, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ isActive, theme }) => 
      isActive ? theme.colors.primary : `rgba(0, 0, 0, 0.05)`};
    color: ${({ isActive, theme }) => 
      isActive ? 'white' : theme.colors.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.default};
  
  ${ProjectImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ProjectCategory = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 1.5rem 1.5rem 0.75rem;
  text-transform: capitalize;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0 1.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0 1.5rem 1.5rem;
  line-height: 1.5;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 1.5rem 1.5rem;
`;

const ProjectTag = styled.span`
  padding: 0.2rem 0.75rem;
  background-color: ${({ theme }) => `rgba(0, 0, 0, 0.05)`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;

const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => `rgb(88, 79, 255)`} 100%
  );
  padding: 6rem 0;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.container.padding.default};
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: 1.5rem;
`;



const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: all ${({ theme }) => theme.transitions.default};
`;

export default PortfolioPage; 