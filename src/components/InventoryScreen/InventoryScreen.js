import styles from './InventoryScreen.module.css'
import { ManageInventory } from './ManageInventory/ManageInventory'
import { Forms } from './Forms/Forms'

import { useEffect, useState } from 'react'
import { CreateNewItem } from './CreateNewItem/CreateNewItem'

import { getAllInventory, getAllBarItems, getAllKitchenItems } from '../../services/InventoryApi'
import { getDayTables } from '../../services/TablesApi'
import { getUserData } from '../../services/utility'



export const InventoryScreen = () => {
    const [action, setAction] = useState("");
    const [getItems, setGetItems] = useState([]);
    const [closedTabtles, setClosedTables] = useState([])
    const [showClosedTables, setShowClosedTables] = useState(false)
    const user = getUserData()

    useEffect(() => {
        cleanUp()
        allTables("13/08/2022")
        function cleanUp() {
            setClosedTables([])
        }
    }, [])

    function allTables(currDate) {
        getTables(currDate)

        async function getTables(date) {
            let result = await getDayTables(date)

            result.allClosedTables.forEach(table => {
                setClosedTables(state => ([...state, table]))
            })

        }

    }


    async function getFullInventory() {
        setGetItems([])
        const res = await getAllInventory()
        setGetItems(res)
    }

    async function getFullBarInventory() {
        setGetItems([])
        const barRes = await getAllBarItems()
        setGetItems(barRes)
    }

    async function getFullKitchenInventory() {
        setGetItems([])
        const kitchenRes = await getAllKitchenItems()
        setGetItems(kitchenRes)
    }



    function handleAction(act) {
        setAction(act)
    }

    return (
        <section>
            <Forms handleAction={handleAction} />
            <div className={styles.categoryButtons}>
                <button onClick={getFullInventory}>Full</button>
                <button onClick={getFullBarInventory}>Bar</button>
                <button onClick={getFullKitchenInventory}>Kitchen</button>
            </div>
            {action == "createItem" && <CreateNewItem />}
            {action == "inventory" && <ManageInventory items={getItems} />}
            {user.userAccess == "full" && <button className={styles.showClosedTables} onClick={() => setShowClosedTables(!showClosedTables)}>Display closed tables</button>}

            {showClosedTables && <div className={styles.closedTables}>
                <ol>
                    {closedTabtles?.map(table => <li key={table[2].id}>Table: {table[0]}, Opened at:{table[2].time}, Amount: {table[2].amount.toFixed(2)}</li>)}
                </ol>
            </div>}
        </section>
    )

}