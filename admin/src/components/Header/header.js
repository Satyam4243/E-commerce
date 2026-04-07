import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../Searchbox/search";
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
// import { IoCartOutline } from "react-icons/io5";
// import { MdMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import { IoMenu } from "react-icons/io5";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FaShieldHalved } from "react-icons/fa6";

import Divider from "@mui/material/Divider";

import Author from "../../assets/images/author.jpg";

import Author1 from "../../assets/images/author-1.png";
import Author2 from "../../assets/images/author-2.png";
import Author3 from "../../assets/images/author-3.png";
import { MyContext } from "../../App";
import UserAvatarImgComponent from "../userAvatarImg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);

  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);

  const context = useContext(MyContext);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  // const handleOpennotificationsDrop = () => {
  //   setisOpennotificationDrop(true);
  // };
  const handleOpennotificationsDrop = () => {
    context.setIsOpenNav(false); 
    setisOpennotificationDrop(true);
  };

  const handleClosenotificationsDrop = () => {
    setisOpennotificationDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100 flex-row">
            {/* Logo */}

            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={Logo} alt="" />
                <span>HOTASH</span>
              </Link>
            </div>

            {context.windowWidth > 992 && (
              <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                <Button
                  className="rounded-circle me-3"
                  onClick={() =>
                    context.setIsToggleSidebar(!context.isToggleSidebar)
                  }
                >
                  {context.isToggleSidebar === false ? (
                    <MdMenuOpen />
                  ) : (
                    <MdOutlineMenu />
                  )}
                </Button>
                <SearchBox />
              </div>
            )}

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              {/* <Button
                className="rounded-circle me-3"
                onClick={() => context.setThemeMode(!context.themeMode)}
              >
                {context.theme === "light" ? (
                  <MdNightlightRound />
                ) : (
                  <MdOutlineLightMode />
                )}
              </Button> */}
              <Button onClick={() => context.setThemeMode(!context.themeMode)}>
                {context.themeMode ? (
                  <MdNightlightRound />
                ) : (
                  <MdOutlineLightMode />
                )}
              </Button>

              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle me-3"
                  onClick={handleOpennotificationsDrop}
                >
                  <FaRegBell />
                </Button>

                {/* <Button
                  className="rounded-circle me-3"
                  onClick={() => context.openNav()}
                >
                  <IoMenu />
                </Button> */}
                {context.windowWidth <= 992 && (
                  // <Button
                  //   className="rounded-circle me-3"
                  //   onClick={() => context.setIsOpenNav(true)}
                  // >
                  //   <IoMenu />
                  // </Button>
                  <Button
                    className="rounded-circle"
                    onClick={() => context.setIsOpenNav((prev) => !prev)}
                  >
                    <IoMenu />
                  </Button>
                )}

                <Menu
                  anchorEl={isOpennotificationDrop}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleClosenotificationsDrop}
                  onClick={handleClosenotificationsDrop}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ms: -0.5,
                          me: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head ps-2 pb-0">
                    <h4>Notifications (24) </h4>
                  </div>
                  <Divider className="mb-1" />

                  <div className="scroll">
                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <UserAvatarImgComponent img={Author} />
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>John </b>
                              added to his fovourite list
                              <b> Leather belt Steve Madden.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={Author1} alt="" />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>John </b>
                              added to his fovourite list
                              <b> Leather belt Steve Madden.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={Author2} alt="" />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>John </b>
                              added to his fovourite list
                              <b> Leather belt Steve Madden.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={Author3} alt="" />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>John </b>
                              added to his fovourite list
                              <b> Leather belt Steve Madden.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={Author2} alt="" />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>John </b>
                              added to his fovourite list
                              <b> Leather belt Steve Madden.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleClosenotificationsDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={Author} alt="" />
                            </span>
                          </div>
                        </div>

                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>John </b>
                              added to his fovourite list
                              <b> Leather belt Steve Madden.</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago!</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>

                  <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                    <Button className="btn-blue w-100">
                      View all Notifications
                    </Button>
                  </div>
                </Menu>
              </div>

              {context.isLogin !== true ? (
                <Link to={"/login"}>
                  <Button className="btn-blue-lg btn-round">
                    Sign In
                  </Button>{" "}
                </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc d-flex align-items-center"
                    onClick={handleOpenMyAccDrop}
                  >
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img src={Author} alt="" />
                      </span>
                    </div>

                    <div className="userInfo res-hide">
                      <h4>John Doe</h4>
                      <p className="mb-0">@john25</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDrop}
                    onClick={handleCloseMyAccDrop}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <Avatar /> My account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <FaShieldHalved />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>

                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
