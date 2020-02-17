import React from 'react';
import Card from '../components/molecules/Card/Card'
import GridTemplate from '../templates/GridViewTemplate';
import { connect } from 'react-redux';



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

const mapStateToProps = state => {
  const { articles } = state;
  console.log(state);
  return {articles};
}


export default connect(mapStateToProps)(Articles);
