import  "./post.css";
import {Users} from "../../userData";

export default function Post({post}) {
  
  return (
    <div className ="post">
    < div className ="postWrapper">
    <div className ="postTop">
      <div div className ="postTopLeft">
        <img className="postProflieImg" scr = {Users.filter(u=>u.id ===post?.userId)[0].profilePicture}alt= ""/>
        
        <span className="postUsername">{Users.filter(u=>u.id ===post?.userId)[0].username}</span>
        <span className="postDate">{post.date}</span>
      </div>
      < div className ="postTopRight">

    </div>
    <div className ="postCenter">
      <span className="postText"> {post?.desc}</span>
      <img className="postProflieImg" scr = {post.photo} alt= ""/>
    <div className ="postBottom"> 
      <div className ="postBottomLeft"> 
      <img className="likeIcon" scr = "/assets/icons/like-48-2.png" alt= ""/>
      <img className="likeIcon" scr = "/assets/icons/like-48.png" alt= ""/>
      <span className="postLikeCounter">{post.like} people like it</span>
      </div>
      <div className ="postBottomRight"> 
      <span className="postCommentText">{post.comment}comments</span>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
