import { ItemManagement } from '../ItemManagement/ItemManagement'
import styles from '../InventoryScreen.module.css'
import { useEffect, useState } from 'react'
import { updateInventory } from '../../../services/InventoryApi'
// let total = 0

export const ManageInventory = ({ items }) => {
    const [currentSelectedInput, setCurrentSelectedInput] = useState({})
    const [calcDiff, setCalcDiff] = useState({});
    const [total, setTotal] = useState(0)
    useEffect(() => {
        cleanUp()
        let amount = handleChange()
        setTotal(amount)
       function cleanUp(){
        setTotal(0)
       }
    }, [items])

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


    return (
        <div>
            <form className={styles.manageInventoryForm} onSubmit={updateSection} onChange={handleChange}>
                {items.map(item => <ItemManagement key={item.ProductID} item={item} handleDiff={handleDiff} updateInput={updateInput} calc={handleChange} />)}
                <input type="submit" value="submit_item" id="submit_new_items" className={styles.submit_btn} />
            </form>
            <h2>Total: {total.toFixed(2)}</h2>
        </div>
    )
}

