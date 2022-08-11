import { TableRow } from "./TableRows/TableRow"
import styles from './TableOrder.module.css'
import { useEffect, useState } from "react"
import { getAllInventory } from "../../../../services/InventoryApi"


export const TableOrder = ({ handler }) => {
    const [order, setOrder] = useState([])
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        getFullInventory()
    }, [])

    async function getFullInventory() {
        const res = await getAllInventory()
        setAllItems(res)
    }

    function test() {
        console.log(allItems);
    }

    function addToOrder(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        let currentItem;
        const item = {
            "note": data.get("note") || "",
            "product": data.get("product"),
            "count": Number(data.get("count")),
        }

        allItems.forEach(element => {
            if (element.ProductName == item.product || element.ProductCode == Number(item.product)) {
                item.product = element.ProductName
                return currentItem = element
            }
        });

        if (currentItem) {
            item.price = currentItem.SellPrice
        }

        console.log(item);
        handler(item)
    }
    return (
        <div>
            <button onClick={test}>test</button>
            <table id="order_table" className={styles.order_table}>
                <thead>
                    <tr id="order_table_head" className={styles.order_table_head}>
                        <th>
                            <p>коментар</p>
                        </th>
                        <th>
                            <p>име артикул</p>
                        </th>
                        <th>
                            <p>поръчани</p>
                        </th>
                        <th>
                            <p>ед. сума</p>
                        </th>
                    </tr>
                </thead>

                <tbody className={styles.tableBody}>
                    {order.map(item => <TableRow item={item} />)}
                </tbody>
            </table>
            <form onSubmit={addToOrder}>
                <div className={styles.newOrderInput}>
                    <div>
                        <label htmlFor="note">Note</label>
                        <input type="text" id="note" name="note" />
                    </div>
                    <div>
                        <label htmlFor="product">Product</label>
                        <input type="text" id="product" name="product" />
                    </div>
                    <div>
                        <label htmlFor="count">Count</label>
                        <input type="number" id="count" name="count" />
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}