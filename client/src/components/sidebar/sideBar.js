// import React from 'react';

// import Groceries from '../../assets/images/groceries.png';
// import Slider from '@mui/material/Slider';

// import Checkbox from '@mui/material/Checkbox';

// import Button from '@mui/material/Button';

// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

// import Banner5 from '../../assets/images/banner5.jpg'

// function valuetext(value) {
//     return `${value}$`;
// }

// const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

// const Sidebar = () => {

//     const [value, setValue] = React.useState([0, 1000]);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <>
//             <div className='sidebar'>
//                 <div className='card border-0 shadow'>

//                     <div className="tpHeader">
//                         <h3 className='mb-2'>Category</h3>
//                         <div className="tpUnderline"></div>
//                     </div>
//                     <div className='catList'>
//                         <div className='catItem d-flex align-items-center'>
//                             <span className='img'><img src={Groceries} width={30} /></span>
//                             <h4 className='mb-0 ms-3 mr-3'>Milks & Diaries</h4>
//                             <span className='count ms-auto d-flex align-items-center justify-content-center rounded-circle mr-auto'> 30 </span>
//                         </div>

//                         <div className='catItem d-flex align-items-center'>
//                             <span className='img'><img src={Groceries} width={30} /></span>
//                             <h4 className='mb-0 ms-3 mr-3'>Milks & Diaries</h4>
//                             <span className='count ms-auto d-flex align-items-center justify-content-center rounded-circle mr-auto'> 30 </span>
//                         </div>

//                         <div className='catItem d-flex align-items-center'>
//                             <span className='img'><img src={Groceries} width={30} /></span>
//                             <h4 className='mb-0 ms-3 mr-3'>Milks & Diaries</h4>
//                             <span className='count ms-auto d-flex align-items-center justify-content-center rounded-circle mr-auto'> 30 </span>
//                         </div>

//                         <div className='catItem d-flex align-items-center'>
//                             <span className='img'><img src={Groceries} width={30} /></span>
//                             <h4 className='mb-0 ms-3 mr-3'>Milks & Diaries</h4>
//                             <span className='count ms-auto d-flex align-items-center justify-content-center rounded-circle mr-auto'> 30 </span>
//                         </div>

//                         <div className='catItem d-flex align-items-center'>
//                             <span className='img'><img src={Groceries} width={30} /></span>
//                             <h4 className='mb-0 ms-3 mr-3'>Milks & Diaries</h4>
//                             <span className='count ms-auto d-flex align-items-center justify-content-center rounded-circle mr-auto'> 30 </span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='card border-0 shadow'>
//                     <h3>Fill by Price</h3>
//                     <Slider
//                         min={0}
//                         step={1}
//                         max={1000}
//                         getAriaLabel={() => 'Temperature range'}
//                         value={value}
//                         onChange={handleChange}
//                         valueLabelDisplay="auto"
//                         getAriaValueText={valuetext}
//                         color="success"
//                     />

//                     <div className='d-flex pt-2 pb-2 priceRange'>
//                         <span>From: <strong className='text-success'>${value[0]}</strong></span>
//                         <span className='ms-auto'>To: <strong className='text-success'>${value[1]}</strong></span>
//                     </div>

//                     <div className='filters'>
//                         <h5>Color</h5>
//                         <ul>
//                             <li><Checkbox {...label} color='success' />Red (56)</li>
//                             <li><Checkbox {...label} color='success' />Green (78)</li>
//                             <li><Checkbox {...label} color='success' />Blue (54)</li>
//                             <li><Checkbox {...label} color='success' />Red (56)</li>
//                             <li><Checkbox {...label} color='success' />Green (78)</li>
//                             <li><Checkbox {...label} color='success' />Blue (54)</li>
//                             <li><Checkbox {...label} color='success' />Red (56)</li>
//                             <li><Checkbox {...label} color='success' />Green (78)</li>
//                             <li><Checkbox {...label} color='success' />Blue (54)</li>
//                             <li><Checkbox {...label} color='success' />Red (56)</li>
//                             <li><Checkbox {...label} color='success' />Green (78)</li>
//                             <li><Checkbox {...label} color='success' />Blue (54)</li>

//                         </ul>
//                     </div>

