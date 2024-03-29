
import { useState } from "react";
import styles from "./SelectedCandidate.module.scss";
import GeneralCandidateData from "./GeneralCandidateData";


interface CandidateProps {
    candidate: any;
}
const headerFilters = ['General', 'Evaluations', 'Experience', 'Education', 'Events', 'Documents', 'Messages'];

const CandidateDetails = (props: CandidateProps) => {
    const { candidate } = props;
    const [activeFilter, setActiveFilter] = useState<string>(headerFilters[0]);
    console.log(candidate)

    return (
        <div className={styles.candidateDetails}>
            {/* Header filters */}
            <div className="headerFilters bg-none">
                {headerFilters.map((item) => (
                    <button key={item} onClick={() => setActiveFilter(item)}>
                        <span className={activeFilter === item ? "active" : ""} >{item}</span>
                        <div className={activeFilter === item ? "activeLine" : ""}></div>
                    </button>
                ))}
            </div>
            {/* filtered results */}
            {activeFilter === "General" && <GeneralCandidateData candidate={candidate} />}
            {activeFilter === "Evaluations" && <span>Evaluations</span>}
            {activeFilter === "Experience" && <span>Experience</span>}
            {activeFilter === "Education" && <span>Education</span>}
            {activeFilter === "Events" && <span>Events</span>}
            {activeFilter === "Documents" && <span>Documents</span>}
            {activeFilter === "Messages" && <span>Messages</span>}

        </div>
    )
}

export default CandidateDetails