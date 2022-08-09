import styles from './InventoryScreen.module.css'
import { ManageInventory } from './ManageInventory/ManageInventory'
import { Forms } from './Forms/Forms'
import barItems from '../utility/barItems.json'
import { useState } from 'react'
import { CreateNewItem } from './CreateNewItem/CreateNewItem'
import { ItemManagement } from './ItemManagement/ItemManagement'

import { getAllInventory, getAllBarItems, getAllKitchenItems } from '../../services/InventoryApi'


export const InventoryScreen = () => {
    const [action, setAction] = useState("");
    const [getItems, setGetItems] = useState([])

    async function getFullInventory() {
        const res = await getAllInventory()
        setGetItems(res)

    }

    async function getFullBarInventory() {
        const barRes = await getAllBarItems()
        setGetItems(barRes)
    }

    async function getFullKitchenInventory() {
        const kitchenRes = await getAllKitchenItems()
        setGetItems(kitchenRes)
    }


    function handleAction(act) {
        setAction(act)
    }

    return (
        <section>
            <Forms handleAction={handleAction} />
            <button onClick={getFullInventory}>Full</button>
            <button onClick={getFullBarInventory}>Bar</button>
            <button onClick={getFullKitchenInventory}>Kitchen</button>
            {action == "createItem" && <CreateNewItem />}
            {action == "inventory" && <ManageInventory items={getItems} />}
        </section>
    )
}