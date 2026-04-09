// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// import Rating from "@mui/material/Rating";

// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/styles.min.css";

// import Maggi1 from "../../assets/images/maggi1.webp";
// import Maggi2 from "../../assets/images/maggi2.webp";
// import Maggi3 from "../../assets/images/maggi3.webp";
// import Maggi4 from "../../assets/images/maggi4.webp";
// import Maggi5 from "../../assets/images/maggi5.webp";
// import Maggi6 from "../../assets/images/maggi6.webp";
// import Maggi7 from "../../assets/images/maggi7.webp";
// import Maggi8 from "../../assets/images/maggi8.webp";

// import Slider from "react-slick";

// // import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// // import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import Button from "@mui/material/Button";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";

// import Author1 from "../../assets/images/author-1.png";
// import Author2 from "../../assets/images/author-2.png";
// import Author3 from "../../assets/images/author-3.png";

// import Product from "../../components/product/product";

// import QuantityBox from "../../components/quantityBox/quantity.js";

// const DetailsPage = () => {
//   const [zoomImage, setZoomImage] = useState(Maggi1);
//   const [activeThumb, setActiveThumb] = useState(0);
//   const [activeSize, setActiveSize] = useState(0);
// //   const [inputValue, setInputValue] = useState(1);

//   const [activeTabs, setActiveTabs] = useState(0);

//   const zoomSlider = useRef(null);

//   const images = [
//     Maggi1,
//     Maggi2,
//     Maggi3,
//     Maggi4,
//     Maggi5,
//     Maggi6,
//     Maggi7,
//     Maggi8,
//   ];

//   // Big zoom image slider (only 1 slide)
//   const settingsBig = {
//     dots: false,
//     arrows: false,
//     infinite: false,
//     slidesToShow: 1,
//   };

//   // Thumbnail slider
//   const settingsThumbs = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       { breakpoint: 768, settings: { slidesToShow: 4 } },
//       { breakpoint: 576, settings: { slidesToShow: 3 } },
//     ],
//   };

//   var related = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     fade: false,
//     arrows: true,
//   };

//   const goto = (index) => {
//     setZoomImage(images[index]);
//     setActiveThumb(index);

//     if (zoomSlider.current && zoomSlider.current.slickGoTo) {
//       zoomSlider.current.slickGoTo(index);
//     }
//   };

// //   const increment = () => setInputValue((prev) => prev + 1);
// //   const decrement = () => setInputValue((prev) => (prev > 1 ? prev - 1 : 1));

//   return (
//     <section className="detailsPage mb-5">
//       <div className="breadcrumbWrapper mb-4">
//         <div className="container-fluid">
//           <ul className="breadcrumb breadcrumb2 mb-0">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/category/vegetables-tubers">
//                 Vegetables &amp; Tubers
//               </Link>
//             </li>
//             <li>Seeds Of Change Organic</li>
//           </ul>
//         </div>
//       </div>

//       <div className="container detailsContainer pt-3 pb-3">
//         <div className="row">
//           {/* LEFT — Image Section */}
//           <div className="col-md-5">
//             <Slider {...settingsBig} className="zoomSliderBig">
//               <div className="item">
//                 <InnerImageZoom
//                   src={zoomImage}
//                   zoomSrc={zoomImage}
//                   zoomType="hover"
//                   zoomScale={1.5}
//                   alt="Product"
//                 />
//               </div>
//             </Slider>

//             <Slider
//               {...settingsThumbs}
//               className="zoomSlider mt-3"
//               ref={zoomSlider}
//             >
//               {images.map((img, idx) => (
//                 <div className="item" key={idx}>
//                   <img
//                     src={img}
//                     alt={`thumb-${idx}`}
//                     className={`w-100 thumbnail ${activeThumb === idx ? "active" : ""}`}
//                     onClick={() => goto(idx)}
//                     style={{ cursor: "pointer", borderRadius: 8 }}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* RIGHT — Product Info */}
//           <div className="col-md-7 productInfo">
//             <h1>Seeds of Change Organic Quinoa, Brown</h1>

