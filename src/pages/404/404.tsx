import { Container } from "react-bootstrap";
import styles from "./404.module.scss";
import { Link } from "react-router-dom"
import { apiRoutes } from "../../utils/constants";

const PageNotFound = () => {

    return (
        <Container className={styles.notFound}>
            <div className="msg py-5 d-flex justify-content-center align-items-center">
                <Link to={apiRoutes.home} className="toHome">
                    <img src="./images/404.gif" alt="404" className="page404" />
                </Link>
            </div>

        </Container>)

}
export default PageNotFound;