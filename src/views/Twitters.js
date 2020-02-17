import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridViewTemplate';


const Twitters = ({twitters}) => (
  <GridTemplate pageType="twitters">
  {twitters.map(pojedynczy => (
   <Card cardType="twitters"
   title={pojedynczy.title}
   content={pojedynczy.content}
   twitterName={pojedynczy.twitterName}
   created={pojedynczy.created}
   key={pojedynczy.title}
   id={pojedynczy.id}
   />
   ))}
 </GridTemplate>
)




const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);

