
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
            {activeFilter === "Evaluations" && <span className="w-100 text-center p-4">Evaluations</span>}
            {activeFilter === "Experience" && <span className="w-100 text-center p-4">Experience</span>}
            {activeFilter === "Education" && <span className="w-100 text-center p-4">Education</span>}
            {activeFilter === "Events" && <span className="w-100 text-center p-4">Events</span>}
            {activeFilter === "Documents" && <span className="w-100 text-center p-4">Documents</span>}
            {activeFilter === "Messages" && <span className="w-100 text-center p-4">Messages</span>}

        </div>
    )
}

export default CandidateDetails