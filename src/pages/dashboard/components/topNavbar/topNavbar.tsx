
import React, { useState } from "react";
import styles from "./topNavbar.module.scss";
import MenuIcon from '@mui/icons-material/Menu';

interface SideNavProps {
    sideNavAside: boolean;
    setSideNavAside: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopNavbar = (props: SideNavProps) => {
    const { setSideNavAside } = props;
    const [searchValue, setSearchValue] = useState('')


    const closeSideNav = () => {
        setSideNavAside(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className={styles.topNavbar}>
            <div className="searchWrapper d-flex">
                <div className="openMenu d-none" onClick={closeSideNav}>
                    <MenuIcon sx={{ width: 40, height: 40 }} />
                </div>
                <div className="d-flex searchBox">
                    <img src="/svgs/search.svg" alt="Search Icon" />
                    <input type="text" name="search" id="search" value={searchValue} onChange={handleChange} />
                </div>
            </div>
            <div className="profile d-flex">
                <img src="/images/user.jpg" alt="User" />
                <div className="d-flex names">
                    <span>Jane Doe</span>
                    <button><img src="/svgs/arrowDown.svg" alt="Arrow down" /></button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar