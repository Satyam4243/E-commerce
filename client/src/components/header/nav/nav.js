import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { MyContext } from "../../../App";
import Banner_Menu from "../../../assets/images/banner-menu.jpg";

const Nav = (props) => {
  const [navData, setNavData] = useState([]);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    if (Array.isArray(props.data)) {
      setNavData(props.data);
    }
  }, [props.data]);

  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row position-relative">
            {/* Browse Categories Button */}
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button
                className="bg-g text-white catTab"
                onClick={() => setOpenMegaMenu(!openMegaMenu)}
              >
                <GridViewIcon /> &nbsp;Browse All Categories
                <KeyboardArrowDownIcon />
              </Button>
            </div>

            {/* MAIN NAV */}
            <div className="col-sm-8 part2 position-static">
              <nav>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link to="/">Home</Link>
                    </Button>
                  </li>

                  {/* <li key={cat._id} className="nav-item dropdown">
                    <Link to={`/category/${cat._id}`} className="nav-link">
                      {cat.name}
                    </Link>

                    {cat.children?.length > 0 && (
                      <ul className="dropdown_menu">
                        {cat.children.map((sub) => (
                          <li key={sub._id}>
                            <Link to={`/category/subCat/${sub._id}`}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li> */}
                  {Array.isArray(navData) &&
                    navData.map((cat) => (
                      <li
                        key={cat._id}
                        className="list-inline-item position-relative"
                      >
                        <Button>
                          <Link
                            to={`/category/${cat._id}`}
                            className="text-capitalize"
                          >
                            {cat.name}
                          </Link>

                          {Array.isArray(cat.children) &&
                            cat.children.length > 0 && (
                              <KeyboardArrowDownIcon className="arrowIcon" />
                            )}
                        </Button>

                        {Array.isArray(cat.children) &&
                          cat.children.length > 0 && (
                            <ul className="dropdown_menu">
                              {cat.children.map((sub) => (
                                <li key={sub._id}>
                                  <Button>
                                    <Link to={`/category/subCat/${sub._id}`}>
                                      {sub.name}
                                    </Link>
                                  </Button>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}

                  {/* SHOP DROPDOWN */}
                  <li className="list-inline-item position-static ">
                    <Button
                      className="shopBtn"
                      style={{ color: "black" }}
                      onClick={() => setOpenMegaMenu(!openMegaMenu)}
                    >
                      Shop <KeyboardArrowDownIcon />
                    </Button>

                    {openMegaMenu && (
                      <div className="dropdown_menu megaMenu w-100 open">
                        <div className="row">
                          {navData.map((cat, index) => (
                            <div className="col" key={cat._id || index}>
                              <Link to={`/category/${cat._id}`}>
                                <h4 className="text-capitalize">{cat.name}</h4>
                              </Link>

                              {Array.isArray(cat.children) &&
                                cat.children.length > 0 && (
                                  <ul>
                                    {cat.children.map((sub, i) => (
                                      <li key={sub._id || i}>
                                        <Link
                                          to={`/category/subCat/${sub._id}`}
                                          onClick={() => setOpenMegaMenu(false)}
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </div>
                          ))}
                          <div className="col bannerCol">
                            <img src={Banner_Menu} />
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link to={"/about"}>About</Link>
                    </Button>
                  </li>

                  <li className="list-inline-item">
                    <Button>
                      <Link to="/contact">Contact</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* SUPPORT */}
            <div className="col-sm-2 part3 d-flex align-items-center">
              <div className="phNo d-flex align-items-center ml-auto">
                <span>
                  <HeadphonesOutlinedIcon />
                </span>
                <div className="info ml-3">
                  <h3 className="text-g mb-0">1900 - 888</h3>
                  <p className="mb-0">24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
