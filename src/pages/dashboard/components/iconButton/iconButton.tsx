
import styles from "./iconButton.module.scss";

const IconButton = (props: any) => {
    const { icon, onClick, isActive } = props;

    return (
        <div className={styles.iconButton} onClick={() => onClick(icon.id)}>
            {isActive ? (
                <>
                    <img src={icon.iconActive} alt="Icon" className="activeImg" />
                    <div className="activeLineIcon"></div>
                </>
            ) : (
                <img src={icon.icon} alt="Icon" />
            )}
            <span className={`title ${isActive ? 'titleActive' : ''}`}>{icon.title}</span>
        </div>
    )
}

export default IconButton