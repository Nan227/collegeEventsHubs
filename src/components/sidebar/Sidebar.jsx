import "./sidebar.css" 
export default function Sidebar() {

  return(
    <div className="sidebar"> 
      <div className="sidebarWrapper"> 
        <ul className="sidebarList"> 
            <li className="sidebarList"> 
              <span className ="sidebarListItemText">Events </span>
            </li>
          
            <li className="sidebarList"> 
              <span className ="sidebarListItemText">Jobs </span>
            </li>
            
            <li className="sidebarList"> 
              <span className ="sidebarListItemText">Employers </span>
            </li>
            <li className="sidebarList"> 
              <span className ="sidebarListItemText">Chats </span>
            </li>
            <li className="sidebarList"> 
              <span className ="sidebarListItemText">Career center </span>
              </li>
            <li className="sidebarList"> 
              <span className ="sidebarListItemText">Courses </span>
            </li>
             <li className="sidebarList"> 
              <span className ="sidebarListItemText">Bookmarks </span>
            </li>
            
            <li className="sidebarList"> 
             <span className ="sidebarListItemText">Questions </span>
            </li>
           
          </ul>
         
          
          <h3>Online:</h3>
            <hr className = "sidebarHr"/>
            <ul className = "sidebarFriendList">
              <li className ="sidebarFriend">
                <img className="sidebarFrindImg" src="/assets/profilepictures/liliana.jpg"alt=""/>
                <span className="sidebarFriendName">Liliana Cortes</span>

              </li>
              <li className ="sidebarFriend">
                <img className="sidebarFrindImg" src="/assets/profilepictures/ariana.jpg"alt=""/>
                <span className="sidebarFriendName">Ariana Smallwood</span>
                
              </li>
            </ul>

         
        </div>
      </div>      
  )
}