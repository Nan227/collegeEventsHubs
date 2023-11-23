import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className ="homeContainer">
        <Sidebar/>
        <Feed/>
      </div>
    </>
  )
}
