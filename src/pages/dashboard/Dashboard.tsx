
import { useState } from "react";
import Guards from "../../components/Guards/Guards";
import SideNavBar from "../../components/sideNavbar/sideNavbar";
import styles from "./dashboard.module.scss";
import TopNavbar from "../../components/topNavbar/topNavbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { dashboardRoutes } from "../../utils/constants";
import DashboardHome from "./components/DashboardHome/DashboardHome";
import Jobs from "./components/Jobs/Jobs";
import Calender from "./components/Calender/Calender";
import Reports from "./components/Reports/Reports";
import Candidates from "./components/Candidates/Candidates";

const Dashboard = () => {
  const [sideNavAside, setSideNavAside] = useState(true);
  const { activeLink } = useSelector((state: RootState) => state.sideNavBarReducers);

  return (
    <Guards>
      <div className={styles.dashboard}>
        <SideNavBar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
        <div className={`${sideNavAside ? "contentWrapper p-0 m-0" : "contentWrapper widthFullContentWrapper w-full p-0 m-0"}`}>
          <TopNavbar sideNavAside={sideNavAside} setSideNavAside={setSideNavAside} />
          <div className="contentScrollable">
            {/* Render active Side nav link  */}
            {activeLink.title === dashboardRoutes.home && <DashboardHome />}
            {activeLink.title === dashboardRoutes.jobs && <Jobs />}
            {activeLink.title === dashboardRoutes.candidates && <Candidates />}
            {activeLink.title === dashboardRoutes.reports && <Reports />}
            {activeLink.title === dashboardRoutes.calender && <Calender />}
          </div>
        </div>
      </div>
    </Guards>
  )
}

export default Dashboard