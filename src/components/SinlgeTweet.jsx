import React from 'react'
import Button from "./Button"


function SinlgeTweet() {
    return (
        <div>SinlgeTweet
            <div>
                <div className="main">
                    <div className="head-box" >
                        <div className="box" >
                            <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="img" alt="" />
                            <h1 className="head" >Twitter</h1>
                        </div>
                        <div className="set" >
                            <Button />

                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" className="settings" alt="" />
                        </div>
                    </div>
                    <a className="link" href="@twitter.com">@twitter.com</a>
                    <p className="para" >It just got easier to Tweet on  <a href=" Twitter.com">Twitter.com</a> <br />
                        You can now compose new Tweets at the <br /> top of your home timeline
                    </p>
                    <div className="images" >
                        <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-star-vector-icon-png-image_696411.jpg" className="star" alt="" />
                        <img src="https://www.freepnglogos.com/uploads/share-png/arrow-invite-join-share-sharing-icon-15.png" className="share" alt="" />
                        <img src="https://p.kindpng.com/picc/s/11-116879_box-return-returns-shopping-icon-return-icon-png.png" className="ret" alt="" />
                        <img src="https://static.thenounproject.com/png/658625-200.png" className="dot" alt="" />
                    </div> <hr />
                    < p className="para1" >RETWEETS FAVORITES</p>
                    <p className="para2" >539 503</p> <hr />
                    <p className="para3" >6:42pm-5 nov 2014</p>
                </div>
            </div>
        </div>
    )
}

export default SinlgeTweet