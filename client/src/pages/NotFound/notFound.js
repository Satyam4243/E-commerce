import React from 'react';
import './notFound.css';
import Page404 from '../../assets/images/page-404.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='notFound'>
            <div className='container-fluid'>
                <div className='box text-center'>
                    <img src={Page404} />
                    <br/><br/>
                    <h1>Page Not Found</h1>
                    <p>The link you Clicked may be broken or the page may have been removed. 
                        visit the Homepage or Contact us about the problem
                    </p>
                    <br/>

                    <div className='d-flex'>
                        <Button className='btn-g btn-lg m-auto'><Link to={'/'}>Back to Home Page</Link></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
