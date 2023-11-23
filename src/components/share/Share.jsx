import "./share.css";

export default function Share() {
  return (
    <div className ="share">
      < div className ="shareWrapper">
            <div class="card">
          <br/>
              <img src="/assets/companies/google.jpg" alt="" />
              < div class="card-body">
                <h3 class="card-title">Google: Software Engineer</h3>
                <p class="card-text">
                   Meet up with senior software engineer team and how to gain insight the intern this Summer
                </p>
                <p>Virtual - December 25 at 2:30 ET</p>
                <br/>
              <div className="sharTop">
                <img className = "shareProflieImg" src= "/assets/profilepictures/piyaporn.JPG" alt=""/>
                <input placeholder = " What's is your opinion?" className = "shareInput"/>
              </div>
              <hr className ="shareHr"/>
              <div className = "shareBottom">
                <div className = "shareOptions">
                  <div className = "shareOption">
                    <span className="shareOptionText">Photo or Video"</span>
                    <span className="shareOptionText">| Tag | </span>
                    <span className="shareOptionText">| Location | </span>
                    <span className="shareOptionText">| Opinion | </span>
                </div>
              </div>          
            </div>
            </div>
            </div>
            </div>
          </div>
  )
}
