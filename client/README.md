# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





main code of header.js file code.......

<!-- import React, { useState, useEffect } from 'react';
import '../header/header.css';
import logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select.js';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.svg'
import IconWishlist from '../../assets/images/icon-wishlist.svg'
import IconCart from '../../assets/images/icon-cart.svg'
import IconUser from '../../assets/images/icon-user.svg'

const Header = () => {

    const [categories, setcategories] = useState([
        'Milks and Diaries',
        'Wines & Drinks',
        'Clothing & Beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast Food',
        'Baking Material',
        'Vegetables',
        'Fresh Fruits',
        'Bread & Juice',
        'Milks and Diaries',
        'Wines & Drinks',
        'Clothing & Beauty',
        'Fresh Seafood',

    ]);

    const [countries, setCountries] = useState([])


    useEffect(() => {
        getCountry();
    }, []);

    const getCountry = async () => {
        try {
            await axios.get('https://countriesnow.space/api/v0.1/countries/capital').then((res) => {
                if (res !== null) {
                    setCountries(res?.data?.data)

                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    // console.log(countries,'....................');


    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-sm-2">
                            <img src={logo} alt="Website Logo" />
                        </div>
                        {/* headerSearch Start here */}
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                <Select data={categories} placeholder={'All Categories'} icon={false} />

                                <div className='search'>
                                    <input type='text' placeholder='Search for items...' />
                                    <SearchIcon className="searchIcon cursor" />
                                </div>
                            </div>
                        </div>

                        {/* headerSearch Start here */}
                        <div className='col-sm-5 d-flex align-items-center'>
                            <div className='ml-auto d-flex align-items-center'>
                                <div className='countryWrapper'>
                                    <Select countries={countries} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{ opacity: '0.5' }} />} />
                                </div>

                                <ul className='list list-inline mb-0 headerTabs'>
                                    <li className='list-inline-item'>
                                        <span>
                                            <img src={IconCompare} />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            Compare
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span>
                                            <img src={IconWishlist} />
                                            <span className='badge bg-success rounded-circle'>5</span>
                                            Wishlist
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span>
                                            <img src={IconCart} />
                                            <span className='badge bg-success rounded-circle'>2</span>
                                            Cart
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span>
                                            <img src={IconUser} />
                                            Account
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}

export default Header; -->






main code of select.js................\

<!-- import React, { useEffect, useState } from 'react';
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';



const Select = ({ countries, placeholder, icon }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(countries)
    }, [countries])


    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [selectedItem, setselectedItem] = useState(placeholder);

    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data); 

    const openSelect = () => {
        setisOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index, name) => {
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }

    const filterList=(e)=>{
        const keyword = e.target.value;
        
        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword);
        })

        const list2 = list.filter((item, index) => list.indexOf(item) === index);

        setListData(list2)
    }

    return (
        <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
            <div className='selectDropWrapper cursor position-relative'>
                {icon}
                <span className='openSelect' onClick={openSelect}>{selectedItem}<KeyboardArrowDownIcon className='arrow' /> </span>
                {
                    isOpenSelect === true &&
                    <div className='selectDropMenu'>
                        <div className='searchField'>
                            <input type='text' placeholder='Search here...' onChange={filterList}/>
                        </div>
                        <ul className='searchResults'>
                              <li key={0} onClick={() => closeSelect(0, placeholder)}
                                className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder}</li>
                            {data&& data.length>0&& data.map((item,index)=>{
                                // console.log(item);
                                
                                return  <li style={{ color: 'black' }} key={index + 1} onClick={() => closeSelect(index + 1, item.name)}
                                            className={`${selectedIndex === index + 1 ? 'active' : ''}`}>{item.name}</li>
                            })}
                            {/* <li key={0} onClick={() => closeSelect(0, placeholder)}
                                className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder}</li> */}

                            {/* props use for all data show on header file in navbar categories  */}
                            {/* {
                                listData.data.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <li style={{ color: 'black' }} key={index + 1} onClick={() => closeSelect(index + 1, item)}
                                            className={`${selectedIndex === index + 1 ? 'active' : ''}`}>{item}</li>
                                    )
                                })
                            } */}
                        </ul>
                    </div>
                }

            </div>
        </ClickAwayListener>
    )
}

export default Select; -->
