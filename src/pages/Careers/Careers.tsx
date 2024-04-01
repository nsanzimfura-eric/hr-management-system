
import { Container } from "react-bootstrap";
import GlobalNavBar from "../../components/globalNavBar/globalNavBar";
import Jobs from "../dashboard/components/Jobs/Jobs";
import styles from "./Careers.module.scss";

const Careers = () => {


  return (
    <div className={styles.jobsPage} id="jobsPage">
      <GlobalNavBar />
      <Container>

        <Jobs showHeader={false} />
      </Container>
    </div>
  )
}

export default Careers