import React from 'react';
import '../style/style.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return ( 
    <div className=' mt-3 container '>
        <div className=' d-flex col-12 col-md-3  col-lg-2 justify-content-center mb-5'>
            <a href="https://www.instagram.com/" className='hows' target='_blank '>
            <img src="INS.png" className='icons m-2'/>
            </a>
            <a href="https://www.youtube.com/" className='hows' target='_blank '>
            <img src="yt.png" className='icons  m-2'  />
            </a>
            <a href="https://www.twitter.com/" className='hows' target='_blank '>
            <img src="tw.png" className='icons m-2'  />
            </a>
            <a href="https://www.facebook.com/" className='hows' target='_blank '>
            <img src="fb.png" className='icons m-2'   />
            </a>
        </div> 
    </div>
     )
}

export default Footer;