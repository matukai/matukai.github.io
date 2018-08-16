import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class SlideShow extends Component {
  render() {
      return (
          <Carousel showStatus={false} width="50%" autoPlay={true}>
              <div>
                  <img src="https://78.media.tumblr.com/e1f1bfbca0cae136edf17e4e16e25e9c/tumblr_np2yslf0Ev1qfirfao1_1280.jpg" alt="slide 1" />
                  <p className="legend">1</p>
              </div>
              <div>
                  <img src="https://78.media.tumblr.com/be0cf2b85084b6853cfe466be143c50c/tumblr_nk1aqvkSVE1qfirfao1_1280.jpg" alt="slide 2" />
                  <p className="legend">2</p>
              </div>
              <div>
                  <img src="https://78.media.tumblr.com/d7c481453083b063abbb52f4a4eaecd0/tumblr_nkeayvfSGM1qfirfao1_1280.jpg" alt="slide 3" />
                  <p className="legend">3</p>
              </div>
          </Carousel>
      );
  }
}

export default SlideShow;