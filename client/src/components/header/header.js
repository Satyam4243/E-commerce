// import React, { useState, useEffect, useRef, useContext } from "react";
// import { MyContext } from "../../App.js";
// import "../header/header.css";
// import logo from "../../assets/images/logo.svg";
// import SearchIcon from "@mui/icons-material/Search";
// import Select from "../selectDrop/select.js";
// import axios from "axios";

// import { Link, useNavigate } from "react-router-dom";

// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

// import IconCart from "../../assets/images/icon-cart.svg";
// import IconUser from "../../assets/images/icon-user.svg";

// import Button from "@mui/material/Button";
// import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Nav from "./nav/nav.js";

// const Header = () => {
//   const [isOpenDropDown, setisOpenDropDown] = useState(false);
//   const [categories, setcategories] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   const headerRef = useRef();
//   const context = useContext(MyContext);
//   const navigate = useNavigate();

//   // ✅ LOGIN SYNC WITH CONTEXT
//   useEffect(() => {
//     if (context.isLogin) {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } else {
//       setUser(null);
//     }
//   }, [context.isLogin]);

//   // ✅ LOGOUT (PROPER)
//   const handleLogout = () => {
//     context.signOut(); // App.js function call
//     setUser(null);
//     setisOpenDropDown(false);
//     navigate("/signin");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!headerRef.current) return;

//       if (window.pageYOffset > 100) {
//         headerRef.current.classList.add("fixed");
//       } else {
//         headerRef.current.classList.remove("fixed");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (Array.isArray(context.categories)) {
//       setcategories(context.categories);
//     }
//   }, [context.categories]);

//   const getCountry = async () => {
//     try {
//       const res = await axios.get(
//         "https://countriesnow.space/api/v0.1/countries/capital",
//       );
//       if (res?.data?.data) {
//         setCountries(res.data.data);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getCountry();
//   }, []);

//   useEffect(() => {
//     const fetchCartCount = async () => {
//       const storedUser = localStorage.getItem("user");
//       if (!storedUser) return;

//       const user = JSON.parse(storedUser);

//       try {
//         const res = await axios.get(
//           `http://localhost:4000/api/cart/${user.uid}`,
//         );

//         if (res?.data?.success) {
//           setCartCount(res.data.cartItems.length);
//         }
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchCartCount();
//   }, [context.isLogin]);

//   return (
//     <>
//       <div className="headerWrapper" ref={headerRef}>
//         <header>
//           <div className="container-fluid">
//             <div className="row navbar-expand-lg bg-body-tertiary">
//               {/* Logo */}
//               <div className="col-sm-2">
//                 <Link to="/">
//                   <img src={logo} alt="Website Logo" />
//                 </Link>
//               </div>

//               {/* Search */}
//               <div className="col-sm-5 part2">
//                 <div className="headerSearch d-flex align-items-center">
//                   {categories.length > 0 && (
//                     <Select data={categories} placeholder="All Categories" />
//                   )}

//                   <div className="search">
//                     <input type="text" placeholder="Search for items..." />
//                     <SearchIcon className="searchIcon cursor" />
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section */}
//               <div className="col-sm-5 d-flex align-items-center">
//                 <div className="ms-auto d-flex align-items-center">
//                   <div className="countryWrapper">
//                     <Select
//                       countries={countries}
//                       placeholder="Your Location"
//                       icon={<LocationOnOutlinedIcon style={{ opacity: 0.5 }} />}
//                       view="country"
//                     />
//                   </div>

//                   <ClickAwayListener
//                     onClickAway={() => setisOpenDropDown(false)}
//                   >
//                     <ul className="list list-inline mb-0 headerTabs">
//                       {/* Cart */}
//                       <li className="list-inline-item">
//                         <Link to="/cart">
//                           <span>
//                             <img src={IconCart} alt="Cart" />
//                             <span className="badge bg-success rounded-circle">
//                               {/* {context.cartItems?.length || 0} */}
//                               {cartCount}
//                             </span>
//                             Cart
//                           </span>
//                         </Link>
//                       </li>

//                       {/* Account */}
//                       <li className="list-inline-item">
//                         <span
//                           onClick={() => setisOpenDropDown(!isOpenDropDown)}
//                         >
//                           <img src={IconUser} alt="Account" />
//                           {user ? user.name : "Account"}
//                         </span>

//                         {isOpenDropDown && (
//                           <ul className="dropdownMenu">
//                             {!user ? (
//                               <>
//                                 <li>
//                                   <Link to="/signin">
//                                     <Button>Sign In</Button>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link to="/signup">
//                                     <Button>Sign Up</Button>
//                                   </Link>
//                                 </li>
//                               </>
//                             ) : (
//                               <>
//                                 <li>
//                                   <Button>
//                                     <Person2OutlinedIcon /> My Account
//                                   </Button>
//                                 </li>

