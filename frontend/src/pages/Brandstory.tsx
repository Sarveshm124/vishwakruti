import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const storyBlocks = [
  {
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8NDQ8QDQ0ODhUQDQ0QEBUQFRAXFhUWFhYXGBYYHSgiGR4lHRUVITEhJSkrLi4uFyEzODMsNygtLisBCgoKDg0OGhAQGzUlICYtKystMS43LS0wNjcwKzI3LSstLS04MC03KzcrKystKysxLS4rLS4rNS0rLTUtKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQMEAgUGBwj/xABCEAABAwMCBAMGAwQHCAMAAAABAAIDBBESBSETMUFRBiJhBxQycYGRI0KhUpKx8DNTYoKywdEIJENkcqPh8RUWJf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACwRAQACAgECBgECBwEAAAAAAAABAgMRMQQhEiJBUWFxgTKRFKGxwdHw8RP/2gAMAwEAAhEDEQA/APuGQ7j7pkO4+61UQbWQ7j7pkO4+61kQbOQ7hMh3C10QbGQ7hMh3CwIgz5DuEyHdYUQZsh3TId1hRBmyHdLjusSIMtx3TId1iRBlyHdMh3WFEGbId0yHcLCiDNkO4TIdwsCIM+Q7hMh3C10QbGQ7hMh3H3WsiDZyHcfdMh3H3Wqog2sx3H3RaqIKqiICqKoCIqgIiqCKoqgiKogiKogiKogiKogiiqIIouSiCKLkogiiqIIoqogiKogqqIgqIqgIiqAiqICKogIiqCIquId5iPS4UTOhUVXGR1repASZ1GxVFyUUiIqogiKqIIiqiCKKogiiqiCIqiCqqBVBURVAVUVQFURAVRAUBcGP3LTzHL1CyLXq28nD5LPLM1jxR6LVjfZsLWmdZ4PoskEuWx5j9Vgq/i+iyzX3ji1fdNY76luLVmd5wOxCyRSjAucbBg8xO1gF4vW/aFp9LHJUcU1bYp2QzClxl4bnhxbkbgAWY7e/S3NRlvNqxFfUrGpnb3K0dX1aClj4tVNFTs5B8rwwX+vM+i8xS+Oy3V5NJrYG0zZWNfpk4fm2qbv+awALhyHQtIuTa/zx+n1Wp0HiCKommqKnTdQdLSGRznlnBzu1g6XYHAAdSCt729IViH1Xw14xpdQlkioxPLHEwO97dA9kMhvYtY9wFyOdrD0vvb0S+f8AgvxdVTUw1XVJaCj0p8GMAbIRIZGuxcXEi25a8Bo35bdV78vFgb7Hl6/JW7RCBFVFIiKqIIoqiCKKqIIiqIKqoqgKoiCoioQFURAXCWO+42cORWQKPcGgucQGtBLidgAOZVbVi0alMdmvHU9HD6rM+zmm2/ZeEn9pNDJURR08dRPTyVAppNRZC73dkjr4NyIu4kgDYWsb3K8JUeJq+rOowVusQaG6hkfF7vFHw3Tmzg3GRzs7XZ+W+xv1CwjxxM1t3hbtzD6Zrni+hoTjU1LGzbY07PxZiTyHDbc7+tgut8UeMpG6QdVp4X0z3uawMq4i10IdLw83Mvv+0BexuF4jVq6pp59F8QUscZm1OjZRVQmuyPjOa0Mc8/FYne/aL1Xf+NpZJdFqdNrqinm1h0PGdT0tySGTtkGLLZABoA3G9isYrrUfK22tprW6tIdH158zK/T8g+CKYxQ17DiWTlrfiIABsLfFfqQ3H4P0KGr0bUdGdFFFW000lLUStjawySRuLoJXEbkXAG/7J7rnqvgCqqYqXU4dSml1lghfHUStZCxrOZaGMb5bZk73vYi269lpXhplPWVOo8Z5nrIo21MYDWQlzGtHEDbFwPlcfiNszz5qLXiI7T/0iHjdH0tuuaFTRTEw6lppdTwz7h9PLDYNBPOzmiPL135gL0fsr0ivpxqE+qxMimrJ2SHF7HB5azF7jiTa53+q7VlXRU/E4LY2ulkMs3BYBxHu+JziNnE9yVYNVfUtljjvE5sd4je5P+nT7rKOvpW0xzPpDb+FyTXcxqPd0tD7NdJpy+WSJ1WGvkkjbUuLoqdriXYMiHlsPUEr2emSMkbnGbsb5G2aWgW6AW5fJeTOoE0jo3OJkMmO5ucT5ifuCPqvW6MYuBGIDkxrbX6363HQ3v8AdOl6meoy9+Nb1/vstn6f/wAad+d6bUjrAmxdYXsLXP3WGiq2zM4jPhJIHfbqR0+Xayx6jWNiw4pHCkJY8n8pIuL+mxH1CzUs7ZBmwHE8nFuOXyvvZehGSJyeGJ/Hr9ubw6pvX5ZVFyUWrNFFSoUEUK5KIIiIgoVUCoQVVQKoCqIgqoUVQY5IAdxse4Wu8ObsSbfcFbqwRVTHNc4kNDXFjw4gYkGxBv8AzusMmOs8TqV6zL5Z4D8SRaZHqml1cscTdKqpX0zXua0vheXSNawE+Z17mw/rAtTTqGPUdUpdbjoOLQarRzw1bJmMdwHRkxiQ3JAzDGtFt7ZL3uteEtLqJRV1FJTyzNORkez4rNxGfR4A6OuNh2Vm1uCOzWXfbYCMCwH1sPsuTP1Fcf6p/n/Rrjw2v+mHnYfZ2z3Sq02asnloJJmSUUXlzog0h1mSOBJ6jsB0uSu30Lwnp1A9rqeCNtS6/wDvEjjJM8kHI5vJIuL3tYc1y1uskAifG9zIpG8wLEH168j+i1dQpGwBkrZuJOHhxuRuOd7c+y4cnWW7xHEc+jqx9JExEzPPDsNY1KRj+DCPPjmXc9hcmw+QK29MrmzsvsHDaRnb/wAFdXWVTfeaaoPlY6ME+nxA/wAVpS1LY5jNS34d97tIbc82/L+ei5pzzW8zM7jetfHvDojp4vSKxGp1vfz7S5RYU1S9sjM2C4aLBxsd2kX+y26SszrGvx4N2YlrjYu226c+W3ouGsSCRkVZFzaQ146tI3F/kb/cLsdRoG1LGyN8smILHHsd7H+dlWlLbmKcRMTEe/5Wveuom/MxNZn2/DTNO2OuGTQWTB2NxcAuBBH8f3klo5qaTiUwdJE8gOjFz8gf8j/J7IUsYbF71IXGE5B5IaSf9OX2C2maqHeWnic8D87jw2fc7n7Lrx9PSd+K3h77jXPfns55z27ajca1O+PgfpMcrLzNdm9n5nXMV/2bGwI7rsIg7Fudi6wyI5E9VgpRMTlK+O1v6OMEj6uJ3/RbS9nDjpWN1jX9/t5+S1p7TO0KhVUW7NEREEUVUQRFUQVAiBBQqFAqEFCqgVCAjgeht9Loqg15opCDi8X6Eg2H0HNdPHo7mT8V95swSXEDyvHIgD0uPp6r0K4SSBvP7LkzdLjv5rTw2pmtXcR6ulrGiWOSJjvMW726b8j2uQRb5ro6LUhFHwn0+TgSHGwF9+u25H+S9II2hzni4c83eb/F2v3sNh/7XX1ddOyTEQGSMjyFtzc9yQNvkvJz01Pj3r0427cFtxNNbjnnTUnqxVwytDCx8QEjQTe9r3/Tb6p4cpoXMzLA6VrrEu3t1BA/nksmm08zqh1RMzhhzCLC2/IAWvfp+i2aenhpc3F9szfc9L7AN62usaUm1oyX+Y79vqWuS8VrOOnxMa7/AHDBrdK58kDmsL2td+ILX2u3n+q7KanY5hjcAIyLWGwHy7LSOoSSbU8RI/rH7BBprn71Ern/ANhuzR/PyW0a8VprG9/syncVrF51r93GCSngYImniEm7sRmXHueiygzy/wDLs6bZPP8AotqCmYwWY0N9ev3XhfbR4lfRaeIoJDHUVrzE1zTZzYwLyOb25tbf+2tcWGbTFePplfLEbmI3PvP+HHxL4+0nT3ujc5+oVbTZ7IyJMTvs95OINxawuR2XjKz26VJ2p6GniHQSSPlt+7gvkiL08fS46Rw5bZb25l9u0X26RkgV9E5g/raZ4f8A9t9v8S+g+G/aNpVdNHTUtTIamW/DgkikaTi0uO+OPIHr0X5QX03/AGfKHiauZSLimpJHg9nOLYx+j3LWuKleIUm0y/SSIotECiqiCKKqICIiIVAoFQiVCoUCqChVREFVUVQY3ucdmi3qVi91ceZH8VtKrK2KLT5lotrh4DWPaTpFHVuoqieXixuxmeyFzmRHsSNz/dBXqIKmOVjZYHtkhkaHRyMcHBwPUEL5n7bfZ46pczUtPiBqHOwrW5sia5uJxlLnkAEWDTvvk3svIeDdc1HQLivpJ5NLlN7sLZGRvP5o5GksueRbkL8+iyy9PE18kJrfv3feZo3O2Dywf2QL/crDHpsQORBe7nk85LV8OeI6TUIuPRTCVo+NnwvjPZ7DuP4HoSu1Xn2xxvzQ6IyWiNRIERddruu0tDFx62ZkEfJuW7nns1o3cfQBWiN9oVdivzN7WvFDdQ1B3BdnS0reDTuBuH2N3vHzdyPUNau88f8AtbkrGPpNOY+mpngtmmfYSyg/lABsxp3vuSfTcH5au7p8M181mV7b7QIiz0VJJNIyCBjpZZHBscbBdzieQAXUzYF91/2a6C0eo1Z5OfFAw/8ASHPf/iYtbw17BnOYJNUqjC9wv7vThriz0dI64v6AEepX1XwX4Tg0mmdSUrpHsdM6Zz5SC4ucGt3xAHJoHJB3yiqiAoqogiiqiAiIgBVRVBVVEQVVRUIKqoiCqqKoPmXtu8G12pQ076F3EFNm6Siyx4hNrPbfYuABFj0Jt2P5907VKuglfwJZaWUEsmj3bexILJI3bOsbgtcCv2evG+N/ZtQaq4TTB9PVAW95gxDngCwDwQQ4D6HbnZB8B0zxhTQytq20ElPWgEPloKz3OJ3rwTE8C+12g4m3whfQ6D24UmDRPSVXEAs5zXRSX9b+QfZo+S6XXvYRXRAuoaiGtaLkRvHu8h7AXJafmXBfM9Z0apo5TBWQSU8oF8JG2uOV2nk4bHcXCzvirflMWmH6C0j2uabUuLGsqoniOSS0kTbYxsdI7drjya0nfsvhviPUqrUal1XVPHElP4ELn/C0/CyNv5Rble2RN9yV1+i1wglydkY5IpIJg22WEsbo3EX2JAdcDuAu/cdJheas1FVXzF/FjpWQClYH3y/Elc5xxv0aLnuOaimKtJ3CZtMvP0emSStBiBke8kRRMBc57mlt2gDri7Id7Fb9ZoHuo/8A0JWwzdKGMiWfobSWOMPP8xyH7JVb4tqo2OipDHp8T24uZSRiJzh2MxvK7+88roVp3VcnkEnEWHQXvb6r9DexTwSyhhZqVaAytrG400b7AwxnlYftv2J6gWG1yF4r2Lez010zdSrGH3CB94WOG1TI0/qxpG/QkW381vtXjmFssEcLSY6ozMdSThuXAkyDQ8i4JacywgXu17trXUjua/UI4eHxL5Sv4cTRa7nYudbcgDZp5kduZCy0tQ2WNkrLlkjGvYSLGzhcbfVeXj1gVNPEx0JFSx7o5Yn+aSCWNjrtFiMnEZb3s5oeRk0gO7fwzWyTQF81i5k0sTZGiwkax5a122x5WJGxLSQACAg7UqKqIIiKFAUREEVURBVVxCqChUKKoKquKqCqqIgqqiIOSwV1SIonykOcI2l2DBdzz0a0HqTYD1KzLjIwOBa4Xa4WI7oOvpdUcHCOsbHSzPtwmCZsnEubHHYE2JaCbWu4DddZ4+0HT6yjedTYTHC1z45o9poyR/wiAbuOwDbEONtjsu0rdIZJkWudFK6LhtnAbI9lsi1zTIDZzS9xB7872suhk8NujDYGN94poOJVRQSOdi+RrWx0sJLibNaxtj3PmIy3IeKHsDpHWcyvqWscLta6JhcL9zt/BcJ/YJStbkdSljA5ufEy25sPzDqvo4qK/KOJpge98Eshc6N8TGlpja0G9yLl7rC17NO55rh4hrA2aMyYmnpYeNUN3yLpSYYsQOZNpmi55vB/Kg+T1/sAqBvTahDLc8pYnRWHzaX3XaeGPYnSQzxjVKsVUpaZGUUQMbXBtg4ucTk5t3Dlj9d19PZrd5GQxU8riWxl3wtDA55Y8GxO7C03HLYgHZearaef36sfTyCOZ1exsbw0fhiXT+G0+e4NntYbWtcckHsahpp6Z4o4GvdDAfdqVmMTXFrfJGOQaLgD0XnIYDUVTpo3FlbAI3RVjYXsimj8zHxSNJ8zchIQCbjJrm9S7udHhnzlmnuOPi5sZeSYrMaMMN2tIOdyDvseZK7GKFjMsGtZk4udiALk8ybdUGJ9DCXulMUZkczB7ywEvbe4a423AI5Hks4FhYbAbADoqogIiiAoiIIoVVEBERAVURByRRVBVVxVQVVREFVURBUUVQVFEQcZQS0hpxcRs7stOn04BsnGPGfK5rnvO3wWwAtyxsDt+Yk7Xst5EGGKljacmMDSGCMEbeUEkC3zJT3VnEdLiOI5rQ498CS36jI7+qzKIKoiiAiKICIogKIiCFEUQEREBVQIg5IoqgqKKoKiiqCooqgqKIgqKIgqKIgqiIgIoiAiKICIogKIiAoiiAiIgKrPwgnCCDAqs3CCcMIMSLLwwnDCDGiycMK4BBiVWTAJgEGNFkwCYBBjRZMAhYgxoubWd1cAgxosmATAIMaiy4BMAgxKLNgFOGEGJRZuGE4YQYVFn4QThBBrotjhBThBBrotnhBRBkREQEREBERAREQF1eq69BTPYyYuBcC44sLg1oZI+5t3ETwALm/RdosckLHG7mtcQCASAdjzH1QdN/8AbKO9g99/w7gxPaRxIXTMNnAXu1h+R2NiCqPFtF5PxXfiGMR/gy+bixiVlvL+wcj2677LtZKOJwc10bC1wxcMRuLWA+xIVjpI2taxsbGsYGhjQ0ANDbY2HS1hbtZB1R8UUwikqCX8CKbhPkwP9SJswOZbi7tf0WDxD4rjp6Koq4WuqHwSGnZCGuBfNsMOV9idyL8j12Xe+7ssRgyxdkRiLF3O9u/qsNRpsL4nwFgEb3Oc4N8vmc4uLvnkSboPNez/AMSVNTTP/wDkWMZVxAvIj2zZzBxuQ0jYWudiOpIHZReLaRzM83t/C4rmGJ+TRk5tiLc7tdt6X5brl4d8LU1CZnw8SSWoI400z+I9wbfFo2Aa0ZHYADdduaaM82MN2lp8o5E3I+Xog6dniylN93jF+P8ARudl+I6JpbjfIOc0gW+tlsaf4hpp3sjhe5zpGZtBjezbJ7fzAWvw37f2fkux4LP2W/ujvf8Aiq2FoIIa0ECwIABAO5CDo2+LqUmAAyf7w+KNh4bgAZo3yR3J53wI2vYkXsLkd81wIBBBBFwRuCuHAZ+w390drfwK5taAAALACwA2sgqIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//Z',
    title: 'The Spark',
    text: 'Every brand starts with a spark — a moment of inspiration. Ours was born from a desire to blend creativity with technology.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYWYrezMBc-4wmqZNcOWfwD8YxV08j7sjRg&s',
    title: 'The People',
    text: 'Behind every pixel is a passionate person. Our team is a collective of thinkers, designers, and builders.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfH9V89yQCRWRJ18Z6qokAF27ctnR0FLyx2A&s',
    title: 'The Mission',
    text: "We're on a mission to help brands create digital experiences that matter. It's not just work — it's our craft.",
  },
];

