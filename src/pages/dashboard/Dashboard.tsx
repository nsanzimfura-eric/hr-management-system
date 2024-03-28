
import { useState } from "react";
import Guards from "../../components/Guards/Guards";
import SideNavBar from "./components/sideNavbar/sideNavbar";
import styles from "./dashboard.module.scss";
import TopNavbar from "./components/topNavbar/topNavbar";
import UpComingMeetings from "./components/upComingMeetings/upComingMeetings";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Dashboard = () => {
  const [sideNavAside, setSideNavAside] = useState(true);
  const [showMeetings, setShowMeetings] = useState(true);


  return (
    <Guards>
      <div className={styles.dashboard}>
        <SideNavBar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
        <div className={`${sideNavAside ? "contentWrapper p-0 m-0" : "contentWrapper widthFullContentWrapper w-full p-0 m-0"}`}>
          <TopNavbar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
          <div className="contentScrollable">
            <div className="contentMiddleWrapper">
              test wrapper
            </div>
            <UpComingMeetings showMeetings={showMeetings} setShowMeetings={setShowMeetings} />
          </div>
        </div>
      </div>
    </Guards>
  )
}

export default Dashboard