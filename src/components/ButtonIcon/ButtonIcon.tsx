
import styles from "./ButtonIcon.module.scss";

interface IconButtonInterface {
    onClick: () => void;
    url: string;
    style?: any;
}
const ButtonIcon = (props: IconButtonInterface) => {
    const { url, onClick, style } = props;


    return (
        <button className={styles.buttonIcon} onClick={onClick}>
            <img src={url} alt="Icon" style={style ? style : {}} />
        </button>
    )
}

export default ButtonIcon