const BrandStoryPage: React.FC = () => {
  return (
    <StoryWrapper>
      <StoryHeader
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Tagline>Our Story</Tagline>
        <Title>Shaping Digital Dreams Into Reality</Title>
        <Subtitle>
          Vishwakruti Design Studio was born from a simple belief — that great design can transform ideas, inspire change, and drive growth.
        </Subtitle>
      </StoryHeader>

      <StorySection>
        {storyBlocks.map((block, index) => (
          <StoryBlock
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <BlockImage src={block.image} alt={block.title} />
            <BlockContent>
              <BlockTitle>{block.title}</BlockTitle>
              <BlockText>{block.text}</BlockText>
            </BlockContent>
          </StoryBlock>
        ))}
      </StorySection>

      <ClosingSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ClosingTitle>
          We're not just a studio — we're your creative partner.
        </ClosingTitle>
        <ClosingText>
          Whether you're just starting or scaling up, we’re here to help you shape your vision, digitally.
        </ClosingText>
      </ClosingSection>
    </StoryWrapper>
  );
};

export default BrandStoryPage;

// Styled components below

const StoryWrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StoryHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: #888;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const StorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StoryBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const BlockImage = styled.img`
  max-width: 300px;
  border-radius: 1rem;
`;

const BlockContent = styled.div`
  max-width: 600px;
`;

const BlockTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BlockText = styled.p`
  font-size: 1rem;
  color: #444;
`;

const ClosingSection = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
`;

const ClosingTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ClosingText = styled.p`
  font-size: 1rem;
  color: #666;
`;
