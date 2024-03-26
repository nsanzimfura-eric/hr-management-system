
import { useEffect } from "react";
import styles from "./Guards.module.scss";
import { useNavigate } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";

const Guards = (props: any) => {
    const { children } = props;

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate(frontendRoutes.login)
        }
    }, [])

    return (
        <div className={styles.guards} {...props}>
            {children}
        </div>
    )
}

export default Guards