import styles from '../InventoryScreen.module.css'


export const Forms = ({handleAction}) => {
    return (
        <div className={styles.form_buttons}>
            <button onClick={() => handleAction("createItem")} className={styles.button}>New Items</button>
            <button onClick={() => handleAction("inventory")} className={styles.button}>Inventory</button>
            {/* <button onClick={() => handleAction("createRecipe")} className={styles.button}>Create new recipe</button> */}
        </div>
    )
}