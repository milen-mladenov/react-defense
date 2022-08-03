import styles from './LoginNavigation.module.css'
import { Option } from './MenuOption/MenuOption'
import { links } from '../../utility/links';

export const LoginNavigation = ({ access }) => {
    let currUserAccess = access;


    return (
        <section id="select_menu" className={styles.select_menu} data-login-state="logged_out">
            <Option button={links.inventory} />
            <Option button={links.mainScreen} />
            <Option button={links.accountsManage} />
        </section>
    )
}