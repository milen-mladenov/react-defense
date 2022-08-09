import { Item } from './Item/Item'
import styles from './ItemButtons.module.css'

export const ItemButtons = ({ items,newItemHandler }) => {


    return (
        <div id="order_section_item_list" className={styles.order_section_item_list}>
            <ul>
                {items.map(item => <Item item={item} newItemHandler={newItemHandler} />)}

            </ul>
        </div>
    )
}