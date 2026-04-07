// import React, { useContext, useState } from "react";

// import Button from "@mui/material/Button";

// import { MdDashboard } from "react-icons/md";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaProductHunt } from "react-icons/fa";
// import { IoCart } from "react-icons/io5";
// import { SiGooglemessages } from "react-icons/si";
// import { IoNotifications } from "react-icons/io5";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import { IoIosLock } from "react-icons/io";
// import { BiSolidFileBlank } from "react-icons/bi";
// import { BiSolidCategory } from "react-icons/bi";

// import { Link } from "react-router-dom";
// import { LuLogOut } from "react-icons/lu";
// import { MyContext } from "../../App";

// const Sidebar = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

//   const context = useContext(MyContext);

//   const isOpenSubmenu = (index) => {
//     if (index === activeTab) {
//       setIsToggleSubmenu(!isToggleSubmenu); // toggle same menu
//     } else {
//       setActiveTab(index);
//       setIsToggleSubmenu(true); // open submenu for new tab
//     }
//   };

//   return (
//     <>
//       <div className="sidebar">
//         {/* <div
//         className={`sidebar ${context.isToggleSidebar === true ? "open" : ""}`}
//       > */}
//         <ul className="list-unstyled m-0 p-0">
//           <li>
//             <Link to="/">
//               {/* <Button
//                 className={`w-100 ${activeTab === 0 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(0)}
//               > */}
//               <Button
//                 className={`w-100 ${activeTab === 0 ? "active" : ""}`}
//                 onClick={() => {
//                   isOpenSubmenu(0);
//                   context.setIsOpenNav(false);
//                 }}
//               >
//                 <span className="icon">
//                   <MdDashboard />
//                 </span>
//                 Dashboard
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>

//           {/* <li>
//                         <Link to='/'>
//                             <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
//                                 <span className='icon'><IoIosLock /></span>
//                                 Category
//                                 <span className='arrow'><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li> */}

//           <li>
//             <Button
//               className={`w-100 ${activeTab === 1 && isToggleSubmenu ? "active" : ""}`}
//               onClick={() => isOpenSubmenu(1)}
//             >
//               <span className="icon">
//                 <BiSolidCategory />
//               </span>
//               Category
//               {/* <span className={`arrow ${activeTab === 2 && isToggleSubmenu ? 'rotate' : ''}`}> */}
//               <span
//                 className={`arrow ${activeTab === 1 && isToggleSubmenu ? "rotate" : ""}`}
//               >
//                 <FaAngleRight />
//               </span>
//             </Button>

//             <div
//               className={`submenuWrapper ${
//                 activeTab === 1 && isToggleSubmenu ? "colapse" : "colapsed"
//               }`}
//             >
//               <ul className="submenu">
//                 {/* <li>
//                   <Link to="/category">Category List</Link>
//                 </li> */}
//                 <li>
//                   <Link
//                     to="/category"
//                     // onClick={() => context.setIsToggleSidebar(false)}
//                     onClick={() => context.setIsOpenNav(false)}
//                   >
//                     Category List
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/category/add"
//                     onClick={() => context.setIsOpenNav(false)}
//                   >
//                     Add a Category
//                   </Link>
//                 </li>
//                 {/* <li><Link to="/category/edit">Edit Category</Link></li> */}
//                 <li>
//                   <Link
//                     to="/subcategory/add"
//                     onClick={() => context.setIsOpenNav(false)}
//                   >
//                     Add a SubCategory
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/subcategory"
//                     onClick={() => context.setIsOpenNav(false)}
//                   >
//                     Sub Category List
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           <li>
//             <Button
//               className={`w-100 ${activeTab === 2 && isToggleSubmenu ? "active" : ""}`}
//               onClick={() => isOpenSubmenu(2)}
//             >
//               <span className="icon">
//                 <FaProductHunt />
//               </span>
//               Products
//               <span
//                 className={`arrow ${activeTab === 2 && isToggleSubmenu ? "rotate" : ""}`}
//               >
//                 <FaAngleRight />
//               </span>
//             </Button>

