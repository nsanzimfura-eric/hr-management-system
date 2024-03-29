
import { useState } from "react";
import styles from "./RequireAttention.module.scss";
import Jobs from "../../pages/dashboard/components/Jobs/Jobs";
import { demoCandidatesData } from "../../pages/dashboard/components/Candidates/demoCandidatesData";
import CandidateCard from "../CandidateCard/CandidateCard";
import { setClickedCandidate } from "../../pages/dashboard/components/Candidates/candidatesSlice";
import { useDispatch } from "react-redux";
import { SideNavBarLink, navbarLinks } from "../sideNavbar/navbarData";
import { dashboardRoutes } from "../../utils/constants";
import { setActiveLink } from "../sideNavbar/sideNavBarSlices";

const headerFilters = ['Jobs', 'Candidates', 'Onboarding'];

const RequireAttention = () => {
    const [activeFilter, setActiveFilter] = useState<string>(headerFilters[0]);
    const dispatch = useDispatch()

    const handleClickedCandidate = (candidate: any) => {
        dispatch(setClickedCandidate(candidate));
        //navigate to dashboard and make candidates active
        const activeSideNavLink = navbarLinks.filter((navData: SideNavBarLink) => navData.title === dashboardRoutes.candidates);
        dispatch(setActiveLink(activeSideNavLink[0]));
    }

    return (
        <div className={styles.requireAttention}>
            {/* Header filters */}
            <div className="headerFilters bg-none">
                {headerFilters.map((item) => (
                    <button key={item} onClick={() => setActiveFilter(item)}>
                        <span className={activeFilter === item ? "active" : ""} >{item}</span>
                        <div className={activeFilter === item ? "activeLine" : ""}></div>
                    </button>
                ))}
            </div>
            {/* filtered component */}
            {activeFilter === "Jobs" && <Jobs />}
            {activeFilter === "Candidates" && <div>
                <div className="candidatesWrapper">
                    {demoCandidatesData.map((singleCandidate, index) => {
                        return <CandidateCard key={index} data={singleCandidate} onclick={handleClickedCandidate} />
                    })}
                </div>
            </div>}
            {activeFilter === "Onboarding" && <span>Onboarding</span>}
        </div>
    )
}

export default RequireAttention