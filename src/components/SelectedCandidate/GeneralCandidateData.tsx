
import styles from "./SelectedCandidate.module.scss";
import ProgressCircularLine from "./../progressCircularLine/progressCircularLine";


interface CandidateProps {
    candidate: any;
}
const GeneralCandidateData = (props: CandidateProps) => {
    const { candidate } = props;

    return (
        <div className={styles.generalCandidateData}>
            <div className="detailsWrapper d-flex flex-column">

            </div>
            <div className="overView d-flex flex-column">
                <div className="w-100 loadersPercent d-flex flex-column justify-content-center align-items-center">
                    <div className="loaderBox">
                        <ProgressCircularLine percentage={76} />
                    </div>
                    <div className="d-flex score">
                        <span>Score:</span>
                        <span className="fit">Potential Fit</span>
                    </div>
                    <button className="edit">Edit</button>
                </div>
                {/* skills  */}
                <div className="skills">
                    {candidate.skills?.map((skill: any, index: number) => {
                        return (
                            <div key={index} className="skill d-flex">
                                <span>{skill.name}</span>
                                <img src={`/svgs/${skill.good ? "tick" : "close"}.svg`} alt="Icon" />
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default GeneralCandidateData