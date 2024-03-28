import { useState } from "react";
import styles from "./dashboardHome.module.scss";
import UpComingMeetings from "../../../../components/upComingMeetings/upComingMeetings";
import ButtonIcon from "../../../../components/ButtonIcon/ButtonIcon";
import { Typography } from "@mui/material";
import { overViewData } from "./overViewData";
import OverViewSinglerComponent from "../../../../components/OverViewSinglerComponent/OverViewSinglerComponent";
import RequireAttention from "../../../../components/RequireAttention/RequireAttention";


const DashboardHome = () => {
  const [showMeetings, setShowMeetings] = useState(true);

  const toggleMeetings = () => {
    setShowMeetings(prev => !prev)
  }

  return (
    <div className={styles.dashboardHome}>
      <div className="contentMiddleWrapper">
        {/* header */}
        <div className="w-100 d-flex justify-content-between align-items-center wrapperHeader">
          <Typography className='title' variant='subtitle1'>OverView</Typography>
          <div className="btns d-flex  align-items-center ms-auto">
            <button className="btn btn-primary">
              <img src="/svgs/addIcon_White.svg" alt="Add Icon" />
              <span>Add Candidate</span>
            </button>
            <button className="btn btn-primary">
              <img src="/svgs/addIcon_White.svg" alt="Add Icon" />
              <span>Add Job</span>
            </button>
          </div>
        </div>
        {/* Overview body */}
        <div className="overViewBody w-100">
          {overViewData.map((data, index) => {
            return <OverViewSinglerComponent key={index} data={data} />
          })}
        </div>
        {/* Require Attention Bottom */}
        <div className="requireAttentionWrapper">
          <div className="w-100 d-flex justify-content-between align-items-center wrapperHeader">
            <Typography className='title' variant='subtitle1'>Require Attention</Typography>
          </div>
          <RequireAttention />
        </div>
      </div>
      <UpComingMeetings showMeetings={showMeetings} />
      <div className="buttonToggleMeetings">
        <ButtonIcon url="/svgs/arrowRight.svg" onClick={toggleMeetings} style={{ transform: !showMeetings ? 'rotate(180deg)' : '' }} />
      </div>
    </div>
  )
}

export default DashboardHome