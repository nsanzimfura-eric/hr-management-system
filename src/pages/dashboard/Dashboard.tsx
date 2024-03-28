
import { useState } from "react";
import Guards from "../../components/Guards/Guards";
import SideNavBar from "./components/sideNavbar/sideNavbar";
import styles from "./dashboard.module.scss";
import TopNavbar from "./components/topNavbar/topNavbar";
import { navbarLinks } from "./components/sideNavbar/navbarData";

const Dashboard = () => {
  const [sideNavAside, setSideNavAside] = useState(true);


  return (
    <Guards>
      <div className={styles.dashboard}>
        <SideNavBar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
        <div className={`${sideNavAside ? "contentWrapper p-0 m-0" : "contentWrapper widthFullContentWrapper w-full p-0 m-0"}`}>
          <TopNavbar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
          <div className="contentScrollable">
            {navbarLinks.map(item => {
              return (
                <div key={item.id} className="bg-warning">
                  <img src={item.icon} alt="test" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Guards>
  )
}

export default Dashboard