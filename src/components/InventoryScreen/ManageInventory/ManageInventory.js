import barItems from '../../utility/barItems.json'
import { ItemManagement } from '../ItemManagement/ItemManagement'
import styles from '../InventoryScreen.module.css'
import { useState } from 'react'
let total

export const ManageInventory = () => {
    const [calcDiff, setCalcDiff] = useState({});

    total = handleChange()

    function handleDiff(name, diff) {
        setCalcDiff(state => ({
            ...state,
            [name]: diff
        }))
    }

    function handleChange() {
        let totalV = 0
        for (const value of Object.values(calcDiff)) {
            totalV += value
        }
        return totalV
    }

    return (
        <div>
            <form onChange={handleChange}>
                {barItems.map(item => <ItemManagement key={item.id} item={item} handleDiff={handleDiff} calc={handleChange} />)}
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