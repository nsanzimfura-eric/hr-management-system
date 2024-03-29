
import { OverViewDataInterface } from "../../pages/dashboard/components/DashboardHome/overViewData";
import styles from "./OverViewSinglerComponent.module.scss";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface DataProps {
    data: OverViewDataInterface;
}

const OverViewSinglerComponent = (props: DataProps) => {
    const { data } = props;

    return (
        <div className={styles.overViewSinglerComponent}>
            <button>{data.number}</button>
            <div className="positionedBg">
                <div className="imgWrapper d-flex justify-content-end">
                    <img src={data.img} alt="BG" />
                </div>
                <span>{data.action}</span>
                <div className="visibleOnHover">
                    <KeyboardDoubleArrowRightIcon sx={{ width: 30, height: 30 }} />
                </div>
            </div>
        </div>
    )
}

export default OverViewSinglerComponent