import React from 'react';

export default () => {
  return (
    <div>
      <div className="homeImage">
        <img src="https://media.gettyimages.com/photos/guest-attends-the-motohiro-tanji-show-during-tokyo-fashion-week-on-picture-id516227600?s=612x612" alt=""/>
      </div>
      <div className="homeIntro">
        <p>Hello World, my name is Matt</p>
        <p>I like underground music and shit</p>
        <p>Checkout this weeks new featured artist</p>
      </div>
      <div className="homeVideo">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZIjSBS5GcIY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <br/><br/><br/><br/>
    </div>
  )
}