//             <div className="d-flex align-items-center mb-3 mt-3">
//               <Rating defaultValue={3.5} precision={0.5} readOnly />
//               <span className="text-muted ms-2">(32 reviews)</span>
//             </div>

//             {/* PRICE */}
//             <div className="priceSec d-flex align-items-center mb-3 gap-3">
//               <span className="text-g priceLarge">$38</span>
//               <div className="d-flex flex-column">
//                 <span className="text-org">26% Off</span>
//                 <span className="text-muted oldPrice text-decoration-line-through">
//                   $52
//                 </span>
//               </div>
//             </div>

//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
//               rem officia, corrupti reiciendis minima nisi modi.
//             </p>

//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
//               rem officia, corrupti reiciendis minima nisi modi.
//             </p>

//             {/* SIZE SELECTOR */}
//             <div className="productSize d-flex align-items-center mt-3">
//               <span>Size / Weight:</span>

//               <ul className="list list-inline mb-0 ms-3">
//                 {["50g", "60g", "80g", "100g", "150g"].map((label, idx) => (
//                   <li className="list-inline-item" key={idx}>
//                     <button
//                       type="button"
//                       className={`tag ${activeSize === idx ? "active" : ""}`}
//                       onClick={() => setActiveSize(idx)}
//                     >
//                       {label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* CART SECTION */}
//             <div className="d-flex align-items-center">
//               <div>
//                 <QuantityBox />
//               </div>

//               <div className="d-flex align-items-center gap-3 ms-3 ">
//                 <Button className="btn-g btn-lg addtocartbtn">
//                   <ShoppingCartOutlinedIcon className="me-1" /> Add To Cart
//                 </Button>

//                 <Button className="btn-lg addtocartbtn btn-border">
//                   <FavoriteBorderOutlinedIcon />
//                 </Button>

//                 <Button className="btn-lg addtocartbtn btn-border">
//                   <CompareArrowsOutlinedIcon />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card mt-5 p-5 detailsPageTabs">
//           <div className="customTabs">
//             <ul className="d-flex list list-inline ">
//               <li className="list-inline-items">
//                 <Button
//                   className={`${activeTabs === 0 && "active"}`}
//                   onClick={() => setActiveTabs(0)}
//                 >
//                   Description
//                 </Button>
//               </li>

//               <li className="list-inline-items">
//                 <Button
//                   className={`${activeTabs === 1 && "active"}`}
//                   onClick={() => setActiveTabs(1)}
//                 >
//                   Additional info
//                 </Button>
//               </li>

//               <li className="list-inline-items">
//                 <Button
//                   className={`${activeTabs === 2 && "active"}`}
//                   onClick={() => setActiveTabs(2)}
//                 >
//                   Reviews (3)
//                 </Button>
//               </li>
//             </ul>
//             <br />

//             {activeTabs === 0 && (
//               <div className="tabContent">
//                 <p>
//                   Maggi 2-Minutes Masala Noodles has been a classic Indian snack
//                   for a good few decades now. These Maggi noodles offer you the
//                   delicious masala flavour that will leave you wanting for more.
//                   It is not just loved by young ones but adults too. For every
//                   busy day or lazy evening, these noodles are easy to make and
//                   are perfect for those untimely hunger pangs. They are made
//                   with finest quality ingredients that offers you a lip-smacking
//                   taste. So go ahead, buy Maggi 2-Minute Masala Instant Noodle
//                   online today!
//                 </p>

//                 <p>
//                   Despite our attempts to provide you with the most accurate
//                   information possible, the actual packaging, ingredients and
//                   colour of the product may sometimes vary. Please read the
//                   label, directions and warnings carefully before use.
//                 </p>

//                 <br />

