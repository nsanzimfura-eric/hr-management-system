
import { useState } from "react";
import styles from "./RequireAttention.module.scss";
import Jobs from "../../pages/dashboard/components/Jobs/Jobs";

const headerFilters = ['Jobs', 'Candidates', 'Onboarding'];

const RequireAttention = () => {
    const [activeFilter, setActiveFilter] = useState<string>(headerFilters[0]);

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
        </div>
    )
}

export default RequireAttention