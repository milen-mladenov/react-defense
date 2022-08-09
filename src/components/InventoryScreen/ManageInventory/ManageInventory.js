import { ItemManagement } from '../ItemManagement/ItemManagement'
import styles from '../InventoryScreen.module.css'
import { useState } from 'react'
import { getObjectId, updateInventory } from '../../../services/InventoryApi'
let total

export const ManageInventory = ({ items }) => {
    const [currentSelectedInput, setCurrentSelectedInput] = useState({})
    const [calcDiff, setCalcDiff] = useState({});

    total = handleChange()

    function handleDiff(name, diff) {
        setCalcDiff(state => ({
            ...state,
            [name]: diff
        }))
    }

    function updateInput(name, value) {

        setCurrentSelectedInput(state => ({
            ...state,
            [name]: value
        }))
    }

    function handleChange() {
        let totalV = 0
        for (const value of Object.values(calcDiff)) {
            totalV += value
        }
        return totalV
    }

    function updateSection(e) {
        e.preventDefault()
        items.forEach(element => {
            if (currentSelectedInput.hasOwnProperty(element.ProductID)) {
                element.SystemQuantity = Number(currentSelectedInput[element.ProductID])
                let id = element.objectId

                updateInventory(id, element)
            }
        });
        console.log(currentSelectedInput);
        console.log(items);
    }

    function test() {
        getObjectId()
    }

    return (
        <div>
            <button onClick={test}>Test Oid</button>
            <form onSubmit={updateSection} onChange={handleChange}>
                {items.map(item => <ItemManagement key={item.ProductID} item={item} handleDiff={handleDiff} updateInput={updateInput} calc={handleChange} />)}
                <input type="submit" value="submit_item" id="submit_new_items" className={styles.submit_btn} />
            </form>
            <h2>Total: {total.toFixed(2)}</h2>
        </div>
    )
}


{/* <label htmlFor="productCode">
<p>Product code</p>

</label>
<label htmlFor="product">
<p>product</p>

</label>
<label htmlFor="id">
<p>product number</p>

</label>
<label htmlFor="retailPrice">
<p>retail price</p>

</label>
<label htmlFor="sellPrice">
<p>sell price</p>

</label>
<label htmlFor="systemQuant">
<p>system quant</p>

</label>
<label htmlFor="currentQuant">
<p>system quant</p>

</label>
<label htmlFor="difference">
<p>system quant</p>

</label> */}