//             <div
//               className={`submenuWrapper ${
//                 activeTab === 2 && isToggleSubmenu ? "colapse" : "colapsed"
//               }`}
//             >
//               <ul className="submenu">
//                 <li>
//                   <Link to="/products"  onClick={() => context.setIsOpenNav(false)}>Product List</Link>
//                 </li>
//                 <li>
//                   <Link to="/product/details"  onClick={() => context.setIsOpenNav(false)}>Product View</Link>
//                 </li>
//                 <li>
//                   <Link to="/product/upload"  onClick={() => context.setIsOpenNav(false)}>Product Upload</Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           <li>
//             <Link to="/">
//               <Button
//                 className={`w-100 ${activeTab === 3 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(3)}
//               >
//                 <span className="icon">
//                   <IoCart />
//                 </span>
//                 Orders
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>

//           <li>
//             <Link to="/">
//               <Button
//                 className={`w-100 ${activeTab === 4 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(4)}
//               >
//                 <span className="icon">
//                   <SiGooglemessages />
//                 </span>
//                 Messages
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>

//           <li>
//             <Link to="/">
//               <Button
//                 className={`w-100 ${activeTab === 5 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(5)}
//               >
//                 <span className="icon">
//                   <FaFileInvoiceDollar />
//                 </span>
//                 Invoices
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>

//           <li>
//             <Link to="/">
//               <Button
//                 className={`w-100 ${activeTab === 6 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(6)}
//               >
//                 <span className="icon">
//                   <IoNotifications />
//                 </span>
//                 Notifications
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>

//           <li>
//             <Link to="/">
//               <Button
//                 className={`w-100 ${activeTab === 7 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(7)}
//               >
//                 <span className="icon">
//                   <IoSettingsSharp />
//                 </span>
//                 Settings
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>

//           <li>
//             <Link to="/">
//               <Button
//                 className={`w-100 ${activeTab === 8 ? "active" : ""}`}
//                 onClick={() => isOpenSubmenu(8)}
//               >
//                 <span className="icon">
//                   <BiSolidFileBlank />
//                 </span>
//                 Blank Page
//                 <span className="arrow">
//                   <FaAngleRight />
//                 </span>
//               </Button>
//             </Link>
//           </li>
//         </ul>

//         <br />

//         <div className="logoutWrapper">
//           <div className="logoutBox">
//             <Button variant="contained">
//               <LuLogOut />
//               Logout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";

import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
// import { IoCart } from "react-icons/io5";
// import { SiGooglemessages } from "react-icons/si";
// import { IoNotifications } from "react-icons/io5";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import { BiSolidFileBlank } from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";

import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { MyContext } from "../../App";

