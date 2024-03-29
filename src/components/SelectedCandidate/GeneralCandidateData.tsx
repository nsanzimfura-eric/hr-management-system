
import styles from "./SelectedCandidate.module.scss";


interface CandidateProps {
    candidate: any;
}
const GeneralCandidateData = (props: CandidateProps) => {
    const { candidate } = props;

    return (
        <div className={styles.generalCandidateData}>


        </div>
    )
}

export default GeneralCandidateData