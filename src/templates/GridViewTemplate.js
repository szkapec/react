import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import withContext from '../hoc/withContext'
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon'
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar'
import plusIcon from '../assets/icons/plus.svg'

const StyledWrapper = styled.div`
position: relative;
  padding: 25px 0px 25px 0px;
`;

const StyledGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  @media(max-width:1000px){
    grid-template-columns: repeat(1, 0.8fr);
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 10px 0;
  font-size: 12px;
  text-align: center;
  @media(min-width:500px){
    font-size: 16px;
  }
  @media(min-width:1000px){
    font-size: 20px;
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 10px;
  text-align: center;
  @media(min-width:500px){
    font-size: 12px;
  }
    @media(min-width:1000px){
    font-size: 16px;
  }
`;


const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: ${({activeColor, theme}) => theme[activeColor] };
  border-radius: 50%;
  background-size: 20%;
    height: 35px;
    width: 35px;
  z-index: 10001;

  @media(min-width: 500px) {
    background-size: 20%;
    height: 50px;
    width: 50px;
  }
  @media(min-width: 1000px) {
    height: 70px;
    width: 70px;
    bottom: 40px;
  right: 40px;
  }

`



class GridTemplate extends Component {
  state = { 
    isNewItemBarVisible: false,
  }

  handleNewItemBarToggle = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
  }))
  };
   


  render() {

    const { children, pageType, pageContext } = this.props;
    const {isNewItemBarVisible} = this.state;
    return (
      <>
      <Sidebar pageType={pageContext} />
      <StyledWrapper pageType={pageType}>
        <StyledPageHeader>
          
          <StyledHeading as="h1">
            {pageType==="notes" ? "Dodaj nową notatkę" : null}
            {pageType==="twitters" ? "Dodaj nowego twitta" : null}
            {pageType==="articles" ? "Dodaj nowy artykuł" : null}
          </StyledHeading>
          <StyledParagraph> 
          dodaj
          {pageType==="notes" ? " notetkę!" : null}
          {pageType==="twitters" ? " twitta!" : null}
          {pageType==="articles" ? " artykuł!" : null}
          
          </StyledParagraph>
        </StyledPageHeader>
        <StyledButtonIcon onClick={this.handleNewItemBarToggle} icon={plusIcon} activeColor={pageContext}></StyledButtonIcon>
        <NewItemBar handleClose={this.handleNewItemBarToggle} isVisible={isNewItemBarVisible}/>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </>
    )
  }

}


GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
