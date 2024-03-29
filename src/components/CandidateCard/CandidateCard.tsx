
import { Typography } from "@mui/material";
import styles from "./CandidateCard.module.scss";

interface DataProps {
    data: any;
    onclick: (data: any) => void;
}

const CandidateCard = (props: DataProps) => {
    const { data, onclick } = props;

    return (
        <div className={styles.candidateCard} onClick={() => onclick(data)}>
            <button style={{ backgroundImage: `url("${data.profile}")` }}></button>
            <div className="positionedBg">
                <div className="imgWrapper d-flex justify-content-end">
                    <Typography variant="h6" color="primary">{data.name}</Typography>
                </div>
                <span>{data.email}</span>
            </div>
        </div>
    )
}

export default CandidateCard