//                 <h2>Packaging & Delivery</h2>
//                 <p>
//                   Maggi 2-Minutes Masala Noodles has been a classic Indian snack
//                   for a good few decades now. These Maggi noodles offer you the
//                   delicious masala flavour that will leave you wanting for more.
//                   It is not just loved by young ones but adults too. For every
//                   busy day or lazy evening, these noodles are easy to make and
//                   are perfect for those untimely hunger pangs. They are made
//                   with finest quality ingredients that offers you a lip-smacking
//                   taste. So go ahead, buy Maggi 2-Minute Masala Instant Noodle
//                   online today!
//                 </p>

//                 <p>
//                   Despite our attempts to provide you with the most accurate
//                   information possible, the actual packaging, ingredients and
//                   colour of the product may sometimes vary. Please read the
//                   label, directions and warnings carefully before use.
//                 </p>

//                 <br />

//                 <h2>Suggested Use</h2>
//                 <p>
//                   Maggi 2-Minutes Masala Noodles has been a classic Indian snack
//                   for a good few decades now. These Maggi noodles offer you the
//                   delicious masala flavour that will leave you wanting for more.
//                   It is not just loved by young ones but adults too. For every
//                   busy day or lazy evening, these noodles are easy to make and
//                   are perfect for those untimely hunger pangs. They are made
//                   with finest quality ingredients that offers you a lip-smacking
//                   taste. So go ahead, buy Maggi 2-Minute Masala Instant Noodle
//                   online today!
//                 </p>

//                 <p>
//                   Despite our attempts to provide you with the most accurate
//                   information possible, the actual packaging, ingredients and
//                   colour of the product may sometimes vary. Please read the
//                   label, directions and warnings carefully before use.
//                 </p>
//               </div>
//             )}

//             {activeTabs === 1 && (
//               <div className="tabContent">
//                 <div className="table-responsive">
//                   <table className="table table-bordered">
//                     <tbody>
//                       <tr className="stand-up">
//                         <th>Stand Up</th>
//                         <td>
//                           <p>35"L * 25"W * 37-45"H(front to back wheel)</p>
//                         </td>
//                       </tr>
//                       <tr className="folded-wo-wheels">
//                         <th>Folded (w/o wheels)</th>
//                         <td>
//                           <p>32.5"L * 18.5"W * 16.5"H</p>
//                         </td>
//                       </tr>
//                       <tr className="folded-wo-wheels">
//                         <th>Folded (w/o wheels)</th>
//                         <td>
//                           <p>32.5"L * 18.5"W * 18.5"H</p>
//                         </td>
//                       </tr>
//                       <tr className="door-pass-through">
//                         <th>Door pass Through</th>
//                         <td>
//                           <p>24</p>
//                         </td>
//                       </tr>
//                       <tr className="frame">
//                         <th>Frame</th>
//                         <td>
//                           <p>Aluminium</p>
//                         </td>
//                       </tr>
//                       <tr className="weight-wo-wheels">
//                         <th>Weight (w/o wheels)</th>
//                         <td>
//                           <p>20LBS</p>
//                         </td>
//                       </tr>
//                       <tr className="width">
//                         <th>Width</th>
//                         <td>
//                           <p>24"</p>
//                         </td>
//                       </tr>
//                       <tr className="handle-height-ground-to-handle">
//                         <th>Handle height (ground to handle)</th>
//                         <td>
//                           <p>37-45"</p>
//                         </td>
//                       </tr>

//                       <tr className="wheels">
//                         <th>Wheels</th>
//                         <td>
//                           <p>12" air / wide track slick tread</p>
//                         </td>
//                       </tr>

