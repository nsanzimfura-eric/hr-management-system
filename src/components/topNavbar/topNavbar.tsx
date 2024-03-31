
import React, { useEffect, useState } from "react";
import styles from "./topNavbar.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { frontendRoutes } from "../../api/frontendRoutes";
import { useNavigate } from "react-router-dom";
import { mediaSizes } from "../../utils/constants";
import useWindowSize from "../../hooks/useWindowSize";

interface SideNavProps {
    sideNavAside: boolean;
    setSideNavAside: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopNavbar = (props: SideNavProps) => {
    const user = JSON.parse(localStorage.getItem('userProfile')!);
    const { setSideNavAside, sideNavAside } = props;
    const [searchValue, setSearchValue] = useState('');
    const [userProfile, setUserProfile] = useState<any>({ ...user });
    const [showLogOut, setShowLogout] = useState(false);
    const navigate = useNavigate();
    const { width } = useWindowSize();

    const closeSideNav = () => {
        setSideNavAside(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userProfile');
        navigate(frontendRoutes.login);
        setShowLogout(prev => !prev);
    }

    //setUserProfile names
    useEffect(() => {
        setUserProfile(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.topNavbar}>
            <div className="searchWrapper d-flex">
                {sideNavAside &&
                    <div className="openMenu d-none" onClick={closeSideNav}>
                        <MenuIcon sx={{
                            width: width <= mediaSizes.sm ? 30 : 40,
                            height: width <= mediaSizes.sm ? 30 : 40
                        }} />
                    </div>
                }
                <div className="d-flex searchBox">
                    <img src="/svgs/search.svg" alt="Search Icon" />
                    <input type="text" name="search" placeholder="Search" id="search" value={searchValue} onChange={handleChange} />
                </div>
            </div>
            <div className="profile d-flex">
                <img src="/images/user.jpg" alt="User" />
                <div className="d-flex names">
                    <span>{userProfile?.firstName || 'John'} {userProfile?.lastName || 'Doe'} </span>
                    <button onClick={() => setShowLogout(prev => !prev)}><img src="/svgs/arrowDown.svg" alt="Arrow down" /></button>
                </div>
            </div>
            <div className={showLogOut ? "logoutWrapper logoutWrapperActive" : "logoutWrapper"}>
                <button onClick={handleLogout}>
                    <LogoutIcon sx={{
                        width: width <= mediaSizes.sm ? 20 : 30,
                        height: width <= mediaSizes.sm ? 20 : 30
                    }} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default TopNavbar