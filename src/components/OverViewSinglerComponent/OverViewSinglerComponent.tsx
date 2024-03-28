
import { OverViewDataInterface } from "../../pages/dashboard/components/DashboardHome/overViewData";
import styles from "./OverViewSinglerComponent.module.scss";

interface DataProps {
    data: OverViewDataInterface;
}

const OverViewSinglerComponent = (props: DataProps) => {
    const { data } = props;

    return (
        <div className={styles.overViewSinglerComponent}>
            <button>{data.number}</button>
            <div className="w-100 d-flex justify-content-end">
                <img src={data.img} alt="BG" />
            </div>
            <span>{data.action}</span>
        </div>
    )
}

export default OverViewSinglerComponent