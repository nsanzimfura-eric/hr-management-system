

import { useState } from "react";
import CandidateCard from "../../../../components/CandidateCard/CandidateCard";
import styles from "./Candidates.module.scss";
import { demoCandidatesData } from "./demoCandidatesData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SelectedCandidate from "../../../../components/SelectedCandidate/SelectedCandidate";

const Candidates = () => {
  const [candidateClicked, setCandidateClicked] = useState<any>(null);

  const handleClickedCandidate = (candidate: any) => {
    setCandidateClicked(candidate)
  }

  const handleGoBack = () => {
    setCandidateClicked(null)
  }

  return (
    <div className={styles.candidates}>
      {/* header */}
      <div className="header w-100 d-flex justify-content-between align-items-center">
        <div className="candidatesTitle"><span>Candidates</span>{candidateClicked && <span className="selected">{">"}{candidateClicked.name} </span>}</div>
        {candidateClicked &&
          <div className="d-flex backBtn" onClick={handleGoBack}>
            <div className="icon"><ArrowBackIcon sx={{ width: 30 }} /></div>
            <span>Go Back</span>
          </div>
        }
      </div>
      {/* List of candidates */}

      {!candidateClicked &&
        <div className="candidatesWrapper">
          {demoCandidatesData.map((singleCandidate, index) => {
            return <CandidateCard key={index} data={singleCandidate} onclick={handleClickedCandidate} />
          })}
        </div>
      }
      {/* selected candidate */}
      {candidateClicked &&
        <SelectedCandidate candidate={candidateClicked} />}
    </div>
  )
}

export default Candidates