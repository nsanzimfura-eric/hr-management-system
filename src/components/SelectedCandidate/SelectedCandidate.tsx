
import { returnNamesInitials } from "../../helpers/getNameInitials";
import styles from "./SelectedCandidate.module.scss";

interface CandidateProps {
    candidate: any;
}

const SelectedCandidate = (props: CandidateProps) => {
    const { candidate } = props;


    return (
        <div className={styles.selectedCandidate}>
            <section className="header">
                <div className="intro d-flex flex-column">
                    {/* info */}
                    <div className="userWrapper">
                        <div className="logo"><span>{returnNamesInitials(candidate.name as string)}</span></div>
                        <div className="user d-flex flex-column">
                            <div className="namesWrapper d-flex">
                                <span className="title">{candidate.name}</span>
                                <button>Interview</button>
                            </div>
                            <div className="contacts d-flex">
                                <span className="email">{candidate.email}</span>
                                <span>{candidate.phone}</span>
                            </div>
                        </div>

                    </div>
                    {/* social medias */}
                    <div className="medias d-flex">
                        <button>Edit</button>
                        <a href={candidate.linkedin} target="_black" rel="noreferrer">
                            <img src="/svgs/in.svg" alt="Media" />
                        </a>
                        <a href={candidate.website} target="_black" rel="noreferrer">
                            <img src="/svgs/web.svg" alt="Media" />
                        </a>
                        <a href={candidate.twitter} target="_black" rel="noreferrer">
                            <img src="/svgs/x.svg" alt="Media" />
                        </a>
                    </div>
                </div>
                {/* status */}
                <div className="status d-flex flex-column">
                    <p>Current Status</p>
                    <div className="s-flex">
                        <span>Round</span>
                        <button>Technical</button>
                    </div>
                    <div className="s-flex">
                        <span>Assigned to</span>
                        <button><img src={candidate.profile} alt="Profile" width={22} height={22} /> {candidate.name}</button>
                    </div>
                    <div className="s-flex">
                        <span>Interview Date</span>
                        <span>Jul 30, 2024</span>
                    </div>
                </div>
            </section>
            {/*  ====== Filters Section */}
            <section></section>
        </div>
    )
}

export default SelectedCandidate