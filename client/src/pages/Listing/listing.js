// import React, { useState } from 'react'
// // import './listing.css';
// import { Link } from 'react-router-dom';
// import Sidebar from '../../components/sidebar/sideBar';
// import Product from '../../components/product/product';
// import { Button } from '@mui/material';

// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

// const Listing = () => {
//     const [isOpenDropDown, setisOpenDropDown] = useState(false);
//     const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
//     return (
//         <section className='listingPage'>
//             <div className='container-fluid'>
//                 <div className='breadcrumb flex-column'>
//                     <h1>Snack</h1>
//                     <ul className='list list-inline mb-0'>
//                         <li className='list-inline-item'>
//                             <Link to={''}>Home</Link>
//                         </li>
//                         <li className='list-inline-item'>
//                             <Link to={''}>Shop</Link>
//                         </li>
//                         <li className='list-inline-item'>
//                             <Link to={''}>Snack</Link>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className='listingData'>
//                     <div className='row'>
//                         <div className='col-md-3 sidebarWrapper'>
//                             <Sidebar />
//                         </div>

//                         <div className='col-md-9 rightContent homeProducts pt-0'>

//                             <div className='topStrip d-flex align-items-center'>
//                                 <p className='mb-0'>We Found <span className='text-success'>29</span> item for you!</p>

//                                 <div className='ms-auto d-flex align-items-center gap-1'>
//                                     <div className='tab_ position-relative'>
//                                         <Button className='btn_' onClick={() => setisOpenDropDown(!isOpenDropDown)}>
//                                             <GridViewOutlinedIcon/> Show: 50</Button>
//                                         {
//                                             isOpenDropDown !== false &&
//                                             <ul className='dropdownMenu'>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>50</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>100</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>150</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>200</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown(false)}>All</Button></li>
//                                             </ul>
//                                         }
//                                     </div>

//                                     <div className='tab_ ml-3 position-relative'>
//                                         <Button className='btn_' onClick={() => setisOpenDropDown2(!isOpenDropDown2)}>
//                                             <FilterListOutlinedIcon/>Sort by: Featured</Button>
//                                         {
//                                             isOpenDropDown2 !== false &&
//                                             <ul className='dropdownMenu'>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Featured</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Price: Low to High</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Price: High to Low</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Release Date</Button></li>
//                                                 <li><Button className='align-items-center' onClick={() => setisOpenDropDown2(false)}>Avg. Rating</Button></li>
//                                             </ul>
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='productRow ms-auto pr-2'>
//                                 <div className='item'>
//                                     <Product tag="sale"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="sale"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="best"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="sale"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="sale"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="best"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="best"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="sale"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="best"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product />
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product />
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="hot"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product />
//                                 </div>
//                                 <div className='item'>
//                                     <Product />
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product />
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="best"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="best"/>
//                                 </div>
//                                 <div className='item'>
//                                     <Product tag="new"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Listing;

