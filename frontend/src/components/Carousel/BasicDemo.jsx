import Carousel from 'nuka-carousel';
// import {
//   renderCenterLeftControls,
//   renderCenterRightControls,
// } from './Controls';

import CarouselImgs from '../../../public/slider1.jpg'

const BasicDemo = ({
  wrapAround = true,
  autoplay = true,
  startIndex = 0,
}) => {
  return (
      <Carousel
        className='carousel'
        slideIndex={startIndex}
        wrapAround={wrapAround}
        autoplay={autoplay}
        autoplayInterval={6000}
        speed={2000}
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
      >
        <img className='carousel_img' src={CarouselImgs} width='1920px' height='980px' alt="" />
        <img className='carousel_img' src={CarouselImgs} width='1920px' height='980px' alt="" />
        <img className='carousel_img' src={CarouselImgs} width='1920px' height='980px' alt="" />
        <img className='carousel_img' src={CarouselImgs} width='1920px' height='980px' alt="" />
        <img className='carousel_img' src={CarouselImgs} width='1920px' height='980px' alt="" />
      </Carousel>
  );
};

export default BasicDemo;