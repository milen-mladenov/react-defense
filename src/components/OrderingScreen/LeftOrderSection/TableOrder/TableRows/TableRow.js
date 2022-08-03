import styles from '../TableOrder.module.css'
import { useState } from "react"

export const TableRow = ({ items }) => {
    let currentOrder = items.currentOrder
    const [order, setOrder] = useState(currentOrder);
    const [currItem, setCurrItem] = useState("")

    function increment() {
        console.log("clicked");
        setOrder(order + 1)
    }

    function decrement() {
        console.log("clicked");
        if (order > 0) {
            setOrder(order - 1)
        }
    }

    function handleInputOrder(e) {
        let item = e.target.value;
        setCurrItem(item)
    }
    function handleInput(e) {
        let value = Number(e.target.value)
        setOrder(value)
    }
    return (
        <tr>
            <td>
                <p>{items.note}</p>
            </td>
            <td><input className={styles.ordered_item} type="text" placeholder="Име / Номер" onChange={handleInputOrder} value={currItem} /></td>
            <td>
                <p>{items.count}</p>
            </td>
            <td>
                <div className={styles.order_number}><button onClick={decrement}>-</button><input type="number"
                    max="999" onChange={handleInput} value={order} /><button onClick={increment}>+</button></div>
            </td>
            <td>
                <p>{items.price}</p>
            </td>
        </tr>
    )
}