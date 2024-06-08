import React from "react";
import "./Reviews.css";
import ratings from "../../assets/Images/ratings.png";
import emptyratings from "../../assets/Images/emptyratings.png";
import RatingsBar from "../ratingsBar/ratingsBar";
import profile from "../../assets/Images/profile.png";
import Reply from "../../assets/Images/Reply.png";
import Comment from "../Comment/Comment";




const Review = () => {
    return (
        <>
            <div className="reviews">
                <h3>Comments</h3>
                <div className="review-head">
                    <span><h2>4.0</h2></span>
                    <div className="img">
                        <div><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /></div>
                        <div>based on 146,951 ratings</div>
                    </div>
                    
                </div>

                {/* Section-3 Ratings */}
                <div className="main-rating-box">
                    <div className="ratings-box">
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><span>90%</span>
                        </div>
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>5%</span>
                        </div>
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>2%</span>
                        </div>
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><img src={emptyratings} alt="ratings" /><span>2%</span>
                        </div>
                        <div className="ratings">
                            <img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><img src={ratings} alt="ratings" /><span>90%</span>
                        </div>
                    </div>
                    <div className="ratings-box-value">
                        <RatingsBar />
                    </div>
                </div>
                {/* Person Reviews */}
                {/* Box-1 */}
                <div className="person-reviews">
                    <div className="person-review-1">
                        <img src = {profile} alt = "profile"/>
                        <div className="person-content">
                            <div className="person-review-box">
                                <span className="h-1">nnn</span>
                                <span className="h-2">kkkl</span>
                            </div>
                            <span className="content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</span>
                            <div className="h-3">
                                <img src={Reply} alt="reply"/>
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Box-2 */}
                <div className="person-reviews">
                    <div className="person-review-1">
                        <img src = {profile} alt = "profile"/>
                        <div className="person-content">
                            <div className="person-review-box">
                                <span className="h-1">nnn</span>
                                <span className="h-2">kkkl</span>
                            </div>
                            <span className="content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</span>
                            <div className="h-3">
                                <img src={Reply} alt="reply"/>
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Box-3 */}
                <div className="person-reviews">
                    <div className="person-review-1">
                        <img src = {profile} alt = "profile"/>
                        <div className="person-content">
                            <div className="person-review-box">
                                <span className="h-1">nnn</span>
                                <span className="h-2">kkkl</span>
                            </div>
                            <span className="content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt odit quod adipisci obcaecati esse cum totam quia aliquam vitae sequi, consequatur delectus officia perspiciatis voluptatem libero? Culpa, maiores? Ratione quod suscipit delectus. Error mollitia molestias doloribus ad vero perspiciatis ipsam, sequi consequuntur recusandae suscipit optio provident iure sunt nemo.</span>
                            <div className="h-3">
                                <img src={Reply} alt="reply"/>
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
             {/* Comment-box */}
             <Comment/>
        </>
    )
}

export default Review;