//                       <tr className="seat-back-height">
//                         <th>Seat Back Height</th>
//                         <td>
//                           <p>21.5"</p>
//                         </td>
//                       </tr>
//                       <tr className="head-room-inside-canopy">
//                         <th>Head room (inside canopy)</th>
//                         <td>
//                           <p>25"</p>
//                         </td>
//                       </tr>
//                       <tr className="pa_color">
//                         <th>Color</th>
//                         <td>
//                           <p>Black, Blue, Red, White</p>
//                         </td>
//                       </tr>
//                       <tr className="pa_size">
//                         <th>Size</th>
//                         <td>
//                           <p>M, S</p>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {activeTabs === 2 && (
//               <div className="tabContent">
//                 <div className="row">
//                   <div className="col-md-8">
//                     <h3>Customer question & answers</h3>
//                     <br />

//                     <div className="card p-4 reviewsCard flex-row">
//                       <div className="image">
//                         <div className="rounded-circle ">
//                           <img
//                             src={Author1}
//                             alt="Reviewer"
//                             className="w-100 h-100"
//                           />
//                         </div>
//                         <span className="text-g d-block text-center font-weight-bold mt-2">
//                           Sienna
//                         </span>
//                       </div>

//                       <div className="info ms-4 ">
//                         <div className="d-flex align-items-center">
//                           <h5 className="text-light mb-0">
//                             December 9, 2025 at 12:05 pm
//                           </h5>
//                           <div className="ms-auto">
//                             <Rating
//                               name="half-rating-read"
//                               defaultValue={2.5}
//                               precision={0.5}
//                               readOnly
//                             />
//                           </div>
//                         </div>

//                         <p className="mt-3 mb-0">
//                           Lorem ipsum dolor sit amet consectetur, adipisicing
//                           elit. Praesentium eius provident aliquid, vel
//                           inventore deserunt corrupti ratione esse dolor ducimus
//                           enim iste reprehenderit rem voluptas optio ipsum
//                           placeat distinctio deleniti, quos sunt sequi porro
//                           animi!
//                         </p>
//                       </div>
//                     </div>

//                     <div className="card p-4 reviewsCard flex-row">
//                       <div className="image">
//                         <div className="rounded-circle">
//                           <img
//                             src={Author2}
//                             alt="Reviewer"
//                             className="w-100 h-100"
//                           />
//                         </div>
//                         <span className="text-g d-block text-center font-weight-bold mt-2">
//                           Sara
//                         </span>
//                       </div>

//                       <div className="info ms-4 ">
//                         <div className="d-flex align-items-center">
//                           <h5 className="text-light mb-0">
//                             September 13, 2025 at 4:40 am
//                           </h5>
//                           <div className="ms-auto">
//                             <Rating
//                               name="half-rating-read"
//                               defaultValue={4.2}
//                               precision={0.2}
//                               readOnly
//                             />
//                           </div>
//                         </div>

//                         <p className="mt-3 mb-0">
//                           Lorem ipsum dolor sit amet consectetur, adipisicing
//                           elit. Praesentium eius provident aliquid, vel
//                           inventore deserunt corrupti ratione esse dolor ducimus
//                           enim iste reprehenderit rem voluptas optio ipsum
//                           placeat distinctio deleniti, quos sunt sequi porro
//                           animi!
//                         </p>
//                       </div>
//                     </div>

//                     <div className="card p-4 reviewsCard flex-row">
//                       <div className="image">
//                         <div className="rounded-circle">
//                           <img
//                             src={Author3}
//                             alt="Reviewer"
//                             className="w-100 h-100"
//                           />
//                         </div>
//                         <span className="text-g d-block text-center font-weight-bold mt-2">
//                           Maria
//                         </span>
//                       </div>

//                       <div className="info ms-4 ">
//                         <div className="d-flex align-items-center">
//                           <h5 className="text-light mb-0">
//                             June 24, 2025 at 1:05 am
//                           </h5>
//                           <div className="ms-auto">
//                             <Rating
//                               name="half-rating-read"
//                               defaultValue={4.5}
//                               precision={0.5}
//                               readOnly
//                             />
//                           </div>
//                         </div>

