import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

import { withRouter} from 'react-router';
import PageContext from '../context/index'

class MainTemplate extends Component {
  state={
    pageType: 'notes',
  };

  componentDidMount() { //tylko przy zamontowaniu 
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) { //1poprzednie poropsy ktore zostaly dodane 2. drugi argument
    this.setCurrentPage(prevState)
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const {location: {pathname}} = this.props;
    const [currentPage] = pageTypes.filter(page=> pathname.includes(page));
    if(prevState.pageType !== currentPage) { //poprzedni byl twitters teraz jest twitters wiec nie wykonam sie
      this.setState({
        pageType: currentPage
      })
    }
   
  }




  render() {

  const { children} = this.props; 
  return (
    <PageContext.Provider value={this.state.pageType}>
    <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
  </PageContext.Provider>
  )
      
    };
  }
  MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };
export default withRouter(MainTemplate);