import { MdSlideshow } from "react-icons/md";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const context = useContext(MyContext);

  /* ✅ Mobile sidebar close helper */
  const closeMobileSidebar = () => {
    if (context.windowWidth <= 992) {
      context.setIsOpenNav(false);
    }
  };

  /* ✅ Submenu handler */
  const isOpenSubmenu = (index) => {
    if (index === activeTab) {
      setIsToggleSubmenu(!isToggleSubmenu);
    } else {
      setActiveTab(index);
      setIsToggleSubmenu(true);
    }
  };

  return (
    <div className="sidebar">
      <ul className="list-unstyled m-0 p-0">
        {/* ================= Dashboard ================= */}
        <li>
          <Link to="/">
            <Button
              className={`w-100 ${activeTab === 0 ? "active" : ""}`}
              onClick={() => {
                setActiveTab(0);
                setIsToggleSubmenu(false);
                closeMobileSidebar();
              }}
            >
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </Link>
        </li>

        {/* ================= Category ================= */}
        <li>
          <Button
            className={`w-100 ${activeTab === 1 && isToggleSubmenu ? "active" : ""}`}
            onClick={() => isOpenSubmenu(1)}
          >
            <span className="icon">
              <BiSolidCategory />
            </span>
            Category
            <span
              className={`arrow ${activeTab === 1 && isToggleSubmenu ? "rotate" : ""}`}
            >
              <FaAngleRight />
            </span>
          </Button>

          <div
            className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ? "colapse" : "colapsed"}`}
          >
            <ul className="submenu">
              <li>
                <Link to="/category" onClick={closeMobileSidebar}>
                  Category List
                </Link>
              </li>
              <li>
                <Link to="/category/add" onClick={closeMobileSidebar}>
                  Add a Category
                </Link>
              </li>
              <li>
                <Link to="/subcategory/add" onClick={closeMobileSidebar}>
                  Add a SubCategory
                </Link>
              </li>
              <li>
                <Link to="/subcategory" onClick={closeMobileSidebar}>
                  Sub Category List
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* ================= Products ================= */}
        <li>
          <Button
            className={`w-100 ${activeTab === 2 && isToggleSubmenu ? "active" : ""}`}
            onClick={() => isOpenSubmenu(2)}
          >
            <span className="icon">
              <FaProductHunt />
            </span>
            Products
            <span
              className={`arrow ${activeTab === 2 && isToggleSubmenu ? "rotate" : ""}`}
            >
              <FaAngleRight />
            </span>
          </Button>

          <div
            className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu ? "colapse" : "colapsed"}`}
          >
            <ul className="submenu">
              <li>
                <Link to="/products" onClick={closeMobileSidebar}>
                  Product List
                </Link>
              </li>
              <li>
                <Link to="/product/details" onClick={closeMobileSidebar}>
                  Product View
                </Link>
              </li>
              <li>
                <Link to="/product/upload" onClick={closeMobileSidebar}>
                  Product Upload
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* ================= Home Slider ================= */}
        <li>
          <Button
            className={`w-100 ${activeTab === 3 && isToggleSubmenu ? "active" : ""}`}
            onClick={() => isOpenSubmenu(3)}
          >
            <span className="icon">
              <MdSlideshow />
            </span>
            Home Slider
            <span
              className={`arrow ${activeTab === 3 && isToggleSubmenu ? "rotate" : ""}`}
            >
              <FaAngleRight />
            </span>
          </Button>

          <div
            className={`submenuWrapper ${activeTab === 3 && isToggleSubmenu ? "colapse" : "colapsed"}`}
          >
            <ul className="submenu">
              <li>
                <Link to="/homeSlider" onClick={closeMobileSidebar}>
                  Home Slider List
                </Link>
              </li>
              <li>
                <Link to="/homeSlider/add" onClick={closeMobileSidebar}>
                  Add Home Slide
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* ================= Others ================= */}
        {/* <li>
          <Button className="w-100" onClick={() => setActiveTab(3)}>
            <span className="icon"><IoCart /></span>
            Orders
            <span className="arrow"><FaAngleRight /></span>
          </Button>
        </li> */}

        {/* <li>
          <Button className="w-100" onClick={() => setActiveTab(4)}>
            <span className="icon"><SiGooglemessages /></span>
            Messages
            <span className="arrow"><FaAngleRight /></span>
          </Button>
        </li> */}

        {/* <li>
          <Button className="w-100" onClick={() => setActiveTab(5)}>
            <span className="icon"><FaFileInvoiceDollar /></span>
            Invoices
            <span className="arrow"><FaAngleRight /></span>
          </Button>
        </li> */}

        {/* <li>
          <Button className="w-100" onClick={() => setActiveTab(6)}>
            <span className="icon"><IoNotifications /></span>
            Notifications
            <span className="arrow"><FaAngleRight /></span>
          </Button>
        </li> */}

        {/* <li>
          <Button className="w-100" onClick={() => setActiveTab(7)}>
            <span className="icon"><IoSettingsSharp /></span>
            Settings
            <span className="arrow"><FaAngleRight /></span>
          </Button>
        </li> */}

        {/* <li>
          <Button className="w-100" onClick={() => setActiveTab(8)}>
            <span className="icon"><BiSolidFileBlank /></span>
            Blank Page
            <span className="arrow"><FaAngleRight /></span>
          </Button>
        </li> */}
      </ul>

      <br />

      {/* ================= Logout ================= */}
      <div className="logoutWrapper">
        <div className="logoutBox">
          <Button variant="contained">
            <LuLogOut />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
