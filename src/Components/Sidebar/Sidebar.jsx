import React from "react";
import "./Sidebar.css";
import PriceSlider from "../Price Slider/PriceSlider";
import star from "../../assets/Images/star.png";
import blankstar from "../../assets/Images/blankstar.png";
import Discount from "./Discount";
import Offer from "./Offer";
// import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="side-content-1">
                    <h3>Category</h3>
                    <p>Smartphones & Basic Mobile Smartphones </p>
                </div>
                <div className="side-review padding-top">
                    <h3>Customer Review</h3>
                    <p><img src={star}/><img src={star}/><img src={star}/><img src={blankstar}/> <span>& Up</span></p>
                    <p> <img src={star}/><img src={star}/><img src={star}/><img src={blankstar}/> <span>& Up</span></p>
                    <p> <img src={star}/><img src={star}/><img src={star}/><img src={blankstar}/> <span>& Up</span></p>
                </div>
                <div className="side-brands padding-top">
                    <h3>Brands</h3>
                    <div><input type="checkbox"/> Samsung</div>
                    <div><input type="checkbox"/> Samsung</div>
                    <div><input type="checkbox"/> Samsung</div>
                    <div><input type="checkbox"/> Samsung</div>
                    
                </div>
                <div className="side-price padding-top">
                    <h3>Price</h3>
                    <PriceSlider/>
                </div>
                <div className="deals padding-top">
                    <h3>Deals & Discounts</h3>
                    <p>
                        {/* <Link to="/Offer">All Discounts</Link> */}
                    </p>
                    <p>Today's Deals</p>
                </div>
                <div className="pay padding-top">
                    <h3>Pay On Delivery</h3>
                    <div>
                    <input type="checkbox"/> Eligible for Pay On Delivery
                    </div>
                </div>
                <div className="available padding-top">
                    <input type="checkbox"/> Include Out of Stock

                </div>
            
            </div>
        </div>
    )
}

export default Sidebar;