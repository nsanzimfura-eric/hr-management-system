
import styles from "./errorComponent.module.scss";
import { Typography } from '@mui/material';

interface ErrorInterface {
    message: string;
}
const ErrorComponent = (props: ErrorInterface) => {
    const { message } = props;

    return (
        <Typography variant="body2" className={styles.error}>{message}</Typography>
    )
}

export default ErrorComponent   