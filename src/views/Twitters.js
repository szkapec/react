import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridViewTemplate';
import PropTypes from 'prop-types';

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

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);

