
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
                <div className="d-flex titleBox">
                    <span>Candidate Files</span>
                    <button className="edit">Edit</button>
                </div>
                {/* files */}
                <div className="filesBox d-flex">
                    {candidate.files?.map((file: any, index: number) => {
                        return (
                            <div key={index} className="file">
                                <img src="/svgs/pdf.svg" alt="Pdf Logo" width={16} height={16} />
                                <span>{file.name}</span>
                                <span className="time">{file.time}</span>
                            </div>
                        )
                    })}
                    <div>
                    </div>
                </div>
                {/* view all */}
                <div className="p-0 m-0 w-100 d-flex justify-content-end">
                    <button className="edit">View All</button>
                </div>

                <div className="d-flex titleBox">
                    <span>Last Experience</span>
                    <button className="edit">Edit</button>
                </div>
                {/* experience */}
                <div className="experienceBox d-flex flex-column" dangerouslySetInnerHTML={{ __html: candidate.experiences }} />
            </div>
            <div className="overView d-flex flex-column">
                <div className="loadersPercent d-flex flex-column justify-content-center align-items-center">
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