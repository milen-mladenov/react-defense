import styles from './LoginNavigation.module.css'
import { MenuOption } from './MenuOption/MenuOption'
import { links } from '../../utility/links';

export const LoginNavigation = ({ access }) => {
    let currUserAccess = access;


    return (
        <section id="select_menu" className={styles.select_menu} data-login-state="logged_out">
            <MenuOption button={links.inventory} />
            <MenuOption button={links.mainScreen} />
            <MenuOption button={links.accountsManage} />
        </section>
    )
}