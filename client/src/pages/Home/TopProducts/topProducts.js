import React from 'react'
import './topProducts.css';

import Img1 from '../../../assets/images/thumbnail-1.jpg';
import Img2 from '../../../assets/images/thumbnail-2.jpg';
import Img3 from '../../../assets/images/thumbnail-3.jpg';

import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const TopProducts = ({ title }) => {
    return (
        <div className="topSelling_box">

            {/* Title + Underline */}
            <div className="tpHeader">
                <h3>{title}</h3>
                <div className="tpUnderline"></div>
            </div>

            {/* Product 1 */}
            <div className="items d-flex align-items-center">
                <div className="img">
                    <Link to="">
                        <img src={Img1} className="w-100" alt="Product" />
                    </Link>
                </div>

                <div className="info px-3">
                    <Link to=""><h4>Nestle Orignal Coffee-Mate Coffee Center</h4></Link>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    <div className="d-flex align-items-center gap-4">
                        <span className="price text-g font-weight-bold">$28.85</span>
                        <span className="oldPrice">$32.8</span>
                    </div>
                </div>
            </div>

            {/* Product 2 */}
            <div className="items d-flex align-items-center">
                <div className="img">
                    <Link to="">
                        <img src={Img2} className="w-100" alt="Product" />
                    </Link>
                </div>

                <div className="info px-3">
                    <Link to=""><h4>Nestle Orignal Coffee-Mate Coffee Center</h4></Link>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    <div className="d-flex align-items-center gap-4">
                        <span className="price text-g font-weight-bold">$28.85</span>
                        <span className="oldPrice">$32.8</span>
                    </div>
                </div>
            </div>

            {/* Product 3 */}
            <div className="items d-flex align-items-center">
                <div className="img">
                    <Link to="">
                        <img src={Img3} className="w-100" alt="Product" />
                    </Link>
                </div>

                <div className="info px-3">
                    <Link to=""><h4>Nestle Orignal Coffee-Mate Coffee Center</h4></Link>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    <div className="d-flex align-items-center gap-4">
                        <span className="price text-g font-weight-bold">$28.85</span>
                        <span className="oldPrice">$32.8</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopProducts;
