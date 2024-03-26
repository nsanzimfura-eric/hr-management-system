
import { Typography } from "@mui/material";
import styles from "./footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <a href="https://nsanzimfura.web.app/" target="_blank">
            <Typography variant="body2" className="text-primary">Release Notes</Typography>
            </a>
            <Typography variant="body2" className="text-primary">Release Notes</Typography>
            <Typography variant="body2" className="text-primary">Copyright © {year} HRM and services</Typography>
        </div>
    )
}

export default Footer