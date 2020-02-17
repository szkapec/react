import React from 'react';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../templates/GridViewTemplate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Notes = ({notes}) => (
  <GridTemplate pageType="notes">
    {notes.map(pojedynczy => (
    <Card cardType="notes"
    id={pojedynczy.id}
    title={pojedynczy.title}
    content={pojedynczy.content}
    created={pojedynczy.created}
    key={pojedynczy.id}
    />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};
Notes.defaultProps = {
  notes: [],
};
const mapStateToProps = state => {
  const { notes } = state;
  console.log(state);
  return {notes};
}


export default connect(mapStateToProps)(Notes);
