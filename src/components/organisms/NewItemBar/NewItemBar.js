import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button';
import withContext from '../../../hoc/withContext';
import Heading from '../../atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction} from '../../../actions/index';
import { Formik, Form} from 'formik';

const StyledWrapper = styled.div`
    border-left: 10px solid ${({theme, activeColor})=> theme[activeColor]};
    border-top: 10px solid ${({theme, activeColor})=> theme[activeColor]};
    z-index: 10000; 
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 50px 60px;
    right: 0;
    top: 40px;
    height: 100vh;
    width: 300px;
    background-color: white;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    /* transform: translate(${({isVisible}) => (isVisible ? '0' : '100%')}); */
    transform: translateY(${({isVisible}) => (isVisible ? '0' : '100%')});
    transition: transform 1s ease-in-out;

    @media(min-width: 400px) {
      width:350px;
    }
    @media(min-width: 500px) {
      width:400px;
    }
    @media(min-width: 700px) {
      width:500px;
}

  @media(min-width: 1000px) {
    width:850px;
}
@media(min-width: 1200px) {
    width:1000px;
}
`
const StyledTextArea = styled.div`
    margin: 30px 0 100px;
    border-radius:20px;
    height: 30vh;
`

const StyledInput = styled(Input)`
  margin-top: 30px;
  font-size: 8px;

  @media(min-width: 700px) {
       font-size: 12px;
}

`
const StyledForm = styled(Form)`
display:flex;
flex-direction: column;
`
const StyledHeading = styled(Heading)`
font-size: 12px;
@media(min-width: 700px) {
  font-size: 18px;
}
@media(min-width: 1000px) {
  font-size: 22px;
}
`
const StyledButton = styled(Button)`
  margin-top: 30px;
  font-size: 8px;
    @media(min-width: 700px) {
       font-size: 12px;
}

`

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <StyledHeading big>Stwórz 
       {pageContext==="notes" ? " nową notatkę" : null}
       {pageContext==="articles" ? " nowy artykuł " : null}
       {pageContext==="twitters" ? " nowy twitt" : null}
       
       </StyledHeading>
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
        onSubmit={values => {
          addItem(pageContext, values);
          console.log(values)
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="title"
              placeholder="Tytuł"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {pageContext === 'twitters' && (
              <StyledInput
                placeholder="Nazwa twittera"
                type="text"
                name="twitterName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
            )}
            {pageContext === 'articles' && (
              <StyledInput
                placeholder="link do artykułu"
                type="text"
                name="articleUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
            )}
            <StyledTextArea
              name="content"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <StyledButton type="submit" activecolor={pageContext}>
              Dodaj notatke
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
  
  NewItemBar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible: PropTypes.bool,
    addItem: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
  };
  
  NewItemBar.defaultProps = {
    pageContext: 'notes',
    isVisible: false,
  };
  
  const mapDispatchToProps = dispatch => ({
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
  });
  
  export default connect(
    null,
    mapDispatchToProps,
  )(withContext(NewItemBar));
  