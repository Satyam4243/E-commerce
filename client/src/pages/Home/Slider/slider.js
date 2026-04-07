// // import React from 'react';
// // import Slider from 'react-slick';   // react-slick slider
// // import './slider.css';

// // import Slide1 from '../../../assets/images/slider-1.jpg';
// // import Slide2 from '../../../assets/images/slider-2.jpg';

// // import Newsletter from '../../../components/newsletter/newsLetter';

// // import Button from '@mui/material/Button';

// // const SliderBox = () => {

// //   var settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     fade: true,
// //     arrows: true
// //   };

// //   return (
// //     <section className='homeSlider'>

// //       <div className='container-fluid position-relative'>

// //         <Slider {...settings} className='home_slider_main'>
// //           <div className='item'>
// //             <img src={Slide1} className='w-100' alt="Grocery deals banner" />
// //             <div className='info'>
// //               <h2 className="mb-4">
// //                 Don't miss Amazing<br />
// //                 grocery deals
// //               </h2>
// //               <p>Sign up for the daily newsletter</p>
// //             </div>
// //           </div>
// //           <div className='item'>
// //             <img src={Slide2} className='w-100' alt="Fresh products banner" />
// //           </div>
// //         </Slider>

// //         <Newsletter />

// //       </div>
// //     </section>
// //   );
// // };

// // export default SliderBox;

// import React from "react";
// import Slider from "react-slick";
// import "./slider.css";

// import Newsletter from "../../../components/newsletter/newsLetter";

// const SliderBox = ({ data }) => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     arrows: true,
//   };

  

//   return (
//     <section className="homeSlider">
//       <div className="container-fluid position-relative">
//         <Slider {...settings} className="home_slider_main">
//           {Array.isArray(data) && data.length > 0 ? (
//             data.map(
//               (slide, slideIndex) =>
//                 Array.isArray(slide.images) &&
//                 slide.images.map((img, imgIndex) => (
//                   <div className="item" key={`${slideIndex}-${imgIndex}`}>
//                     <img src={img} className="w-100" alt="Home banner" />
//                   </div>
//                 )),
//             )
//           ) : (
//             <div className="item">
//               <div style={{ padding: "100px", textAlign: "center" }}>
//                 <h4>No Slides Available</h4>
//               </div>
//             </div>
//           )}
//         </Slider>

//         <Newsletter />
//       </div>
//     </section>
//   );
// };

// export default SliderBox;

import React from "react";
import Slider from "react-slick";
import "./slider.css";

import Newsletter from "../../../components/newsletter/newsLetter";

const SliderBox = ({ data }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,          // ✅ auto slide
    autoplaySpeed: 3000,     // ✅ 3 sec
  };

  // ✅ Filter active banners
  const activeSlides = Array.isArray(data)
    ? data.filter((slide) => slide.autoActive !== false)
    : [];

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">

        <Slider {...settings} className="home_slider_main">

          {activeSlides.length > 0 ? (
            activeSlides.map((slide, slideIndex) =>
              slide.images?.map((img, imgIndex) => (
                <div className="item" key={`${slideIndex}-${imgIndex}`}>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/uploads/${img}`}
                    className="w-100"
                    alt="Home banner"
                  />
                </div>
              ))
            )
          ) : (
            <div className="item">
              <div style={{ padding: "100px", textAlign: "center" }}>
                <h4>No Active Slides</h4>
              </div>
            </div>
          )}

        </Slider>

        <Newsletter />
      </div>
    </section>
  );
};

export default SliderBox;