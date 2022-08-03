import styles from '../LoginNavigation.module.css'
import { Link } from "react-router-dom";

export const Option = ({ button }) => {
    return (
        <Link to={button.location}>
            <div className={styles.select_menu_option}>
                <p className={styles.title}>{button.title}</p>
                <p className={styles.img}>&#9851;</p>
            </div>
        </Link>
    )
}