import Post from "../post/Post";
import Share from "../share/Share";
import "./comments.css";
import {Posts} from "../../userData";

export default function Comments() {
  return(
    <div className = "comments">
      < div className = "commentsWrapper">
        <Share/>
      
        {Posts.map((p)=> (
        <Post key = {p.id} post = {p}/>
        ))}
    </div>
   </div>
  );
}