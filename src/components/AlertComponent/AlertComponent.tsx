
import styles from "./errorComponent.module.scss";
import { Alert, Stack } from '@mui/material';

interface ErrorInterface {
    message: string;
}
const AlertComponent = (props: ErrorInterface) => {
    const { message } = props;

    return (
        <Stack className={styles.errorComponent} spacing={2}>
            <Alert severity="error">{message}</Alert>
        </Stack>
    )
}

export default AlertComponent   