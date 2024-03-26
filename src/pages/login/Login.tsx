
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import styles from "./login.module.scss";
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";
import { useLocation } from 'react-router-dom';
import FormAuth from "../../components/formAuth/formAuth";

const Login = () => {
  const location = useLocation();

  return (
    <div className={styles.login} >
      <Container className="loginWrapper">
        <div className="boxWrapper d-flex flex-column">
          {/* login title  */}
          <div className="d-flex titleBox">
            <img src="/svgs/logo.svg" alt="Logo" width={17} height={30} />
            <Typography variant="h2" className="title">HR Management</Typography>
          </div>
          {/* wrapper login */}
          <div className="row registrationWrapper">
            <div className="col-12 col-md-6 imageRight">
              <img src="/svgs/loginRight.svg" alt="Account BG" />
            </div>
            <div className="col-12 col-md-6 accountsWrapper">
              <div className="lineLeft"></div>
              <div className="contentForm d-flex flex-column w-100 p-0 m-0">
                <div className="options d-flex m-0 p-0">
                  <Link to={frontendRoutes.login} className={`optionLink ${location.pathname === frontendRoutes.login && ' activeLink'}`}>
                    <Typography variant={location.pathname === frontendRoutes.login ? 'h1' : 'h2'} className="textAction">Login</Typography>
                    <div className="activeLine"></div>
                  </Link>
                  <Link to={frontendRoutes.signup} className={`optionLink ${location.pathname === frontendRoutes.signup && ' activeLink'}`}>
                    <div className="activeLine"></div>
                    <div className="lineBorder"></div>
                    <Typography variant={location.pathname === frontendRoutes.signup ? 'h1' : 'h2'} className="textAction">Sign Up</Typography>
                  </Link>
                </div>
                {/*  form */}
                <FormAuth />
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  )
}

export default Login