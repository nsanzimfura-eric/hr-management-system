
import React, { useState } from "react";
import styles from "./topNavbar.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { frontendRoutes } from "../../../../api/frontendRoutes";
import { useNavigate } from "react-router-dom";

interface SideNavProps {
    sideNavAside: boolean;
    setSideNavAside: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopNavbar = (props: SideNavProps) => {
    const { setSideNavAside } = props;
    const [searchValue, setSearchValue] = useState('');
    const [showLogOut, setShowLogout] = useState(true);
    const navigate = useNavigate();


    const closeSideNav = () => {
        setSideNavAside(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleLogout = () => {
        navigate(frontendRoutes.login);
        setShowLogout(prev => !prev);
    }
    return (
        <div className={styles.topNavbar}>
            <div className="searchWrapper d-flex">
                <div className="openMenu d-none" onClick={closeSideNav}>
                    <MenuIcon sx={{ width: 40, height: 40 }} />
                </div>
                <div className="d-flex searchBox">
                    <img src="/svgs/search.svg" alt="Search Icon" />
                    <input type="text" name="search" placeholder="Search" id="search" value={searchValue} onChange={handleChange} />
                </div>
            </div>
            <div className="profile d-flex">
                <img src="/images/user.jpg" alt="User" />
                <div className="d-flex names">
                    <span>Jane Doe</span>
                    <button onClick={() => setShowLogout(prev => !prev)}><img src="/svgs/arrowDown.svg" alt="Arrow down" /></button>
                </div>
            </div>
            <div className={showLogOut ? "logoutWrapper logoutWrapperActive" : "logoutWrapper"}>
                <button onClick={handleLogout}>
                    <LogoutIcon sx={{ width: 30, height: 30 }} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default TopNavbar