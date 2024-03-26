
import styles from "./Home.module.scss";
import Button from '@mui/material/Button';

const Home = () => {

    return (
        <div className={styles.home} id="home">
          home section
          <Button variant="contained">Hello World</Button>
        </div>
    )
}

export default Home