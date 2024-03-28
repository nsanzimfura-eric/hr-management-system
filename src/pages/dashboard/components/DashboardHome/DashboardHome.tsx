import { useState } from "react";
import styles from "./dashboardHome.module.scss";
import UpComingMeetings from "../../../../components/upComingMeetings/upComingMeetings";
import ButtonIcon from "../../../../components/ButtonIcon/ButtonIcon";


const DashboardHome = () => {
  const [showMeetings, setShowMeetings] = useState(true);

  const toggleMeetings = () => {
    setShowMeetings(prev => !prev)
  }

  return (
    <div className={styles.dashboardHome}>
      <div className="contentMiddleWrapper  bg-warning">
        test wrapper
      </div>
      <UpComingMeetings showMeetings={showMeetings} />
      <div className="buttonToggleMeetings">
        <ButtonIcon url="/svgs/arrowRight.svg" onClick={toggleMeetings} style={{ transform: !showMeetings ? 'rotate(180deg)' : '' }} />
      </div>
    </div>
  )
}

export default DashboardHome