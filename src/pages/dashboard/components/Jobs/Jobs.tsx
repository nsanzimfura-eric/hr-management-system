

import { useEffect, useState } from "react";
import AddJob from "../../../../components/AddJob/AddJob";
import AppModal from "../../../../components/AppModal/AppModal";
import styles from "./Jobs.module.scss";
import TableDemoJobs from "./components/tableDemoJobs/tableDemoJobs";
import { Typography } from "@mui/material";
import useFetchData from "../../../../hooks/useFetchData";
import { backendAPI } from "../../../../api/backendAPI";
import LoadingComponent from "../../../../components/LoadingComponent/LoadingComponent";
import ErrorComponent from "../../../../components/errorComponent/ErrorComponent";

interface AddJobProps {
  showHeader?: boolean;
}

const Jobs = (props: AddJobProps) => {
  const { showHeader = true } = props;

  const [showModal, setShowModal] = useState(false);
  const { data, loading, error, fetchHandler } = useFetchData();


  const handleAddJob = () => {
    setShowModal(prev => !prev)
  }

  const fetchJobs = () => {
    void fetchHandler(backendAPI.getAllJobs)
  }

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(loading, error, data, 'terst');
  return (
    <div className={styles.jobs}>
      {/* add jobs btn */}
      <div className="d-flex w-100 align-items-center justify-content-between p-0 m-0">
        <Typography className='title' variant='subtitle1'>List Of Jobs</Typography>
        {showHeader &&
          <button className="btn btn-primary" onClick={(handleAddJob)}>
            <img src="/svgs/addIcon_White.svg" alt="Add Icon" />
            <span>Add Job</span>
          </button>}
      </div>
      {/* Add job Modal */}
      {showModal &&
        <AppModal open={showModal} handleClose={handleAddJob}>
          <AddJob />
        </AppModal>
      }
      {loading && <LoadingComponent />}
      {error && !loading && <ErrorComponent message={error} />}
      {data && !loading &&
        <div className="jobsWrapper w-100 p-0 m-0">
          {/* This components below is here Because of the  deign form figma.
          It is well structured and suggested but right now it is not matching the backend APi response.
          Once enhanced the api, we will use it
      */}
          <TableDemoJobs />
        </div>}
    </div>
  )
}

export default Jobs