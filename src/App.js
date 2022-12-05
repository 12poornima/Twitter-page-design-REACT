import Button from "./components/Button"

function App() {
  return (
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
        <p className="para" >It just got easier to Tweet on Twitter.com. <br />
          You can now compose new Tweets at the <br /> top of your hpme timeline
        </p>
      </div>
    </div>
  );
}

export default App;
