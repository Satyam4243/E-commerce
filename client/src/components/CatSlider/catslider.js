import React, { useContext, useRef, useState } from "react";
import Slider from "react-slick";
import "./catslider.css";

import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const CatSlider = (props) => {
  const context = useContext(MyContext);

  const [itemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
  ]);

  const slider = useRef();

 var settings = {
  dots: false,
  // infinite: true,
  infinite: false,
  speed: 500,
  // slidesToShow: 8,
  slidesToShow: props.data.length < 6 ? props.data.length : 6,
  slidesToScroll: 1,
  fade: false,
  arrows: context.windowWidth > 992,
  autoplay: false,
  centerMode: false   
};

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid px-5">
          <h2 className="hd">{props.title}</h2>

          <Slider {...settings} className="cat_slider_Main">
            {Array.isArray(props?.data) &&
              props.data.map((cat, index) => (
                <div className="item" key={cat?._id || index}>
                  <Link
                    to={
                      cat?.parentId
                        ? `/category/subCat/${cat?._id}`
                        : `/category/${cat?._id}`
                    }
                  >
                    <div
                      className="info"
                      style={{ background: itemBg[index % itemBg.length] }}
                    >
                      <img
                        src={
                          cat?.images?.length > 0
                            ? `${process.env.REACT_APP_BASE_URL}/uploads/${cat.images[0]}`
                            : "/no-image.png"
                        }
                        alt={cat?.name}
                        width="100"
                      />

                      <h5 className="text-capitalize mt-3">{cat?.name}</h5>
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      </div>

      <br />
    </>
  );
};

export default CatSlider;
