
import styles from "./errorComponent.scss";
import { Alert, Stack } from '@mui/material';

interface ErrorInterface {
    message: string;
}
const ErrorComponent = (props: ErrorInterface) => {
    const { message } = props;

    return (
        <Stack className={styles.errorComponent} spacing={2}>
            <Alert severity="error">{message}</Alert>
        </Stack>
    )
}

export default ErrorComponent   