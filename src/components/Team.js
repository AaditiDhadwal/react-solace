import React from 'react';
import Title from '../components/sharedComponents/Title';
import { CardTeam } from '../components/sharedComponents/Card';
import banner from '../assets/image/banner-3.jpg';

export default function Team() {
  const title = 'MEET OUR TEAM';
  const subtitle = 'BEHIND THE SCENES AT SOLACE';

  return (
    <React.Fragment>
      <Title title={title} subtitle={subtitle} />
      <CardTeam />
      <div className="banner3">
        <img src={banner} alt="banner" />
      </div>
      <div className="center">
        &nbsp;&nbsp;Our outreach is Local <br />
        and our impact is Global. <br />
        <button>DONATE NOW</button>
      </div>
    </React.Fragment>
  );
}