//                         <p className="mt-3 mb-0">
//                           Lorem ipsum dolor sit amet consectetur, adipisicing
//                           elit. Praesentium eius provident aliquid, vel
//                           inventore deserunt corrupti ratione esse dolor ducimus
//                           enim iste reprehenderit rem voluptas optio ipsum
//                           placeat distinctio deleniti, quos sunt sequi porro
//                           animi!
//                         </p>
//                       </div>
//                     </div>

//                     <div className="card p-4 reviewsCard flex-row">
//                       <div className="image">
//                         <div className="rounded-circle">
//                           <img
//                             src={Author1}
//                             alt="Reviewer"
//                             className="w-100 h-100"
//                           />
//                         </div>
//                         <span className="text-g d-block text-center font-weight-bold mt-2">
//                           Ana
//                         </span>
//                       </div>

//                       <div className="info ms-4 ">
//                         <div className="d-flex align-items-center">
//                           <h5 className="text-light mb-0">
//                             January 4, 2025 at 3:10 pm
//                           </h5>
//                           <div className="ms-auto">
//                             <Rating
//                               name="half-rating-read"
//                               defaultValue={3.5}
//                               precision={0.5}
//                               readOnly
//                             />
//                           </div>
//                         </div>

//                         <p className="mt-3 mb-0">
//                           Lorem ipsum dolor sit amet consectetur, adipisicing
//                           elit. Praesentium eius provident aliquid, vel
//                           inventore deserunt corrupti ratione esse dolor ducimus
//                           enim iste reprehenderit rem voluptas optio ipsum
//                           placeat distinctio deleniti, quos sunt sequi porro
//                           animi!
//                         </p>
//                       </div>
//                     </div>

//                     <br />
//                     <br />

//                     <form className="reviewForm">
//                       <h4>Add a Review</h4> <br />
//                       <div className="form-group mt-3">
//                         <textarea
//                           className="form-control"
//                           placeholder="Write a review"
//                           rows="5"
//                           cols="100"
//                         ></textarea>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Name"
//                             />
//                           </div>
//                         </div>

//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <input
//                               type="email"
//                               className="form-control"
//                               placeholder="E-mail"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="form-group mt-3">
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Website"
//                         />
//                       </div>
//                       <div className="form-group">
//                         <Button className="btn-lg btn-g mt-3">
//                           Submit Review
//                         </Button>
//                       </div>
//                     </form>
//                   </div>

//                   <div className="col-md-4 ps-5">
//                     <h4>Customer Reviews</h4>

//                     <div className="d-flex align-items-center mt-3">
//                       <Rating
//                         name="half-rating-read"
//                         defaultValue={4.8}
//                         precision={0.1}
//                         readOnly
//                       />
//                       <strong className="ms-3">4.8 out of 5</strong>
//                     </div>

//                     <br />

//                     <div className="progressBarBox d-flex align-items-center">
//                       <span className="me-3">5 star</span>
//                       <div
//                         className="progress"
//                         style={{ width: "85%", height: "20px" }}
//                       >
//                         <div
//                           className="progress-bar bg-success"
//                           style={{ width: "90%", height: "20px" }}
//                         >
//                           90%
//                         </div>
//                       </div>
//                     </div>
//                     <div className="progressBarBox d-flex align-items-center">
//                       <span className="me-3">4 star</span>
//                       <div
//                         className="progress"
//                         style={{ width: "85%", height: "20px" }}
//                       >
//                         <div
//                           className="progress-bar bg-success"
//                           style={{ width: "83%", height: "20px" }}
//                         >
//                           83%
//                         </div>
//                       </div>
//                     </div>
//                     <div className="progressBarBox d-flex align-items-center">
//                       <span className="me-3">3 star</span>
//                       <div
//                         className="progress"
//                         style={{ width: "85%", height: "20px" }}
//                       >
//                         <div
//                           className="progress-bar bg-success"
//                           style={{ width: "70%", height: "20px" }}
//                         >
//                           70%
//                         </div>
//                       </div>
//                     </div>
//                     <div className="progressBarBox d-flex align-items-center">
//                       <span className="me-3">2 star</span>
//                       <div
//                         className="progress"
//                         style={{ width: "85%", height: "20px" }}
//                       >
//                         <div
//                           className="progress-bar bg-success"
//                           style={{ width: "45%", height: "20px" }}
//                         >
//                           45%
//                         </div>
//                       </div>
//                     </div>
//                     <div className="progressBarBox d-flex align-items-center">
//                       <span className="me-3">1 star</span>
//                       <div
//                         className="progress"
//                         style={{ width: "85%", height: "20px" }}
//                       >
//                         <div
//                           className="progress-bar bg-success"
//                           style={{ width: "20%", height: "20px" }}
//                         >
//                           20%
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <br />

