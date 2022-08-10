import { getUserData } from '../../../services/utility'
import styles from '../InventoryScreen.module.css'


export const Forms = ({ handleAction }) => {
    const currUser = getUserData()
    let access = currUser?.userAccess
    return (
        <div className={styles.form_buttons}>
            <button onClick={() => handleAction("createItem")} className={styles.button}>New Items</button>
            {access == "full" && <button onClick={() => handleAction("inventory")} className={styles.button}>Inventory</button>}

        </div>
    )
}