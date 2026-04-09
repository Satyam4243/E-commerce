import React, { useContext, useEffect, useState } from "react";
import "./home.css";

import SliderBox from "../Home/Slider/slider";
import CatSlider from "../../components/CatSlider/catslider";
import Banners from "../../components/banners/banner";
import Product from "../../components/product/product";

import { MyContext } from "../../App";
import { fetchDataFromApi } from "../../utils/api";
import { Link } from "react-router-dom";
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
          // (slide) => slide.autoActive === true,
           (slide) => slide.isActive !== false,
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
                      {/* <a href={`/category/subCat/${sub._id}`}>
                        {sub.name}
                      </a> */}
                      <Link to={`/category/subCat/${sub._id}`}>{sub.name}</Link>
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
