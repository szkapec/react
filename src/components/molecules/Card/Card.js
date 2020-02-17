import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import Heading from '../../../components/atoms/Heading/Heading';
import Button from '../../../components/atoms/Button/Button';
import LinkIcon from '../../../assets/icons/link.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction}  from '../../../actions/index';

const StyledWrapper = styled.div`
  min-height: 200px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;


`;
const StyledParagraph = styled(Paragraph)`
font-size: 12px;
line-height: 15px;
margin-bottom: 10px;
@media(min-width: 500px){
  font-size: 14px;
}
@media(min-width: 700px){
  font-size: 16px;
  line-height: 20px;
}
`;
const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;



const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  font-size: 10px;

  @media(min-width: 500px){
    font-size: 14px;
  }


  
`;

const StyledAvatar = styled.img`
  width: 30px;
  height: 30px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
  @media(min-width: 500px) {
    width: 35px;
  height: 35px;
  }
  @media(min-width: 700px) {
    width: 40px;
  height: 40px;
  }
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  @media(min-width: 500px) {
    width: 35px;
  height: 35px;
  }
  @media(min-width: 700px) {
    width: 40px;
  height: 40px;
  }
`;
const StyledButton = styled(Button)`
  background-color:  ${({ propsik, theme }) => (propsik ? theme[propsik] : 'white')};
  width: 70px;
  font-size: 10px;

  @media(min-width: 1000px){
    width: 90px;
  font-size: 12px;
  }
`;

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }
    
  state = {
    redirect: false,
  };

    handleCardClick = () => this.setState({ redirect: true});

    render() {
      const { id, cardType , title, created, twitterName, articleUrl, content, removeItem } = this.props;

      if(this.state.redirect) {
          return <Redirect to={`${cardType}/${id}`}/>;
      }
return (
  <StyledWrapper onClick={this.handleCardClick}>
  <InnerWrapper activeColor={cardType}>
    <StyledHeading>{title}</StyledHeading>
    {cardType === 'twitters' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
    {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
  </InnerWrapper>
  <InnerWrapper flex>
    <StyledParagraph>
      {content} 
    </StyledParagraph>
    <StyledButton onClick={()=>removeItem(cardType,id)} propsik={cardType} secondary>Usuń</StyledButton>
  </InnerWrapper>
</StyledWrapper>
);
}
}


Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  content: null,

};
const mapDispatchToProps = dispatch => ({
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id))
});
export default connect(null,mapDispatchToProps)(Card) ;
