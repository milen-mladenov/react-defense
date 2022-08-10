import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserData } from '../../services/utility'
import styles from './Header.module.css'

import openMenu from '../utility/svg/openMenu.svg'
import closeMenu from '../utility/svg/closeMenu.svg'

export const Header = ({ logoutHandler }) => {
    const [dropdown, setDropdown] = useState(false);
    let currUser = getUserData()
    let access = currUser?.userAccess
    function dropdownState() {
        setDropdown(!dropdown)
    }

    function logout() {
        currUser = ""
        logoutHandler()
    }

    return (
        <header>
            <div>
                <h2>Текущ потребител:</h2>
                {currUser ? <h2 id="current_logged_user">{currUser.userName}</h2> : ""}

            </div>
            <div>

                <div>
                    <Link to="/"><button onClick={logout} id="user_login_button">Смяна на потребителя</button></Link>
                </div>

                {dropdown ? <div className={styles.dropdownSection}>
                    <img onClick={dropdownState} src={closeMenu} />
                    <ul className={styles.menuLinks}>
                        {access == "full" && <Link to="/inventory"> <li>Inventory</li></Link>}
                        <Link to="/ordering"> <li>Main Screen</li></Link>
                        <Link to="/emp-management"> <li>Management</li></Link>
                    </ul>
                </div> : <img onClick={dropdownState} src={openMenu} />}
            </div>
        </header>
    )
}