import React from 'react';
import {Link} from 'react-router-dom';
import UserPageTemplate from '../templates/UserPageTemplate';
import Button from '../components/atoms/Button/Button';
import styled from 'styled-components';
import Heading from '../../src/components/atoms/Heading/Heading';
import Paragraph from '../../src/components/atoms/Paragraph/Paragraph';
import PropTypes from 'prop-types';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 30px;
  max-width: 50vw;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`
const StyledPageHeader = styled.div`
  margin: 25px 0 0 0;
`

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({theme})=> theme.bold};
`


const StyledButton = styled(Button)`
      padding: 10px;
      width: 150px;
      font-size: 10px;
      text-decoration: none;
      color: black;

      @media(min-width: 600px) {
        font-size: 14px;
        width: 250px;
      }

`


const StyledLink = styled.a`
display: block;
font-weight: ${({theme})=> theme.bold};
font-size: 10px;
color: black;
text-transform: uppercase;
margin: 40px 0 30px;


@media(min-width: 500px) {
  font-size: 12px;
}
`
const StyledParagraphTwo = styled(Paragraph)`
  margin-bottom: 30px;
  font-size: 12px;
  width: 180px;
  padding: 15px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);


  @media(min-width: 500px){
    font-size: 14px;
    width: 250px;
  }
  @media(min-width: 600px){
    font-size: 16px;
    width: 350px;
  }
    @media(min-width: 1000px){
    font-size: 20px;
    width: 500px;
  }
`
const StyledHeading = styled(Heading)`
  margin: 25px 0 50px 0;
  font-size: 20px;
  
  @media(min-width: 500px){
    font-size: 22px;
  }
  @media(min-width: 600px){
    font-size: 28px;
  }
  ::first-letter {
    text-transform: uppercase;
  }
`

const DetailsTemplate = ({ pageContext, title, created, content, articleUrl, twitterName }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
         
      </StyledPageHeader>
      <StyledParagraphTwo>{content}</StyledParagraphTwo>
      {pageContext === 'articles' && <StyledLink href={articleUrl}>Otwórz artykuł</StyledLink>}
      
      <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        Zapisz
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
