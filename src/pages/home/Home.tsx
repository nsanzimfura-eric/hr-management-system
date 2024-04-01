
import { useEffect } from "react";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";
import { Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  //redirect user to dashboard if logged in or to the Login IF NOT logged in

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(frontendRoutes.login)
    } else {
      navigate(frontendRoutes.dashboard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.home} id="home">
      <Link to={frontendRoutes.dashboard}><Typography variant="body1">Go To DashBoard</Typography></Link>
    </div>
  )
}

export default Home