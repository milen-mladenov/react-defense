import styles from './LeftOrderSection.module.css'
import { useEffect, useState } from 'react';

import { ItemButtons } from './ItemButtons/ItemButtons';
import { ItemKeypad } from './ItemKeypad/ItemKeypad';
import { TableInformation } from './TableInformation/TableInformation';
import { TableOrder } from './TableOrder/TableOrder';
import { getAllInventory, getAllBarItems, getAllKitchenItems } from '../../../services/InventoryApi'


export const LeftOrderSection = ({ table, filter }) => {
    const [keypad, setKeypad] = useState(false)
    // const [tableInfo, setTableInfo] = useState(table[2])
    // const [tableOrder, setTableOrder] = useState(table[1])
    const [hasNewOrder, setHasNewOrder] = useState(false)
    const [orderItems, setOrderItems] = useState([])
    const [getItems, setGetItems] = useState([]);
    
    useEffect(() => {
        if (filter == "All") {
            getFullInventory()
        } else if (filter == "Kitchen") {
            getFullKitchenInventory()
        } else if (filter == "Bar") {
            getFullBarInventory()
        }

    }, [filter])

    async function getFullInventory() {
        const res = await getAllInventory()
        setGetItems(res)
    }
    async function getFullKitchenInventory() {
        const kitchenRes = await getAllKitchenItems()
        setGetItems(kitchenRes)
    }
    async function getFullBarInventory() {
        const barRes = await getAllBarItems()
        setGetItems(barRes)
    }
    // let tableNumber = 0
    const tableNumber = table[0] || "";
    const amount = table[2]?.amount || 0
    function newItemHandler(item) {

        setOrderItems(order => ([...order, item]))
        
    }

    useEffect(() => {
        if (orderItems !== "") {
            setHasNewOrder(true)
        } else {
            setHasNewOrder(false)
        }
    }, [orderItems])

    return (
        <section id="orders_section" className={styles.orders_section}>
            <div id="order_section_action_type" className={styles.order_section_action_type}>
                <h2 id="order_section_action">Въведи поръчка за маса:</h2>
                <h2 className="current_table_number">{tableNumber}</h2>
            </div>
            <div className={styles.order_section_buttons}>
                <button onClick={() => setKeypad(false)} className={styles.order_section_button}
                >Items</button>
                <button onClick={() => setKeypad(true)} className={styles.order_section_button}
                >Keypad</button>
            </div>
            <div className={styles.ordering_section}>
                {!keypad && <ItemButtons newItemHandler={newItemHandler} items={getItems} />}
                {keypad && <ItemKeypad newItemHandler={newItemHandler} />}
            </div>
            <TableInformation tableNumber={tableNumber} amount={amount} />
            <div className={styles.orderdered_items}>
                <TableOrder handler={newItemHandler} />
                {orderItems.map(item=><li>{item.product} {item.count} {item.price}</li>)}
            </div>
            <button className={styles.send_order_button} disabled={hasNewOrder}>Поръчай</button>
        </section>
    )
}