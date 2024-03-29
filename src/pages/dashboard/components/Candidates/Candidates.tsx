

import CandidateCard from "../../../../components/CandidateCard/CandidateCard";
import styles from "./Candidates.module.scss";
import { demoCandidatesData } from "./demoCandidatesData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SelectedCandidate from "../../../../components/SelectedCandidate/SelectedCandidate";
import { setClickedCandidate } from "./candidatesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const Candidates = () => {
  const dispatch = useDispatch()
  const { clickedCandidate } = useSelector((state: RootState) => state.candidatesReducers);


  const handleClickedCandidate = (candidate: any) => {
    dispatch(setClickedCandidate(candidate));
  }

  const handleGoBack = () => {
    dispatch(setClickedCandidate(null));
  }

  return (
    <div className={styles.candidates}>
      {/* header */}
      <div className="header w-100 d-flex justify-content-between align-items-center">
        <div className="candidatesTitle"><span>Candidates</span>{clickedCandidate && <span className="selected">{">"}{clickedCandidate.name} </span>}</div>
        {clickedCandidate &&
          <div className="d-flex backBtn" onClick={handleGoBack}>
            <div className="icon"><ArrowBackIcon sx={{ width: 30 }} /></div>
            <span>Go Back</span>
          </div>
        }
      </div>
      {/* List of candidates */}

      {!clickedCandidate &&
        <div className="candidatesWrapper">
          {demoCandidatesData.map((singleCandidate, index) => {
            return <div className="singleCandidate" key={index}><CandidateCard key={index} data={singleCandidate} onclick={handleClickedCandidate} />
            </div>
          })}
        </div>
      }
      {/* selected candidate */}
      {clickedCandidate &&
        <SelectedCandidate candidate={clickedCandidate} />}
    </div>
  )
}

export default Candidates