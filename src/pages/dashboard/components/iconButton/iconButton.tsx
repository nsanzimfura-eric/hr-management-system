
import styles from "./iconButton.module.scss";

const IconButton = (props: any) => {
    const { icon, onClick, isActive } = props;

    return (
        <div className={styles.iconButton} onClick={() => onClick(icon.id)}>
            <img src={icon.icon} alt="Icon" className={!isActive ? "isActiveBtn" : ""} />
            {isActive && <div className="activeLineIcon" />}
            {isActive && <div className="activeBg"></div>}
            <span className={`title ${isActive ? 'titleActive' : ''}`}>{icon.title}</span>
        </div>
    )
}

export default IconButton