

import { useState } from "react";
import AddJob from "../../../../components/AddJob/AddJob";
import AppModal from "../../../../components/AppModal/AppModal";
import styles from "./Jobs.module.scss";
import TableDemoJobs from "./components/tableDemoJobs/tableDemoJobs";
import { Typography } from "@mui/material";

const Jobs = () => {
  const [showModal, setShowModal] = useState(false);


  const handleAddJob = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className={styles.jobs}>
      {/* add jobs btn */}
      <div className="d-flex w-100 align-items-center justify-content-between">
        <Typography className='title' variant='subtitle1'>List Of Jobs</Typography>
        <button className="btn btn-primary" onClick={(handleAddJob)}>
          <img src="/svgs/addIcon_White.svg" alt="Add Icon" />
          <span>Add Job</span>
        </button>
      </div>
      {/* Add job Modal */}
      {showModal &&
        <AppModal open={showModal} handleClose={handleAddJob}>
          <AddJob />
        </AppModal>
      }

      {/* This components below is here Because of the  deign form figma.
          It is well structured and suggested but right now it is not matching the backend APi response.
          Once enhanced the api, we will use it
      */}
      <TableDemoJobs />
    </div>
  )
}

export default Jobs