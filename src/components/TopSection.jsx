import React from 'react'
import Button from "./Button"

function TopSection() {
    return (
        <div><div className="head-box" >
            <div className="box" >
                <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="img" alt="" />
                <h1 className="head" >Twitter</h1>
            </div>
            <div className="set" >
                <Button />

                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" className="settings" alt="" />
            </div>
        </div></div>
    )
}

export default TopSection