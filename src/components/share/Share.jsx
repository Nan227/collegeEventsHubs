import "./share.css" 

export default function Share() {

  return(
    <div className = "share">
      <div className = "shareWrapper">
        <div className = "shareTop">
          <img className="shareProfileImg" src ="/assets/profilepictures/piyaporn.JPG" alt=""/>
          <input placeholder = "What's your opinion about events?" className="shareInput"/>

        
        </div>
      </div>

    </div>
  )
}