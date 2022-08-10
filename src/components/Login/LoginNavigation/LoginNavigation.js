import styles from './LoginNavigation.module.css'
import { MenuOption } from './MenuOption/MenuOption'
import { links } from '../../utility/links';
import { getUserData } from '../../../services/utility';

export const LoginNavigation = () => {
    const currUser = getUserData()
    let access = currUser?.userAccess

    return (
        <section id="select_menu" className={styles.select_menu} data-login-state="logged_out">
            <MenuOption button={links.inventory} />
            <MenuOption button={links.mainScreen} />
            {access == "full" && <MenuOption button={links.accountsManage} />}
        </section>
    )
}