//         <div className="relatedProducts pt-5 pb-4">
//           <h2 className="hd mb-0 mt-0">Related Products</h2>
//           <br />
//           <Slider {...related} className="prodSlider">
//             <div className="item">
//               <Product tag="sale" />
//             </div>
//             <div className="item">
//               <Product tag="hot" />
//             </div>
//             <div className="item">
//               <Product tag="new" />
//             </div>
//             <div className="item">
//               <Product tag="sale" />
//             </div>
//             <div className="item">
//               <Product tag="hot" />
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DetailsPage;

import React, { useState, useEffect } from "react";
import "./details.css";

import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import Slider from "react-slick";

import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";

import Product from "../../components/product/product";
import QuantityBox from "../../components/quantityBox/quantity.js";

import { postData } from "../../utils/api.js";
import { useContext } from "react";
import { MyContext } from "../../App.js";

import { Link } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  const context = useContext(MyContext);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [zoomImage, setZoomImage] = useState("");
  const [activeThumb, setActiveThumb] = useState(0);

  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    userName: "",
    rating: 1,
    comment: "",
  });

  useEffect(() => {
    fetchDataFromApi(`/api/products/reviews/${id}`).then((res) => {
      if (res?.reviews) {
        setReviews(res.reviews);
      }
    });
  }, [id]);

  // ================= SCROLL TO TOP =================
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ================= FETCH PRODUCT =================
  useEffect(() => {
    fetchDataFromApi(`/api/products/${id}`).then((res) => {
      if (res?.product) {
        setProduct(res.product);

        if (res.product.images?.length > 0) {
          // setZoomImage(res.product.images[0]);
          setZoomImage(
            `http://localhost:8000/uploads/${res.product.images[0]}`,
          );
        }

        // ================= FETCH RELATED AFTER PRODUCT LOAD =================
        if (res.product.category?._id) {
          fetchDataFromApi(
            `/api/products?category=${res.product.category._id}&limit=8`,
          ).then((relatedRes) => {
            if (relatedRes?.products) {
              // exclude current product
              const filtered = relatedRes.products.filter(
                (item) => item._id !== id,
              );
              setRelatedProducts(filtered);
            }
          });
        }
      }
    });
  }, [id]);

  if (!product) {
    return <div className="container mt-5">Loading...</div>;
  }

  const images = product.images || [];

  const goto = (index) => {
    // setZoomImage(images[index]);
    setZoomImage(`http://localhost:8000/uploads/${images[index]}`);
    setActiveThumb(index);
  };

  const settingsThumbs = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    arrows: true,
  };

  const related = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
  };

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const res = await postData("/api/cart", {
        productId: product._id,
        userId: user._id || user.id || user.uid,
        quantity: 1,
      });

      if (res?.success) {
        context.getCartCount(); // header count update

        alert("Product added to cart ✅");
      } else {
        alert(res?.message || "Failed to add product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const res = await postData(`/api/products/addReview/${id}`, {
        userName: user.name || "User",
        rating: reviewForm.rating,
        comment: reviewForm.comment,
      });

      if (res?.success) {
        alert("Review added ✅");

        setReviewForm({
          userName: "",
          rating: 1,
          comment: "",
        });

        setReviews(res.reviews);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="detailsPage mb-5">
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to="/">Home</Link>
            </li>

            {product?.category && (
              <li>
                <Link to={`/category/${product.category._id}`}>
                  {product.category.name}
                </Link>
              </li>
            )}

            {product?.subCategory && (
              <li>
                <Link to={`/category/subCat/${product.subCategory._id}`}>
                  {product.subCategory.name}
                </Link>
              </li>
            )}

            <li>{product?.name}</li>
          </ul>
        </div>
      </div>
      <div className="container detailsContainer pt-3 pb-3">
        <div className="row">
          {/* LEFT IMAGE SECTION */}
          <div className="col-md-5">
            <div className="item">
              <InnerImageZoom
                src={zoomImage || "https://via.placeholder.com/400"}
                zoomSrc={zoomImage}
                zoomType="hover"
                zoomScale={1.5}
              />
            </div>

            <Slider {...settingsThumbs} className="zoomSlider mt-3">
              {images.map((img, idx) => (
                <div className="item" key={idx}>
                  <img
                    // src={img}
                    src={`http://localhost:8000/uploads/${img}`}
                    alt=""
                    className={`w-100 thumbnail ${
                      activeThumb === idx ? "active" : ""
                    }`}
                    onClick={() => goto(idx)}
                    style={{ cursor: "pointer", borderRadius: 8 }}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* RIGHT INFO SECTION */}
          <div className="col-md-7 productInfo">
            <h1>{product.name}</h1>

            <div className="d-flex align-items-center mb-3 mt-3">
              <Rating value={product.rating || 0} precision={0.5} readOnly />
              <span className="text-muted ms-2">
                ({product.rating || 0} Rating)
              </span>
            </div>

            <div className="priceSec d-flex align-items-center mb-3 gap-3">
              <span className="text-g priceLarge">₹{product.price}</span>

              {product.oldPrice > 0 && (
                <span className="text-muted oldPrice text-decoration-line-through">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>

            <p>{product.description}</p>

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Stock:</strong>{" "}
              {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />

              <div className="d-flex align-items-center gap-3 ms-3">
                <Button
                  className="btn-g btn-lg addtocartbtn"
                  onClick={handleAddToCart}
                >
                  <ShoppingCartOutlinedIcon className="me-1" />
                  Add To Cart
                </Button>

                <Button className="btn-lg btn-border">
                  <FavoriteBorderOutlinedIcon />
                </Button>

                <Button className="btn-lg btn-border">
                  <CompareArrowsOutlinedIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="reviewsSection mt-5">
          <h3>Customer Reviews</h3>

          {/* REVIEW FORM */}
          <form onSubmit={handleReviewSubmit} className="reviewForm mt-3">
            <div className="mb-2">
              <Rating
                value={reviewForm.rating}
                onChange={(e, newValue) =>
                  setReviewForm({ ...reviewForm, rating: newValue })
                }
              />
            </div>

            <textarea
              name="comment"
              value={reviewForm.comment}
              onChange={handleReviewChange}
              placeholder="Write your review..."
              className="form-control mb-2"
              required
            />

            <Button type="submit" className="btn-blue">
              Submit Review
            </Button>
          </form>

          {/* REVIEW LIST */}
          <div className="reviewList mt-4">
            {reviews.length === 0 && <p>No reviews yet</p>}

            {reviews.map((rev, index) => (
              <div key={index} className="reviewItem mb-3">
                <h6>{rev.userName}</h6>
                <Rating value={rev.rating} readOnly size="small" />
                <p>{rev.comment}</p>
                <small>{new Date(rev.date).toLocaleDateString()}</small>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="relatedProducts pt-5 pb-4">
            <h2 className="hd mb-0 mt-0">Related Products</h2>
            <br />
            <Slider {...related} className="prodSlider">
              {relatedProducts.map((item) => (
                <div className="item" key={item._id}>
                  <Product item={item} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailsPage;
