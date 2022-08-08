import styles from './InventoryScreen.module.css'
import { ManageInventory } from './ManageInventory/ManageInventory'
import { Forms } from './Forms/Forms'
import barItems from '../utility/barItems.json'
import { useState } from 'react'
import { CreateNewItem } from './CreateNewItem/CreateNewItem'
import { ItemManagement } from './ItemManagement/ItemManagement'
import { getAllBarItems } from '../../services/BarServices'


export const InventoryScreen = () => {
    const [action, setAction] = useState("")

    async function getBarItems() {
        const testLog = await getAllBarItems()
        console.log(testLog);
    }

    function handleAction(act) {
        setAction(act)
    }
    return (
        <section>
            <Forms handleAction={handleAction} />
            <button onClick={getBarItems}>test</button>
            {action == "createItem" && <CreateNewItem />}
            {action == "inventory" && <ManageInventory />}
        </section>
    )
}