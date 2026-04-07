// import React, { useContext } from "react";
// import "./home.css";

// import SliderBox from "../Home/Slider/slider";
// import CatSlider from "../../components/CatSlider/catslider";
// import Banners from "../../components/banners/banner";

// import PopularCategories from "../../components/popularCategories/PopularCategories";

// import { MyContext } from "../../App";

// const Home = () => {
//   const context = useContext(MyContext);

//   // Ensure categories always array
//   // const mainCategories = Array.isArray(context.categories)
//   //   ? context.categories
//   //   : [];

//   // // Get sub categories
//   // const featuredSubCategories = mainCategories.flatMap(
//   //   (cat) => cat.children || [],
//   // );

//   // const featuredCategories = context.categories || [];

//   // const popularCategories = context.categories?.flatMap(
//   //   (cat) => cat.children || [],
//   // );

//   const mainCategories = context.categories || [];

//   const subCategories = mainCategories.flatMap((cat) => cat.children || []);

//   return (
//     <>
//       <div style={{ display: "block" }}>
//         {/* Banner */}
//         <SliderBox />

//         <CatSlider data={mainCategories} title="Featured Categories" />

//         {Array.isArray(subCategories) && subCategories.length > 0 && (
//           <section className="popularCats">
//             <div className="container-fluid">
//               <div className="d-flex align-items-center">
//                 <h2 className="hd mb-0">Popular Categories</h2>

//                 <ul className="popularList list list-inline ms-auto mb-0">
//                   {subCategories.map((sub) => (
//                     <li key={sub._id} className="list-inline-item">
//                       <a href={`/category/subCat/${sub._id}`}>{sub.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>
//         )}

//         <Banners />

//         {/* <section className="homeProducts homeProductWrapper">
//           <div className="container-fluid">
//             <div className="d-flex align-items-center homeProductsTitleWrap">
//               <h2 className="hd mb-0 mt-0 res-full">Popular Products</h2>
//               <ul className="list list-inline ms-auto filterTab mb-0 res-full"> */}
//         {/* <li className="list-inline-item">
//                   <a className="cursor">All</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Milks & Cakes</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Coffes & Tea</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Pet Foods</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Meats</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Vegatables</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Fruits</a>
//                 </li> */}

//         {/* {catArr.length !== 0 &&
//                   catArr.map((cat, indeex) => {
//                     return (
//                       <li className="list list-inline-item">
//                         <a
//                           className={`cursor text-capitalize ${
//                             activeTabIndex === index ? "act" : ""
//                           }`}
//                           onClick={() => {
//                             setactiveTab(cat);
//                             setactiveTabIndex(index);
//                             productRow.current.scrollLeft = 0;
//                             setIsLoadingProducts(true);
//                           }}
//                         >
//                           {cat}
//                         </a>
//                       </li>
//                     );
//                   })}
//               </ul>
//             </div> */}

//         {/* <div className="productRow">
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
//               <Product tag="best" />
//             </div>
//             <div className="item">
//               <Product tag="hot" />
//             </div>
//             <div className="item">
//               <Product tag="sale" />
//             </div>
//             <div className="item">
//               <Product tag="new" />
//             </div>
//             <div className="item">
//               <Product tag="sale" />
//             </div>
//             <div className="item">
//               <Product tag="best" />
//             </div>
//             <div className="item">
//               <Product tag="sale" />
//             </div>
//            </div> */}
//         {/* <div className="productRow">
//               {loading ? (
//                 <p>Loading products...</p>
//               ) : (
//                 products.slice(0, 10).map((item, index) => (
//                   <div className="item" key={index}>
//                     <Product item={item} />
//                   </div>
//                 ))
//               )}
//             </div> */}
//         {/* <div
//               className={`productRow ${isLoadingProducts === true && "loading"}`}
//               ref={productRow}
//             >
//               {activeTabData.length !== 0 &&
//                 activeTabData.map((item, index) => {
//                   return (
//                     <div className="item" key={index}>
//                       <Product tag={item.type} item={item} />
//                     </div>
//                   );
//                 })}
//             </div> */}
//         {/* </div> */}
//         {/* </section> */}

//         {/* <section className="homeProducts homeProductsRow2 pt-0">
//           <div className="container-fluid">
//             <div className="d-flex align-items-center">
//               <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
//               <ul className="list list-inline ml-auto filterTab mb-0">
//                 <li className="list-inline-item">
//                   <a className="cursor">Featured</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">Popular</a>
//                 </li>
//                 <li className="list-inline-item">
//                   <a className="cursor">New Added</a>
//                 </li>
//               </ul>
//             </div>

