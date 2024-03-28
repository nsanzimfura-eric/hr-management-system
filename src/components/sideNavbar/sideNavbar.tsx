
import React, { useState } from "react";
import IconButton from "../iconButton/iconButton";
import { SideNavBarLink, navbarLinks } from "./navbarData";
import styles from "./sideNavbar.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import useWindowSize from "../../hooks/useWindowSize";
import { mediaSizes } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setActiveLink } from "./sideNavBarSlices";

interface SideNavProps {
    sideNavAside: boolean;
    setSideNavAside: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNavBar = (props: SideNavProps) => {
    const { sideNavAside, setSideNavAside } = props;

    const [activeId, setActiveId] = useState(navbarLinks[0].id);
    const { width } = useWindowSize();
    const dispatch = useDispatch();

    const handleIconClick = (id: number) => {
        setActiveId(id);
        //Update active Link
        const activeSideNavLink = navbarLinks.filter((navData: SideNavBarLink) => navData.id === id);
        dispatch(setActiveLink(activeSideNavLink[0]));
    };

    const closeSideNav = () => {
        setSideNavAside(true)
    }

    return (
        <div className={sideNavAside && width <= mediaSizes.xls ? styles.sideNavAside : styles.sideNavBar}>
            <div className="logoWrapper">
                <div className="closeBtn d-none" onClick={closeSideNav}>
                    <CloseIcon sx={{ width: 30, height: 30 }} />
                </div>
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