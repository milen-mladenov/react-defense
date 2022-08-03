import styles from '../LoginNavigation.module.css'
import { Link } from "react-router-dom";
import { navigationImg } from '../../../utility/images'

export const MenuOption = ({ button }) => {
    return (
        <Link to={button.location}>
            <div className={styles.select_menu_option}>
                <p className={styles.title}>{button.title}</p>
                {navigationImg[button.img] ? <img className={styles.navIcon} src={navigationImg[button.img]} /> : <p className={styles.img}>&#9851;</p>}
            </div>
        </Link>
    )
}