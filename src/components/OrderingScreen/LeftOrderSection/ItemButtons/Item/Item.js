import styles from '../ItemButtons.module.css'

export const Item = ({items}) => {
    return (
        <li><button className={styles.item_button}>{items.name}</button></li>
    )
}