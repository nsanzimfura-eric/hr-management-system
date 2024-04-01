import { useState } from "react";
import styles from "./dashboardHome.module.scss";
import UpComingMeetings from "../../../../components/upComingMeetings/upComingMeetings";
import ButtonIcon from "../../../../components/ButtonIcon/ButtonIcon";
import { Typography } from "@mui/material";
import { overViewData } from "./overViewData";
import OverViewSinglerComponent from "../../../../components/OverViewSinglerComponent/OverViewSinglerComponent";
import RequireAttention from "../../../../components/RequireAttention/RequireAttention";
import AppModal from "../../../../components/AppModal/AppModal";
import AddJob from "../../../../components/AddJob/AddJob";


const DashboardHome = () => {
  const [showMeetings, setShowMeetings] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleMeetings = () => {
    setShowMeetings(prev => !prev)
  }
  const handleAddCandidate = () => {
    // HR can not add a candidate, instead candidates will be added by default,
    // when they have applied to the job posted by the HR.
    // that's why I put there  this alert  !!!!!!!!!!!!!!!!!!!
    alert("HR can not add a candidate, instead candidates will be added by default, when they have applied to the jobs you posted as HR")
  }
  const handleAddJob = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className={styles.dashboardHome}>
      <div className="contentMiddleWrapper">
        <div className="w-100 d-flex justify-content-between align-items-center wrapperHeader">
          <Typography className='title' variant='subtitle1'>OverView</Typography>
          <div className="btns d-flex  align-items-center ms-auto">
            <button className="btn btn-primary" onClick={handleAddCandidate}>
              <img src="/svgs/addIcon_White.svg" alt="Add Icon" />
              <span>Add Candidate</span>
            </button>
            <button className="btn btn-primary" onClick={(handleAddJob)}>
              <img src="/svgs/addIcon_White.svg" alt="Add Icon" />
              <span>Add Job</span>
            </button>
          </div>
        </div>
        {/* Add job Modal */}
        {showModal &&
          <AppModal open={showModal} handleClose={handleAddJob}>
            <AddJob handleClose={handleAddJob} />
          </AppModal>
        }
        {/* Overview body */}
        <div className="overViewBody w-100">
          {overViewData.map((data, index) => {
            return <OverViewSinglerComponent key={index} data={data} />
          })}
        </div>
        {/* Require Attention Bottom */}
        <div className="requireAttentionWrapper d-flex flex-column">
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