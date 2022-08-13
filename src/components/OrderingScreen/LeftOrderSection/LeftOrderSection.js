import { useEffect, useState } from 'react';
import styles from './LeftOrderSection.module.css'

import { getAllInventory, getAllBarItems, getAllKitchenItems } from '../../../services/InventoryApi'
import { ItemButtons } from './ItemButtons/ItemButtons';
import { ItemKeypad } from './ItemKeypad/ItemKeypad';
import { TableInformation } from './TableInformation/TableInformation';
import { TableOrder } from './TableOrder/TableOrder';


export const LeftOrderSection = ({ table, filter, handleNewOrder }) => {
    const [keypad, setKeypad] = useState(false)
    const [currTableOrder, setCurrTableOrder] = useState([])
    const [hasNewOrder, setHasNewOrder] = useState(false)
    const [orderItems, setOrderItems] = useState([])
    const [getItems, setGetItems] = useState([]);
    const [allItems, setAllItems] = useState([])
    const [buttonInputStart, setButtonInputStart] = useState(false)
    const [buttonInputValue, setButtonInputValue] = useState(null)
    const [numberInput, setNumberInput] = useState("")

    useEffect(() => {
        let ta = [table[1]];
        setCurrTableOrder(ta)

        getAllItems()
    }, [table])

    async function getAllItems() {
        const res = await getAllInventory()
        setAllItems(res)
    }

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

    const tableNumber = table[0] || "";


    function newItemHandler(item) {
        setOrderItems(order => ([...order, item]))
    }

    function postNewOrder() {

        handleNewOrder(orderItems);
        setCurrTableOrder(order => ([...order, orderItems]))
        setOrderItems([])
    }
    useEffect(() => {
        if (orderItems.length !== 0) {
            setHasNewOrder(true)
        } else {
            setHasNewOrder(false)
        }
    }, [orderItems])

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
        newItemHandler(item)
    }

    function handleButtonInput(e) {
        setButtonInputStart(true)
        let value

        if (e.ProductName) {
            value = e.ProductName
        } else {
            setNumberInput(numberInput + e)
            value = numberInput
            if (numberInput.length > 3) {
                setNumberInput("")
            }
        }
        setButtonInputValue(value)
        console.log(buttonInputValue);
    }
    return (
        <section id="orders_section" className={styles.orders_section}>
            <div id="order_section_action_type" className={styles.order_section_action_type}>
                <h2 id="order_section_action">Enter Order for table:</h2>
                <h2 className="current_table_number">{tableNumber}</h2>
            </div>
            <div className={styles.order_section_buttons}>
                <button onClick={() => setKeypad(false)} className={styles.order_section_button}
                >Items</button>
                <button onClick={() => setKeypad(true)} className={styles.order_section_button}
                >Keypad</button>
            </div>
            <div className={styles.ordering_section}>
                {!keypad && <ItemButtons newItemHandler={handleButtonInput} items={getItems} />}
                {keypad && <ItemKeypad newItemHandler={handleButtonInput} />}
            </div>

            <TableInformation table={table} tableNumber={tableNumber} />
            <div className={styles.orderdered_items}>
                <TableOrder order={currTableOrder} />
            </div>
            <div className={styles.newOrderSection}>

                <table id="order_table" className={styles.new_order_table}>
                    <thead>
                        <tr id="order_table_head" className={styles.order_table_head}>
                            <th>
                                <p>Product name</p>
                            </th>
                            <th>
                                <p>Count ordered</p>
                            </th>
                            <th>
                                <p>Price</p>
                            </th>
                        </tr>
                    </thead>

                    <tbody className={styles.tableBody}>
                        {orderItems.map(item => <tr>
                            <td>{item.product}</td> <td>{item.count}</td> <td>{item.price}</td>
                        </tr>)}
                    </tbody>
                </table>
                <form className={styles.newFormOrder} onSubmit={addToOrder}>
                    <div className={styles.newOrderInput}>
                        <div>
                            <label htmlFor="note">Note</label>
                            <input type="text" id="note" name="note" />
                        </div>
                        <div>
                            <label htmlFor="product">Product</label>
                            {buttonInputStart ? <input type="text" id="product" name="product" defaultValue={buttonInputValue} /> : <input type="text" id="product" name="product" />}
                        </div>
                        <div>
                            <label htmlFor="count">Count</label>
                            <input type="number" id="count" name="count" />
                        </div>
                        <div className={styles.formAddBtn}>
                            <button>Add</button>
                        </div>
                    </div>
                </form>

            </div>
            <button onClick={postNewOrder} className={styles.send_order_button} disabled={!hasNewOrder}>Order</button>
        </section>
    )
}