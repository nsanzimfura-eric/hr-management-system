

import { useState } from "react";
import CandidateCard from "../../../../components/CandidateCard/CandidateCard";
import styles from "./Candidates.module.scss";
import { demoCandidatesData } from "./demoCandidatesData";

const Candidates = () => {
  const [candidateClicked, setCandidateClicked] = useState<any>(null);

  const handleClickedCandidate = (candidate: any) => {
    setCandidateClicked(candidate)
  }

  return (
    <div className={styles.candidates}>
      {!candidateClicked &&
        <div className="candidatesWrapper">
          {demoCandidatesData.map((singleCandidate, index) => {
            return <CandidateCard key={index} data={singleCandidate} onclick={handleClickedCandidate} />
          })}
        </div>
      }
    </div>
  )
}

export default Candidates