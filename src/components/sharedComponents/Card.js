import React from 'react';
import { CardDetails } from '../../constants/index';

export default function Story() {
  return (
    <div className="row">
      {CardDetails.filter(item => item.section === 'story').map(item => {
        return (
          <React.Fragment key={item.key}>
            <div className="col-sm-4 story-block">
              <div style={{ boxShadow: '2px 2px transparent' }}>
                <img src={item.image} alt={item.text} />
                <div className="white-box">
                  <span>{item.text}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function CardTeam() {
  return (
    <div className="row">
      {CardDetails.filter(item => item.section === 'team').map(item => {
        return (
          <React.Fragment key={item.key}>
            <div className="col-sm-4 team-block">
              <img src={item.image} alt={item.text} />
              <div className="white-box">
                <span>{item.text}</span>
                <h6 style={{ color: '#72a5ae' }}>{item.subText}</h6>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
