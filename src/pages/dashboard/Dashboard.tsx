
import Guards from "../../components/Guards/Guards";
import SideNavBar from "./components/sideNavbar/sideNavbar";
import styles from "./dashboard.module.scss";

const Dashboard = () => {

  return (
    <Guards>
      <div className={styles.dashboard}>
        <SideNavBar />
      </div>
    </Guards>
  )
}

export default Dashboard