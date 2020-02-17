import React from 'react';
import Card from '../components/molecules/Card/Card'
import GridTemplate from '../templates/GridViewTemplate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Articles = ({articles}) => (
  <GridTemplate pageType="articles">
    {articles.map(pojedynczy => (
      <Card 
      cardType="articles"
      title={pojedynczy.title}
      content={pojedynczy.content}
      articleUrl={pojedynczy.articleUrl}
      created={pojedynczy.created}
      key={pojedynczy.title}
      id={pojedynczy.id}
      ></Card>
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};


const mapStateToProps = state => {
  const { articles } = state;
  return {articles};
}


export default connect(mapStateToProps)(Articles);
