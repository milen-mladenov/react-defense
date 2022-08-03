import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { links } from '../utility/links'
export const Header = ({ user }) => {
   const locations = {
        inventory: links.inventory.title,
        mainScreen: links.mainScreen.title,
        reservations: links.reservations.title
    }

    function test() {
        console.log(typeof locations.inventory);
    }
    return (
        <header>
            <div>
                <h2>Текущ потребител:</h2>
                <h2 id="current_logged_user">{user.userName}</h2>
            </div>
            <div>
                <button onClick={test}>test</button>
                <div>
                    <Link to="/"><button id="user_login_button">Смяна на потребителя</button></Link>
                </div>
                <div id="header_menu_dropdown">
                    <select name="" id="menu">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                    </select>
                </div>
            </div>
        </header>
    )
}