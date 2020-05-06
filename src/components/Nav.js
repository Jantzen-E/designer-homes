import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul className='navbar'>
                    <li >
                      <Link to="/" className="navbarLinks">Home</Link>  
                    </li>
                    <li >
                        <Link to="/services" className="navbarLinks">Services</Link>  
                    </li>
                    <li >
                        <Link to="/gallery" className="navbarLinks">Gallery</Link>  
                    </li>
                    <li >
                        <Link to="/history" className="navbarLinks">History</Link>  
                    </li>
                    <li >
                        <Link to="/reviews" className="navbarLinks">Reviews</Link>  
                    </li>
                    <li >
                        <Link to="/blog" className="navbarLinks">Blog</Link>  
                    </li>
                    <li >
                        <Link to="/contact" className="navbarLinks">Contact</Link>  
                    </li>
                    <li >
                        <Link to="/hours" className="navbarLinks">Business Hours</Link>  
                    </li>
                    <li >
                        <Link to="/videos" className="navbarLinks">Videos</Link>  
                    </li>
                </ul>
            </div>
        )
    }
}