//                                 {user.isAdmin && (
//                                   <li>
//                                     <Button onClick={() => navigate("/admin")}>
//                                       <SettingsOutlinedIcon /> Admin Panel
//                                     </Button>
//                                   </li>
//                                 )}

//                                 <li>
//                                   <Button onClick={handleLogout}>
//                                     <LogoutOutlinedIcon /> Sign out
//                                   </Button>
//                                 </li>
//                               </>
//                             )}
//                           </ul>
//                         )}
//                       </li>
//                     </ul>
//                   </ClickAwayListener>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {categories.length > 0 && <Nav data={categories} />}
//       </div>

//       <div className="afterHeader"></div>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef, useContext } from "react";
import { MyContext } from "../../App.js";
import "../header/header.css";
import logo from "../../assets/images/logo.svg";
// import logo from "../../assets/images/Logo,.png";
// import logo from "../../assets/images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select.js";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";

import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Nav from "./nav/nav.js";

const Header = () => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [categories, setcategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const headerRef = useRef();
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // ✅ LOGIN SYNC
  useEffect(() => {
    if (context.isLogin) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } else {
      setUser(null);
    }
  }, [context.isLogin]);

  // ✅ LOGOUT
  const handleLogout = () => {
    context.signOut();
    setUser(null);
    setisOpenDropDown(false);
    navigate("/signin");
  };

  // ✅ SCROLL FIX
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.pageYOffset > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ CATEGORY LOAD
  useEffect(() => {
    if (Array.isArray(context.categories)) {
      setcategories(context.categories);
    }
  }, [context.categories]);

  // ✅ COUNTRY API
  const getCountry = async () => {
    try {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/capital"
      );
      if (res?.data?.data) {
        setCountries(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  // ✅ CART COUNT (REAL-TIME FIX 🔥)
  const fetchCartCount = async () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;

    const user = JSON.parse(storedUser);

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/cart/${user.uid}`
      );

      if (res?.data?.success) {
        setCartCount(res.data.cartItems.length);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // ✅ call on login
  useEffect(() => {
    fetchCartCount();
  }, [context.isLogin]);

  // ✅ IMPORTANT: auto refresh every time cart changes
  useEffect(() => {
    if (context?.cartUpdated) {
      fetchCartCount();
    }
  }, [context?.cartUpdated]);

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row navbar-expand-lg bg-body-tertiary">

              {/* Logo */}
              <div className="col-sm-2 logo">
                <Link to="/">
                  <img src={logo} alt="Website Logo" />
                </Link>
              </div>

              {/* Search */}
              <div className="col-sm-5 part2">
                <div className="headerSearch d-flex align-items-center">
                  {categories.length > 0 && (
                    <Select data={categories} placeholder="All Categories" />
                  )}

                  <div className="search">
                    <input type="text" placeholder="Search for items..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-sm-5 d-flex align-items-center">
                <div className="ms-auto d-flex align-items-center">

                  <div className="countryWrapper">
                    <Select
                      countries={countries}
                      placeholder="Your Location"
                      icon={<LocationOnOutlinedIcon style={{ opacity: 0.5 }} />}
                      view="country"
                    />
                  </div>

                  <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                    <ul className="list list-inline mb-0 headerTabs">

                      {/* Cart */}
                      <li className="list-inline-item">
                        <Link to="/cart">
                          <span>
                            <img src={IconCart} alt="Cart" />

                            <span className="badge bg-success rounded-circle">
                              {cartCount}
                            </span>

                            Cart
                          </span>
                        </Link>
                      </li>

                      {/* Account */}
                      <li className="list-inline-item">
                        <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                          <img src={IconUser} alt="Account" />
                          {user ? user.name : "Account"}
                        </span>

                        {isOpenDropDown && (
                          <ul className="dropdownMenu">

                            {!user ? (
                              <>
                                <li>
                                  <Link to="/signin">
                                    <Button>Sign In</Button>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/signup">
                                    <Button>Sign Up</Button>
                                  </Link>
                                </li>
                              </>
                            ) : (
                              <>
                                <li>
                                  <Button>
                                    <Person2OutlinedIcon /> My Account
                                  </Button>
                                </li>

                                {user.isAdmin && (
                                  <li>
                                    <Button onClick={() => navigate("/admin")}>
                                      <SettingsOutlinedIcon /> Admin Panel
                                    </Button>
                                  </li>
                                )}

                                <li>
                                  <Button onClick={handleLogout}>
                                    <LogoutOutlinedIcon /> Sign out
                                  </Button>
                                </li>
                              </>
                            )}

                          </ul>
                        )}
                      </li>

                    </ul>
                  </ClickAwayListener>

                </div>
              </div>
            </div>
          </div>
        </header>

        {categories.length > 0 && <Nav data={categories} />}
      </div>

      <div className="afterHeader"></div>
    </>
  );
};

export default Header;