
import { useState } from "react";
import Guards from "../../components/Guards/Guards";
import SideNavBar from "./components/sideNavbar/sideNavbar";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
  const [sideNavAside, setSideNavAside] = useState(true);


  return (
    <Guards>
      <div className={styles.dashboard}>
        <SideNavBar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
      </div>
    </Guards>
  )
}

export default Dashboard