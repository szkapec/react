import React from 'react';
import {Link} from 'react-router-dom';
import UserPageTemplate from '../templates/UserPageTemplate';
import Button from '../components/atoms/Button/Button';
import styled from 'styled-components';
import Image from '../assets/icons/logo.svg';
import Heading from '../../src/components/atoms/Heading/Heading';
import Paragraph from '../../src/components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`
const StyledPageHeader = styled.div`
  margin: 25px 0 0 0;
`
const StyledHeader = styled(Heading)`
  margin: 25px 0 50px 0;
  ::first-letter {
    text-transform: uppercase;
  }
`
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({theme})=> theme.bold};
`


const StyledButton = styled(Button)`
      background-color:  ${({  pageType, theme }) => (pageType ? theme[pageType] : 'white')};
      width: 150px;
      margin-top: 30px;
      font-size: 10px;
`

const StyledImage = styled.a`
  
  width: 90px;
  height: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.twitters};
  background: white url(${Image}) no-repeat;
  position: absolute;
  right: 20px;
  top: 20px;
`
const StyledLink = styled.a`
display: block;
font-weight: ${({theme})=> theme.bold};
font-size: ${({theme})=> theme.xs};
color: black;
text-transform: uppercase;
margin: 20px 0 50px;
`

const DetailsTemplate = ({children, pageType, title, created, content, articleUrl, twitterName}) => (
  
  <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
          <StyledPageHeader>
              <StyledHeader big as="h1">{title}</StyledHeader>
          
          <StyledParagraph>{created}</StyledParagraph>
          </StyledPageHeader>
          <Paragraph>{content}</Paragraph>
          {pageType==='articles' && <StyledLink href={articleUrl}>Otwórz artykuł</StyledLink>}
          {pageType==='twitters' && <StyledImage alt={title} src={`http://avatars.io/twitter/${twitterName}`}></StyledImage>}
          <Link to='/'><StyledButton  pageType={pageType}> Zapisz </StyledButton></Link>
      </StyledWrapper>
  </UserPageTemplate>
);


export default DetailsTemplate
