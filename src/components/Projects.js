import React from 'react';
import Title from '../components/sharedComponents/Title';

export default function Projects() {
  const title = 'OUR RECENT PROJECTS';
  const subtitle = "CHECK OUT WHAT WE'VE BEEN UPTO LATELY";

  return (
    <React.Fragment>
      <Title title={title} subtitle={subtitle} />;
    </React.Fragment>
  );
}
