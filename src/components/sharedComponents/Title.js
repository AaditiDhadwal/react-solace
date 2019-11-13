import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title, subtitle }) {
  return (
    <div>
      <h4 className="our-story">&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;</h4>
      <h6>{subtitle}</h6>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
