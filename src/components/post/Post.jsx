import  "./post.css"

export default function Post() {
  return (
    <div className ="post">
    < div className ="postWrapper">
    <div className ="postTop">
      <div div className ="postTopLeft">
        <img className="postProflieImg" scr = "/assets/profilepictures/piyaporn.JPG"alt= ""/>
        
        <span className="postUsername">Piyaporn Puangprasert</span>
        <span className="postDate">5 minutes ago</span>
      </div>
      < div className ="postTopRight">

    </div>
    <div className ="postCenter">
      <span className="postText"> Let's check Google Intern event this Christmas!</span>
      <img className="postProflieImg" scr = "/assets/companies/google.jpg" alt= ""/>
    <div className ="postBottom"> 
      <div className ="postBottomLeft"> 
      <img className="likeIcon" scr = "/assets/icons/like-48-2.png" alt= ""/>
      <img className="likeIcon" scr = "/assets/icons/like-48.png" alt= ""/>
      <span className="postLikeCounter">200 people like it</span>
      </div>
      <div className ="postBottomRight"> 
      <span className="postCommentText">7 comments</span>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
