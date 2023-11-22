import Post from "../post/Post"
import Share from "../share/Share"
import "./comments.css";

export default function Comments() {
  return(
    <div className = "comments">
      <div className = "commentsWrapper"></div>
      <Share/>
      <Post/>
    </div>
  )
}