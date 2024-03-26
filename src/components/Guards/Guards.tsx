
import React, { useEffect } from "react";
import styles from "./Guards.module.scss";
import { useNavigate } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";

export interface GuardsProps {
    children: React.ReactNode;
}
const Guards = ({ children }: GuardsProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate(frontendRoutes.login)
        }
    }, [])

    return (
        <div className={styles.guards}>
            {children}
        </div>
    )
}

export default Guards