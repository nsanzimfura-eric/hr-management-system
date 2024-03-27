
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
        <div className={`${sideNavAside ? "contentWrapper p-0 m-0" : "contentWrapper widthFullContentWrapper p-0 m-0"}`}>

        </div>
      </div>
    </Guards>
  )
}

export default Dashboard