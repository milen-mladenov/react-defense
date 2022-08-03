import styles from './InventoryScreen.module.css'
import { ManageInventory } from './ManageInventory/ManageInventory'
import { Forms } from './Forms/Forms'
import barItems from '../utility/barItems.json'
import { useState } from 'react'
import { CreateNewItem } from './CreateNewItem/CreateNewItem'
import { ItemManagement } from './ItemManagement/ItemManagement'

export const InventoryScreen = () => {
    const [action, setAction] = useState("")

    function handleAction(act) {
        setAction(act)
    }
    return (
        <section>
            <Forms handleAction={handleAction} />
            {action == "createItem" && <CreateNewItem />}
            {action == "inventory" && <ManageInventory /> }
        </section>
    )
}