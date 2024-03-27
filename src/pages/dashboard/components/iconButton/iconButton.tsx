
import { useState } from "react";
import styles from "./iconButton.module.scss";

const IconButton = (props: any) => {
    const { icon } = props
    const [clickedId, setClickedId] = useState(1)


    const handleActiveIconButton = () => {
        setClickedId(icon.id)
    }

    return (
        <div className={styles.iconButton} onClick={handleActiveIconButton}>
            {icon.id === clickedId && <img src={icon.iconActive} alt="Icon" />}
            {icon.id !== clickedId && <img src={icon.icon} alt="Icon" />}
            <span className={`title ${icon.id === clickedId && 'titleActive'}`}>{icon.title}</span>
        </div>
    )
}

export default IconButton