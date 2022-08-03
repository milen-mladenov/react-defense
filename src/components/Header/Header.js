import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import openMenu from '../utility/svg/openMenu.svg'
import closeMenu from '../utility/svg/closeMenu.svg'
import { useState } from 'react'

export const Header = ({ user }) => {
    const [dropdown, setDropdown] = useState(false);

    function dropdownState() {
        console.log("clicked");
        setDropdown(!dropdown)
    }
    return (
        <header>
            <div>
                <h2>Текущ потребител:</h2>
                <h2 id="current_logged_user">{user.userName}</h2>
            </div>
            <div>

                <div>
                    <Link to="/"><button id="user_login_button">Смяна на потребителя</button></Link>
                </div>

                {dropdown ? <div className={styles.dropdownSection}>
                    <img onClick={dropdownState} src={closeMenu} />
                    <ul className={styles.menuLinks}>
                        <Link to="/inventory"> <li>Inventory</li></Link>
                        <Link to="/ordering"> <li>Main Screen</li></Link>
                        <Link to="/emp-management"> <li>Management</li></Link>
                    </ul>
                </div> : <img onClick={dropdownState} src={openMenu} />}
            </div>
        </header>
    )
}