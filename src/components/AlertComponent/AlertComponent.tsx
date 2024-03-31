
import styles from "./errorComponent.module.scss";
import { Alert, Stack } from '@mui/material';

interface ErrorInterface {
    message: string;
    alertType?: any;
}
const AlertComponent = (props: ErrorInterface) => {
    const { message, alertType = 'error' } = props;

    return (
        <Stack className={styles.errorComponent} spacing={2}>
            <Alert severity={alertType}>{message}</Alert>
        </Stack>
    )
}

export default AlertComponent   