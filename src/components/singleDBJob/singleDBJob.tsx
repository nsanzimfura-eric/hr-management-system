
import { backendAPI } from "../../api/backendAPI";
import { getTimeAgo } from "../../helpers/calculateTimeAgo";
import useDelete from "../../hooks/useDelete";
import AlertComponent from "../AlertComponent/AlertComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import styles from "./singleDBJob.module.scss";
import { Accordion } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import AppModal from "../AppModal/AppModal";
import ApplyToJOB from "./../ApplyToJOB/ApplyToJOB";
import useFetchData from "../../hooks/useFetchData";

export interface HRinterface {
    id: string
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;

}

export interface CandidateInterface {
    id: string
    name: string;
    email: string;
    profile: string;
    resume: string;
    web: string;
    github: string;
    linkedin: string;
    phone: string;
    createdAt: string;
    updatedAt: string;

}
export interface DBJobInterface {
    id: string;
    title: string;
    description: string;
    creator_id: string;
    deadline: string;
    createdAt: string;
    updatedAt: string;
    creator: HRinterface
    candidates: CandidateInterface[] | [];

}

interface SingleJobProps {
    index: string;
    job: DBJobInterface;

}
const SingleDBJob = (props: SingleJobProps) => {
    const { job, index } = props;
    const { loading, error, success, deleteHandler } = useDelete();
    const { fetchHandler } = useFetchData();
    const [showApplyModal, setShowApplyModal] = useState(false);

    const handleDeleteJob = (id: string) => {
        void deleteHandler(backendAPI.deleteJob(id))
    }
    const token = localStorage.getItem('token')

    const handleApply = () => {
        setShowApplyModal(prev => !prev)
    }
    //refresh jobs list
    useEffect(() => {
        if (success && !loading) {
            void fetchHandler(backendAPI.getAllJobs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);

    return (
        <div className={styles.singleDBJob}>
            <Accordion>
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                        <h4 className="title">{job.title}</h4>
                        <span className="ago">Published in {getTimeAgo(job.createdAt)}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="deleteHeader mb-2">
                            <span className="titleApplicants">{job.candidates?.length} Applicant{`${job.candidates?.length > 1 ? "s" : ""}`}</span>
                            {token &&
                                // you can delete on if you are HR
                                <button onClick={() => handleDeleteJob(job.id)}>
                                    <DeleteIcon sx={{ color: "#d50000", width: 25, height: 35 }} />
                                </button>
                            }
                            {error && <AlertComponent message={error} />}
                            {loading && <LoadingComponent />}
                        </div>
                        <div className="deleteHeader mb-2 d-flex justify-content-end">

                            <button onClick={handleApply} className="btn btn-primary">
                                Apply To This JoB
                            </button>
                        </div>
                        {/* apply Modal */}
                        {showApplyModal &&
                            <AppModal open={showApplyModal} handleClose={handleApply}>
                                <ApplyToJOB handleClose={handleApply} job={job} />
                            </AppModal>
                        }
                        <div dangerouslySetInnerHTML={{ __html: job.description }} className="details" />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default SingleDBJob