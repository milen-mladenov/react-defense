
import styles from '../InventoryScreen.module.css'
import { useState } from "react"
import { TableRow } from "./TableRow"
import { createNewItems } from '../../../services/InventoryApi'

export const CreateNewItem = () => {
    const [currentInputOrder, setCurrentInputOrder] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        let data = new FormData(e.target)

        const item = {
            "Department": data.get("Department"),
            "ProductID": Number(data.get("ProductID")),
            "ProductName": data.get("ProductName"),
            "ProductCode": Number(data.get("ProductCode")),
            "RetailPrice": Number(data.get("RetailPrice")),
            "SellPrice": Number(data.get("SellPrice")),
            "SystemQuantity": Number(data.get("SystemQuantity"))
        }
        setCurrentInputOrder(state => ([...state, item]))
    }

    function create() {

        currentInputOrder.forEach(element => {
            createNewItems(element)
        });

        setCurrentInputOrder([])
    }
    return (
        <div>

            <form onSubmit={onSubmit} className={styles.new_items}>

                <div className={styles.item}>
                    <label htmlFor="Department">
                        <p>Department</p>
                        <select name="Department">
                            <option value="Kitchen">Kitchen</option>
                            <option value="Bar">Bar</option>
                        </select>
                    </label>
                    <label htmlFor="ProductCode">
                        <p>Product code</p>
                        <input type="text" name="ProductCode" placeholder="ProductCode" />
                    </label>
                    <label htmlFor="ProductName">
                        <p>Product</p>
                        <input type="text" name="ProductName" placeholder="ProductName" />
                    </label>
                    <label htmlFor="ProductID">
                        <p>Product ID</p>
                        <input type="text" name="ProductID" placeholder="ProductID" />
                    </label>
                    <label htmlFor="RetailPrice">
                        <p>Retail price</p>
                        <input type="text" name="RetailPrice" placeholder="RetailPrice" />
                    </label>
                    <label htmlFor="SellPrice">
                        <p>Sell price</p>
                        <input type="text" name="SellPrice" placeholder="SellPrice" />
                    </label>
                    <label htmlFor="SystemQuantity">
                        <p>System quant</p>
                        <input type="text" name="SystemQuantity" placeholder="SystemQuantity" />
                    </label>
                </div>
                <input type="submit" value="Add" className={styles.submit_btn} />
            </form>
            <h2>Currently creating:</h2>
            <button onClick={create}>Create Items</button>
            <table className={styles.orderedItems}>
                <thead>
                    <tr>
                        <td>Department</td>
                        <td>ID</td>
                        <td>Product Name</td>
                        <td>Product Code</td>
                        <td>Retail Price</td>
                        <td>Sell Price</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {currentInputOrder.map(item => <TableRow key={item.ProductID} item={item} />)}
                </tbody>
            </table>

        </div>

    )
}