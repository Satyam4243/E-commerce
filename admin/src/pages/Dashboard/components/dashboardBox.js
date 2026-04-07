import React from 'react';
import Button from '@mui/material/Button';

import { BiDotsVerticalRounded } from "react-icons/bi";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { IoIosTimer } from "react-icons/io";


const DashboardBox = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // useEffect(()=>{
    //     console.log(props.color)
    // },[])

    return (

        <Button className='dashboardBox' style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}>

            {
                props.grow === true ?
                    <span className='chart'><FaArrowTrendUp /></span>

                    :

                    <span className='chart'><FaArrowTrendDown /></span>
            }

            <div className='d-flex w-100'>
                <div className='col1'>
                    <h4 className='text-white mb-0'>Total Users</h4>
                    <span className='text-white'>277</span>
                </div>

                <div className='ms-auto'>
                    {
                        props.icon ?
                            < span className="icon">
                                {props.icon ? props.icon : ''}
                            </span>

                            :

                            ''
                    }
                </div>
            </div>

            <div className='d-flex align-items-center w-100 bottomEle'>
                <h6 className='text-white mb-0 mt-0'>Last Month</h6>
                <div className='ms-auto'>
                    <Button className='ms-auto toggleIcon' onClick={handleClick}><BiDotsVerticalRounded /></Button>
                    <Menu
                        className='dropdown_menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            },
                            list: {
                                'aria-labelledby': 'long-button',
                            },
                        }}
                    >

                        <MenuItem onClick={handleClose}>
                            <IoIosTimer/>Last Day
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IoIosTimer/>Last Week
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IoIosTimer/>Last Month
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IoIosTimer/>Last Year
                        </MenuItem>

                    </Menu>
                </div>
            </div>

        </Button >

    )
}

export default DashboardBox;



// import React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// import { BiDotsVerticalRounded } from "react-icons/bi";
// import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
// import { IoIosTimer } from "react-icons/io";

// const DashboardBox = (props) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const ITEM_HEIGHT = 48;

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Button
//       className="dashboardBox"
//       style={{
//         backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
//       }}
//     >
//       {/* Trend icon */}
//       {props.grow ? (
//         <span className="chart">
//           <FaArrowTrendUp />
//         </span>
//       ) : (
//         <span className="chart">
//           <FaArrowTrendDown />
//         </span>
//       )}

//       {/* Main content */}
//       <div className="d-flex w-100">
//         <div className="col1">
//           <h4 className="text-white mb-0">
//             {props.title || "Title"}
//           </h4>

//           <span className="text-white">
//             {props.count ?? 0}
//           </span>
//         </div>

//         <div className="ms-auto">
//           {props.icon && <span className="icon">{props.icon}</span>}
//         </div>
//       </div>

//       {/* Bottom section */}
//       <div className="d-flex align-items-center w-100 bottomEle">
//         <h6 className="text-white mb-0 mt-0">Last Month</h6>

//         <div className="ms-auto">
//           <Button className="toggleIcon" onClick={handleClick}>
//             <BiDotsVerticalRounded />
//           </Button>

//           <Menu
//             className="dropdown_menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             slotProps={{
//               paper: {
//                 style: {
//                   maxHeight: ITEM_HEIGHT * 4.5,
//                   width: "20ch",
//                 },
//               },
//             }}
//           >
//             <MenuItem onClick={handleClose}>
//               <IoIosTimer /> Last Day
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <IoIosTimer /> Last Week
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <IoIosTimer /> Last Month
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <IoIosTimer /> Last Year
//             </MenuItem>
//           </Menu>
//         </div>
//       </div>
//     </Button>
//   );
// };

// export default DashboardBox;
