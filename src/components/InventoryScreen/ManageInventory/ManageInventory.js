import { useState } from 'react'
import styles from '../InventoryScreen.module.css'
import { ItemManagement } from '../ItemManagement/ItemManagement'
import { updateInventory } from '../../../services/InventoryApi'
// let total = 0

export const ManageInventory = ({ items }) => {
    const [currentSelectedInput, setCurrentSelectedInput] = useState({})
    const [calcDiff, setCalcDiff] = useState({});

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

    function updateSection(e) {
        e.preventDefault()
        items.forEach(element => {
            if (currentSelectedInput.hasOwnProperty(element.ProductID)) {
                element.SystemQuantity = Number(currentSelectedInput[element.ProductID])
                let id = element.objectId
                updateInventory(id, element)
            }
        });

    }


    return (
        <div>
            <form className={styles.manageInventoryForm} onSubmit={updateSection} >
                {items.map(item => <ItemManagement key={item.ProductID} item={item} handleDiff={handleDiff} updateInput={updateInput} />)}
                <input type="submit" value="Submit Items" id="submit_new_items" className={styles.submit_btn} />
            </form>

        </div>
    )
}