//                     <div className='filters'>
//                         <h5>Item Condition</h5>
//                         <ul className='mb-0'>
//                             <li><Checkbox {...label} color='success' />New (1506)</li>
//                             <li><Checkbox {...label} color='success' />Refurbished (27)</li>
//                             <li><Checkbox {...label} color='success' />Used (45)</li>
//                             <li><Checkbox {...label} color='success' />New (1506)</li>
//                             <li><Checkbox {...label} color='success' />Refurbished (27)</li>
//                             <li><Checkbox {...label} color='success' />Used (45)</li>
//                             <li><Checkbox {...label} color='success' />New (1506)</li>
//                             <li><Checkbox {...label} color='success' />Refurbished (27)</li>
//                             <li><Checkbox {...label} color='success' />Used (45)</li>
//                             <li><Checkbox {...label} color='success' />New (1506)</li>
//                             <li><Checkbox {...label} color='success' />Refurbished (27)</li>
//                             <li><Checkbox {...label} color='success' />Used (45)</li>

//                         </ul>
//                     </div>

//                     <div className='d-flex'>
//                         <Button className='btn btn-g'><FilterAltOutlinedIcon />Filter</Button>
//                     </div>

//                 </div>

//                 <img src={Banner5} className='w-100' />

//             </div>
//         </>
//     )
// }

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import { fetchDataFromApi } from "../../utils/api";

import Banner5 from "../../assets/images/banner5.jpg";

function valuetext(value) {
  return `${value}$`;
}

const Sidebar = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // category id
  const location = useLocation();

  const [value, setValue] = useState([0, 1000]);
  const [categories, setCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  // ================= FETCH CATEGORIES =================
  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      if (res?.categoryList) {
        setCategories(res.categoryList);
      }
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ================= CATEGORY CLICK =================
  const handleCategoryClick = (catId) => {
    navigate(`/listing/${catId}`);
  };

  // ================= SUBCATEGORY CLICK =================
  const handleSubCategoryClick = (subId) => {
    navigate(`/listing?subCategory=${subId}`);
  };

  // ================= APPLY FILTER =================
  const handleFilter = () => {
    let query = "";

    if (id) {
      query += `category=${id}&`;
    }

    query += `minPrice=${value[0]}&maxPrice=${value[1]}`;

    if (selectedRating > 0) {
      query += `&rating=${selectedRating}`;
    }

    navigate(`/listing?${query}`);
  };

  return (
    <>
      <div className="sidebar">

        {/* ===== CATEGORY CARD ===== */}
        <div className="card border-0 shadow">
          <div className="tpHeader">
            <h3 className="mb-2">Category</h3>
            <div className="tpUnderline"></div>
          </div>

          <div className="catList">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <div key={cat._id}>

                  {/* MAIN CATEGORY */}
                  <div
                    className="catItem d-flex align-items-center cursor"
                    onClick={() => handleCategoryClick(cat._id)}
                  >
                    <h4 className="mb-0 ms-3 mr-3">{cat.name}</h4>

                    <span className="count ms-auto d-flex align-items-center justify-content-center rounded-circle mr-auto">
                      {cat.children ? cat.children.length : 0}
                    </span>
                  </div>

                  {/* SUB CATEGORIES */}
                  {cat.children &&
                    cat.children.map((sub) => (
                      <div
                        key={sub._id}
                        className="ms-4 mt-2 cursor text-muted"
                        onClick={() => handleSubCategoryClick(sub._id)}
                      >
                        - {sub.name}
                      </div>
                    ))}
                </div>
              ))
            ) : (
              <p className="p-3">No Categories</p>
            )}
          </div>
        </div>

        {/* ===== PRICE FILTER ===== */}
        <div className="card border-0 shadow mt-4">
          <h3>Filter by Price</h3>

          <Slider
            min={0}
            step={1}
            max={1000}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success">₹{value[0]}</strong>
            </span>

            <span className="ms-auto">
              To: <strong className="text-success">₹{value[1]}</strong>
            </span>
          </div>

          {/* ===== RATING FILTER ===== */}
          <div className="mt-3">
            <h5>Filter by Rating</h5>
            <Rating
              value={selectedRating}
              onChange={(e, newValue) => setSelectedRating(newValue)}
            />
          </div>

          <div className="d-flex mt-3">
            <Button className="btn btn-g" onClick={handleFilter}>
              <FilterAltOutlinedIcon /> Filter
            </Button>
          </div>
        </div>

        <img src={Banner5} className="w-100 mt-4" alt="banner" />
      </div>
    </>
  );
};

export default Sidebar;
