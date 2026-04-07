import "./App.css";
import "./responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/Dashboard/dashboard";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";

import { createContext, useEffect, useState } from "react";

import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signup";
import ProductDetails from "./pages/ProductDetails/productdetails";
import ProductUpload from "./pages/ProductUpload/productupload";
import Products from "./pages/Products";
import CategoryList from "./pages/Category/categoryList";
import { fetchDataFromApi } from "./utils/api";

import LoadingBar from "react-top-loading-bar";
import AddCategory from "./pages/Category/addCategory";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import EditCategory from "./pages/Category/editCategory";
import SubCategoryList from "./pages/Category/subCategoryList";
import AddSubCategory from "./pages/Category/addSubCategory";
import HomeSliderList from "./pages/HomeSlider/homeSliderList";
import AddHomeSlide from "./pages/HomeSlider/addHomeSlide";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const [progress, setProgress] = useState(0);
  // const [catData, setCatData] = useState([]);

  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    return savedTheme === "dark" ? false : true;
  });

  const [alertBox, setAlertBox] = useState({
    msg: "",
    error: false,
    open: false,
  });

  useEffect(() => {
    if (themeMode) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    fetchCategory();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchCategory = () => {
    setProgress(30);
    fetchDataFromApi("/api/category").then((res) => {
      // setCatData(res);
      setProgress(100);
    });
  };

  const openNav = () => {
    setIsOpenNav(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertBox({
      open: false,
    });
  };

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    windowWidth,
    openNav,
    isOpenNav,
    setIsOpenNav,
    progress,
    setProgress,
    alertBox,
    setAlertBox,
    fetchCategory,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          className="topLoadingBar"
        />

        <Snackbar
          open={alertBox.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            autoHideDuration={6000}
            severity={alertBox.error === false ? "success" : "error"}
            varient="filled"
            sx={{ width: "100%" }}
          >
            {alertBox.msg}
          </Alert>
        </Snackbar>

        {isHideSidebarAndHeader !== true && <Header />}

        <div className="main d-flex">
          {isHideSidebarAndHeader !== true && (
            <>
              {/* <div
                className={`sidebarOverlay d-none ${isOpenNav === true && "show"}`}
                onClick={() => setIsOpenNav(false)}
              ></div> */}
              {/* <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''} $ 
              {isOpenNav===true ? 'open' : ''}`}> */}
              {/* <div
                className={`sidebarWrapper ${isToggleSidebar ? "open" : ""}`}
              >
                <Sidebar />
              </div>

              <div
                className={`sidebarOverlay ${isToggleSidebar ? "show" : ""}`}
                onClick={() => setIsToggleSidebar(false)}
              ></div> */}
              <div
                className={`sidebarWrapper 
                ${isToggleSidebar ? "toggle" : ""} 
                ${isOpenNav ? "open" : ""}`}
              >
                <Sidebar />
              </div>

              <div
                className={`sidebarOverlay ${isOpenNav === true ? "show" : ""}`}
                onClick={() => setIsOpenNav(false)}
              ></div>
            </>
          )}

          <div
            className={`content 
              ${isHideSidebarAndHeader ? "full" : ""} 
              ${isToggleSidebar ? "toggle" : ""}`}
          >
          
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/products" element={<Products />} />
              <Route path="/category" element={<CategoryList />} />
              <Route path="/category/add" element={<AddCategory />} />
              <Route path="/category/edit/:id" element={<EditCategory />} />
              <Route path="/subCategory" element={<SubCategoryList />} />
              <Route path="/subcategory/add" element={<AddSubCategory />} />
              <Route path="/product/details" element={<ProductDetails />} />
              <Route path="/product/details/:id" element={<ProductDetails />} />
              <Route path="/product/upload" element={<ProductUpload />} />
              <Route path="/product/upload/:id" element={<ProductUpload />} />
              <Route path="/homeSlider" element={<HomeSliderList />} />
              <Route path="/homeSlider/add" element={<AddHomeSlide />} />
              <Route path="/homeSlider/edit/:id" element={<AddHomeSlide />} />

            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
