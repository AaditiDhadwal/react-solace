import React from 'react';
// import background from '../assets/image/body-bg.png';
import ourStory from '../assets/image/our-story.jpg';


export default function OurStories() {
return (
  <div className="row">
    <div class="col-sm-4 story-block">
        <img src={ourStory} alt="our-story" />
    </div>
  </div>
  )
}