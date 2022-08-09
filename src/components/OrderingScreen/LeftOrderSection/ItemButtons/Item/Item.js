import styles from '../ItemButtons.module.css'

export const Item = ({ item, newItemHandler }) => {

    function returnItem() {
        newItemHandler(item)
    }

    return (
        <li><button onClick={returnItem} className={styles.item_button}>{item.ProductName}</button></li>
    )
}