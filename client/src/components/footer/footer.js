import React from 'react'
import './footer.css';

import Icon1 from '../../assets/images/icon1.png';
import Icon2 from '../../assets/images/icon2.png';
import Icon3 from '../../assets/images/icon3.png';
import Icon4 from '../../assets/images/icon4.png';
import Icon5 from '../../assets/images/icon5.png';

import Logo from '../../assets/images/logo.svg'

import { Link } from 'react-router-dom';


import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';

import payementMethod from '../../assets/images/paymentmethod.png';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { FormatAlignJustify } from '@mui/icons-material';
import Newsletter from '../../components/newsletter/newsLetter';
import NewsletterImg from '../../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>
            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2>Stay home & get your daily <br /> needs from our shop</h2>
                            <p>Start you'r Daily Shopping with Nest Mart</p>
                            <br /><br />
                            <Newsletter />
                        </div>

                        <div className='img'>
                            <img src={NewsletterImg} className='w-100' />
                        </div>

                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row '>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon1} /></span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon2} /></span>
                                    <div className='info'>
                                        <h4>Free delivery</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon3} /></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon4} /></span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <Link to='/'><img src={Logo} /></Link>
                                <br/><br/>
                                <p>Awesome grocery store website template</p>
                                <br />

                                <p><LocationOnOutlinedIcon /><strong>Address</strong>: 5171W Campbell Ave Kent, utah 53127 United States</p>
                                <p><HeadphonesOutlinedIcon /><strong>Call Us</strong>: (+1) - 540-675-45372</p>
                                <p><EmailOutlinedIcon /><strong>Email</strong>: abcx12345@gmail.com</p>
                                <p><WatchLaterOutlinedIcon /><strong>Hours</strong>: 10:00 - 18:00, Mon - Sat</p>

                            </div>

                            <div className='col-md-6 part2'>
                                <div className='row text-center'>
                                    <div className='col-md-3'>
                                        <h3>Company</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to='#'>About Us</Link></li>
                                            <li><Link to='#'>Delivery Information</Link></li>
                                            <li><Link to='#'>Privacy Policy</Link></li>
                                            <li><Link to='#'>Terms &amp; Conditions</Link></li>
                                            <li><Link to='#'>Contact Us</Link></li>
                                            <li><Link to='#'>Support Center</Link></li>
                                            <li><Link to='#'>Careers</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col-md-3'>
                                        <h3>Account</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to='#'>Sign In</Link></li>
                                            <li><Link to='#'>View Cart</Link></li>
                                            <li><Link to='#'>My Wishlist</Link></li>
                                            <li><Link to='#'>Track My Order</Link></li>
                                            <li><Link to='#'>Help Ticket</Link></li>
                                            <li><Link to='#'>Shipping Details</Link></li>
                                            <li><Link to='#'>Compare Products</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col-md-3 '>
                                        <h3>Corporate</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to='#'>Become a Vendor</Link></li>
                                            <li><Link to='#'>Affiliate Program</Link></li>
                                            <li><Link to='#'>Farm Business</Link></li>
                                            <li><Link to='#'>Farm Careers</Link></li>
                                            <li><Link to='#'>Our Suppliers</Link></li>
                                            <li><Link to='#'>Accessibility</Link></li>
                                            <li><Link to='#'>Promotions</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col-md-3'>
                                        <h3>Popular</h3>
                                        <ul className="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to='#'>Milk &amp; Flavoured Milk</Link></li>
                                            <li><Link to='#'>Butter and Margarine</Link></li>
                                            <li><Link to='#'>Eggs Subtitles</Link></li>
                                            <li><Link to='#'>Marmalades</Link></li>
                                            <li><Link to='#'>Sour Cream and Dips</Link></li>
                                            <li><Link to='#'>Tea &amp; Kombucha</Link></li>
                                            <li><Link to='#'>Cheese</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-3 part3 text-md-end mx-auto">
                                <h3 className='text-center'>Install App</h3>

                                <p className="mt-2 text-center">From App Store or Google Play</p>

                                <div className="d-flex justify-content-center gap-2">
                                    <Link to="">
                                        <img src={appStore} alt="App Store" width={150} />
                                    </Link>

                                    <Link to="">
                                        <img src={googlePlay} alt="Google Play" width={150} />
                                    </Link>
                                </div>

                                <p className="mt-3 text-center">Secured Payment Gateways</p>

                                <img src={payementMethod} alt="Payment Methods" className="img-fluid mx-auto d-block" style={{ maxWidth: "220px" }}/>
                            </div>


                        </div>

                        <hr />

                        <div className='row lastStrip'>
                            <div className='col-md-3'>
                                <p>©2025 Nest - Grocery Web App.<br />
                                    All rights reserved..</p>
                            </div>

                            <div className='col-md-6 d-flex'>
                                <div className='m-auto d-flex align-items-center'>
                                    <div className='phNo d-flex align-items-center mx-3'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>

                                    <div className='phNo d-flex align-items-center mx-3'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3 part3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us: </h5>
                                    <ul className='list list-inline ms-2'>
                                        <li className='list-inline-item'>
                                            <Link to={''}><FacebookOutlinedIcon /></Link>
                                        </li>

                                        <li className='list-inline-item'>
                                            <Link to={''}><XIcon /></Link>
                                        </li>

                                        <li className='list-inline-item'>
                                            <Link to={''}><InstagramIcon /></Link>
                                        </li>

                                        <li className='list-inline-item'>
                                            <Link to={''}><YouTubeIcon /></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer;
