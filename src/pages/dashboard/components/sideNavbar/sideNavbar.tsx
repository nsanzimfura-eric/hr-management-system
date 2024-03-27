
import { useState } from "react";
import IconButton from "../iconButton/iconButton";
import { navbarLinks } from "./navbarData";
import styles from "./sideNavbar.module.scss";

const SideNavBar = () => {

    const [activeId, setActiveId] = useState(navbarLinks[0].id);

    const handleIconClick = (id: number) => {
        setActiveId(id);
    };

    return (
        <div className={styles.sideNavBar}>
            <div className="logoWrapper">
                <img src="/svgs/logo.svg" alt="Logo" />
            </div>
            <div className="bottomWrapper">
                {navbarLinks?.map((icon) => {
                    return (
                        <IconButton
                            key={icon.id}
                            icon={icon}
                            onClick={handleIconClick}
                            isActive={icon.id === activeId}
                        />)
                })}
            </div>
        </div>
    )
}

export default SideNavBar