import React from "react";
import "./Cards.css";
import items from "../../assets/Images/item.jpg";
import star from "../../assets/Images/star.png";
import blankstar from "../../assets/Images/blankstar.png";



function Cards(){
    return(
        <>
        <div className="Card">

            <div className="card-container">
                <article className="card-article">
                    <img src={items}/>
                    <div className="card-text">
                        <span className="card-desc">Redmi A2 </span>
                        <h2 className="card-title">(Sea Green, 2GB RAM, 64GB Storage)</h2>
                        <a href="" className="card-button">Read more <img src={star}/><img src={star}/><img src={star}/><img src={blankstar}/></a>
                    </div>
                </article>
            </div>
        </div>
        </>
    )
}
export default Cards;