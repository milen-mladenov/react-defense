import { ItemCreation } from "../ItemCreation/ItemCreation"
import styles from '../InventoryScreen.module.css'
import { useEffect, useState } from "react"
let newRow = { ProductID: "", ProductName: "", ProductCode: "", SellPrice: "", RetailPrice: "", SystemQuant: "", Alcohol: false }
const order = []
export const CreateNewItem = () => {
    const [currentInputOrder, setCurrentInputOrder] = useState([newRow])
    const [lastRow, setLastRow] = useState(false);
    const [curLastRow, setCurLastRow] = useState(order[order.length - 1])

    function handleInput(item) {
        // setCurrentInputOrder(state => ([
        //     ...state,
        //     item
        // ]))
        order.push(item)
    }

    function handleLastRow() {
        setLastRow(true)
    }
    
    function addNewRow() {

        let inputLength = currentInputOrder.length
        let lastRowID = currentInputOrder[inputLength - 1]
        if (lastRow) {
            setCurrentInputOrder(state => ([
                ...state,
                newRow
            ]))
            setLastRow(false)
        }
        console.log(inputLength);
        console.log(lastRowID);
    }

    return (
        <form onChange={addNewRow} id="new_items" className={styles.new_items}>
            {/* {currentInputOrder.map(item => <ItemCreation key={currentInputOrder.length} handleLastRow={handleLastRow} handler={handleInput} item={item} />)} */}
            {order.map(item => <ItemCreation key={currentInputOrder.length} handleLastRow={handleLastRow} handler={handleInput} item={item} />)}
            <ItemCreation key={currentInputOrder.length} handleLastRow={handleLastRow} handler={handleInput} item={newRow} />
            {lastRow && <ItemCreation key={currentInputOrder.length} handleLastRow={handleLastRow} handler={handleInput} item={newRow} />}

            <input type="submit" value="submit_item" id="submit_new_items" className={styles.submit_btn} />
        </form>
    )
}