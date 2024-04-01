import ReactQuill from 'react-quill';
import styles from './QuilMaker.module.scss';

interface QuilMakerProps {
    value: string;
    placeholder: string;
    onChange: any;
    id?: string;
}

const QuilMaker = (props: QuilMakerProps) => {
    const { value, placeholder, onChange, id = "description" } = props;
    return (
        <ReactQuill
            {...props}
            id={id}
            theme="snow"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={styles.quilMaker}
        />
    );
};

export default QuilMaker;