//             <br />
//             <br />
//             <div className="row">
//               <div className="col-md-3 pr-5">
//                 <img src={Banner4} className="w-100" alt="" />
//               </div>

//               <div className="col-md-9">
//                 <Slider {...settings} className="prodSlider">
//                   <div className="item">
//                     <Product tag="sale" />
//                   </div>
//                   <div className="item">
//                     <Product tag="hot" />
//                   </div>
//                   <div className="item">
//                     <Product tag="new" />
//                   </div>
//                   <div className="item">
//                     <Product tag="sale" />
//                   </div>
//                   <div className="item">
//                     <Product tag="hot" />
//                   </div>
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* <section className="homeProducts homeProductsRow2 pt-0">
//           <div className="container-fluid">
//             <div className="d-flex align-items-center">
//               <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
//             </div>

//             <br className="res-hide" />
//             <br className="res-hide" />
//             <div className="row">
//               <div className="col-md-3 pr-5 res-hide">
//                 <img src={Banner4} className="w-100" />
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* <section className="topProductsSection">
//           <div className="container-fluid">
//             <div className="row text-center">
//               <div className="col">
//                 <TopProducts title="Top Selling" />
//               </div>

//               <div className="col">
//                 <TopProducts title="Trending Products" />
//               </div>

//               <div className="col">
//                 <TopProducts title="Recently Added" />
//               </div>

//               <div className="col">
//                 <TopProducts title="Top Rated" />
//               </div>
//             </div>
//           </div>
//         </section> */}
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useContext, useEffect, useState } from "react";
import "./home.css";

import SliderBox from "../Home/Slider/slider";
import CatSlider from "../../components/CatSlider/catslider";
import Banners from "../../components/banners/banner";
import Product from "../../components/product/product";

import { MyContext } from "../../App";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {
  const context = useContext(MyContext);

  const mainCategories = context.categories || [];
  const subCategories = mainCategories.flatMap((cat) => cat.children || []);

  // PRODUCTS STATE
  const [products, setProducts] = useState([]);
  const [homeSlides, setHomeSlides] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH ALL PRODUCTS
  useEffect(() => {
    fetchDataFromApi("/api/products?page=1&limit=8").then((res) => {
      if (res?.success) {
        setProducts(res.products);
      }
      setLoading(false);
    });
  }, []);

  //FETCH HOME SLIDER
  // useEffect(() =>{
  //   fetchDataFromApi("/api/homeBanner").then((res) => {
  //     if (res?.success){
  //       setHomeSlides(res.slides);
  //     }
  //   });
  // }, []); 
  // FETCH HOME SLIDER (ONLY ACTIVE)
useEffect(() => {
  fetchDataFromApi("/api/homeBanner").then((res) => {
    if (res?.success) {
      const activeSlides = res.slides.filter(
        (slide) => slide.autoActive === true
      );
      setHomeSlides(activeSlides);
    }
  });
}, []);

  // FETCH FEATURED PRODUCTS (Correct Route)
  useEffect(() => {
    fetchDataFromApi("/api/products/featured/list").then((res) => {
      if (res?.success) {
        setFeaturedProducts(res.products);
      }
    });
  }, []);

  return (
    <>
      <div style={{ display: "block" }}>

        {/* Banner */}
        <SliderBox data={homeSlides} />

        {/* Featured Categories */}
        <CatSlider data={mainCategories} title="Featured Categories" />

        {/* Popular Categories */}
        {Array.isArray(subCategories) && subCategories.length > 0 && (
          <section className="popularCats">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <h2 className="hd mb-0">Popular Categories</h2>

                <ul className="popularList list list-inline ms-auto mb-0">
                  {subCategories.map((sub) => (
                    <li key={sub._id} className="list-inline-item">
                      <a href={`/category/subCat/${sub._id}`}>
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <Banners />

        {/* POPULAR PRODUCTS SECTION */}
        {products.length > 0 && (
          <section className="homeProducts homeProductWrapper">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <h2 className="hd mb-0 mt-0">Popular Products</h2>
              </div>

              {loading ? (
                <p>Loading products...</p>
              ) : (
                <div className="productRow">
                  {products.map((item) => (
                    <div className="item" key={item._id}>
                      <Product item={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* FEATURED PRODUCTS */}
        {featuredProducts.length > 0 && (
          <section className="homeProducts homeProductsRow2 pt-0">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <h2 className="hd mb-0 mt-0">Featured Products</h2>
              </div>

              <div className="productRow">
                {featuredProducts.map((item) => (
                  <div className="item" key={item._id}>
                    <Product tag="featured" item={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
};

export default Home;
