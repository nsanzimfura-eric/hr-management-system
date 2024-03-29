
import { Typography } from "@mui/material";
import styles from "./CandidateCard.module.scss";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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
                <Typography variant="h6" className="names" color="primary">{data.name}</Typography>
                <span>{data.email}</span>
                <div className="visibleOnHover">
                    <KeyboardDoubleArrowRightIcon sx={{ width: 30, height: 30 }} />
                </div>
            </div>
        </div>
    )
}

export default CandidateCard