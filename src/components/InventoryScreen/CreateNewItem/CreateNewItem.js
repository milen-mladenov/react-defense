import { ItemCreation } from "../ItemCreation/ItemCreation"
import styles from '../InventoryScreen.module.css'
import barItems from '../../utility/barItems.json'

export const CreateNewItem = () => {

    return (
        <form id="new_items" className={styles.new_items}>
                {barItems.map(item => <ItemCreation key={item.id} item={item} />)}
                <input type="submit" value="submit_item" id="submit_new_items" className={styles.submit_btn} />
            </form>
    )
}