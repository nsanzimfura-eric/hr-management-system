
import Footer from "../Footer/Footer";
import styles from "./login.module.scss";
import { Typography } from '@mui/material';

const Login = () => {

  return (
    <div className={styles.login}>
      <div className="boxWrapper">
        {/* login title  */}
        <div className="d-flex">
          <img src="/svgs/logo.svg" alt="Logo" />
          <Typography variant="h2">HR Management</Typography>
        </div>
        {/* wrapper login */}
        <div className="row">
          <div className="col-12 col-md-6 imageRight">
            <img src="/svgs/loginRight.svg" alt="Account BG" />
          </div>
          <div className="col-12 col-md-6">

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login