
import Guards from "../../components/Guards/Guards";
import styles from "./dashboard.module.scss";

const Dashboard = () => {

  return (
    <Guards>
      <div className={styles.dashboard}>
        Dashboard
      </div>
    </Guards>
  )
}

export default Dashboard