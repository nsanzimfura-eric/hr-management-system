import ReactQuill from 'react-quill';
import styles from './QuilMaker.module.scss';

interface QuilMakerProps {
    value: string;
    error: string;
    touched: boolean;
    placeholder: string;
    handleChange: () => void;
}

const QuilMaker = (props: QuilMakerProps) => {
    const { value, error, touched, placeholder, handleChange } = props;
    return (
        <div className={styles.quilMaker} >
            <ReactQuill
                id="description"
                theme="snow"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                className="quilMakerInput "
            />
            {touched && error && <small className="errors">{error}</small>}
        </div>
    );
};

export default QuilMaker;