import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/sideBar";
import Product from "../../components/product/product";
import { Button } from "@mui/material";
import { fetchDataFromApi } from "../../utils/api";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const Listing = () => {
  const { id } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");
  const subCategory = queryParams.get("subCategory");
  const rating = queryParams.get("rating");

  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenDropDown2, setisOpenDropDown2] = useState(false);

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [sort, setSort] = useState("latest");

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    // let url = `/api/products?page=${page}&limit=${limit}`;

    // // CATEGORY
    // if (id) {
    //   url += `&category=${id}`;
    // }

    // // SUB CATEGORY
    // if (subCategory) {
    //   url += `&subCategory=${subCategory}`;
    // }

    // // PRICE FILTER
    // if (minPrice && maxPrice) {
    //   url += `&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    // }

    // // RATING FILTER
    // if (rating) {
    //   url += `&rating=${rating}`;
    // }
    let url = "";

    if (searchQuery) {
      url = `/api/products/search?q=${searchQuery}`;
    } else {
      url = `/api/products?page=${page}&limit=${limit}`;

      if (id) {
        url += `&category=${id}`;
      }

      if (subCategory) {
        url += `&subCategory=${subCategory}`;
      }

      if (minPrice && maxPrice) {
        url += `&minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }

      if (rating) {
        url += `&rating=${rating}`;
      }
    }

    // fetchDataFromApi(url).then((res) => {
    //   if (res?.products) {
    //     let fetchedProducts = res.products;

    //     // CLIENT SIDE SORTING
    //     if (sort === "low") {
    //       fetchedProducts = [...fetchedProducts].sort(
    //         (a, b) => a.price - b.price,
    //       );
    //     }

    //     if (sort === "high") {
    //       fetchedProducts = [...fetchedProducts].sort(
    //         (a, b) => b.price - a.price,
    //       );
    //     }

    //     // setProducts(fetchedProducts);
    //     // setTotalProducts(res.totalProducts);
    //     setProducts(fetchedProducts);
    //     setTotalProducts(fetchedProducts.length);
    //   }
    // });
   
    fetchDataFromApi(url).then((res) => {
      const fetchedProducts = res?.products || [];

      if (fetchedProducts.length > 0) {
        // CLIENT SIDE SORTING
        if (sort === "low") {
          fetchedProducts.sort((a, b) => a.price - b.price);
        }

        if (sort === "high") {
          fetchedProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(fetchedProducts);
        setTotalProducts(fetchedProducts.length);
      } else {
        setProducts([]);
        setTotalProducts(0);
      }
    });
  }, [
    id,
    page,
    limit,
    sort,
    minPrice,
    maxPrice,
    subCategory,
    rating,
    searchQuery,
  ]);

  return (
    <section className="listingPage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          {/* <h1>Products</h1> */}
          <h1>
            {searchQuery ? `Search Results for "${searchQuery}"` : "Products"}
          </h1>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Listing</Link>
            </li>
          </ul>
        </div>

        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              <Sidebar />
            </div>

            <div className="col-md-9 rightContent homeProducts pt-0">
              {/* TOP STRIP */}
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">
                  We Found <span className="text-success">{totalProducts}</span>{" "}
                  items for you!
                </p>

                <div className="ms-auto d-flex align-items-center gap-1">
                  {/* SHOW LIMIT */}
                  <div className="tab_ position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setisOpenDropDown(!isOpenDropDown)}
                    >
                      <GridViewOutlinedIcon /> Show: {limit}
                    </Button>

                    {isOpenDropDown && (
                      <ul className="dropdownMenu">
                        {[12, 24, 36, 50].map((num) => (
                          <li key={num}>
                            <Button
                              onClick={() => {
                                setLimit(num);
                                setPage(1);
                                setisOpenDropDown(false);
                              }}
                            >
                              {num}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* SORT */}
                  <div className="tab_ ml-3 position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setisOpenDropDown2(!isOpenDropDown2)}
                    >
                      <FilterListOutlinedIcon /> Sort by: {sort}
                    </Button>

                    {isOpenDropDown2 && (
                      <ul className="dropdownMenu">
                        <li>
                          <Button
                            onClick={() => {
                              setSort("latest");
                              setisOpenDropDown2(false);
                            }}
                          >
                            Latest
                          </Button>
                        </li>
                        <li>
                          <Button
                            onClick={() => {
                              setSort("low");
                              setisOpenDropDown2(false);
                            }}
                          >
                            Price: Low to High
                          </Button>
                        </li>
                        <li>
                          <Button
                            onClick={() => {
                              setSort("high");
                              setisOpenDropDown2(false);
                            }}
                          >
                            Price: High to Low
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* PRODUCT GRID */}
              <div className="productRow ms-auto pr-2">
                {products.length > 0 ? (
                  products.map((item) => (
                    <div className="item" key={item._id}>
                      <Product item={item} />
                    </div>
                  ))
                ) : (
                  <p>No Products Found</p>
                )}
              </div>

              {/* PAGINATION */}
              <div className="d-flex justify-content-center mt-4">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Prev
                </Button>

                <span className="mx-3 align-self-center">Page {page}</span>

                <Button
                  disabled={products.length < limit}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
