import { ItemCreation } from "../ItemCreation/ItemCreation"
import styles from '../InventoryScreen.module.css'
import { useEffect, useState } from "react"
import { TableRow } from "./TableRow"
let newRow = { ProductID: "", ProductName: "", ProductCode: "", SellPrice: "", RetailPrice: "", SystemQuant: "", Alcohol: false }
const order = []
export const CreateNewItem = () => {
    const [currentInputOrder, setCurrentInputOrder] = useState([])
    const [newItem, setNewItem] = useState({})

    function addNewItem(e) {
        e.preventDefault()
        setCurrentInputOrder(state => ([...state, newItem]))
        console.log(newItem);
        setNewItem({})
    }

    function handleNewItemInput(item) {
        setNewItem(item)

    }

    return (
        <div>
            <form onSubmit={addNewItem} className={styles.new_items}>
                <ItemCreation key={currentInputOrder.length} handler={handleNewItemInput} item={newRow} />
                <input type="submit" value="Add" className={styles.submit_btn} />
            </form>
            <table className={styles.orderedItems}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product Name</td>
                        <td>Product Code</td>
                        <td>Retail Price</td>
                        <td>Sell Price</td>
                        <td>Quantity</td>
                        <td>Alcohol</td>
                    </tr>
                </thead>
                <tbody>
                    {currentInputOrder.map(item => <TableRow key={item.ProductID} item={item} />)}
                </tbody>
            </table>

        </div>

    )
}