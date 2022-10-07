import { useEffect, useState } from "react"
import styles from './OrderingScreen.module.css'
import moment from "moment"

import { getDayTables, updateTable } from "../../services/TablesApi"
import { RightOrderSection } from "./RightOrderSection/RightOrderSection"
import { LeftOrderSection } from "./LeftOrderSection/LeftOrderSection"
import { MainFilters } from "./MainFilters/MainFilters"


export const OrderingScreen = () => {
    const [filter, setFilter] = useState("All")
    const [currTables, setCurrTables] = useState([]);

    const [table, setTable] = useState([])
    const currDate = moment().format("DD/MM/YYYY")

    function handleItemFilters(department) {
        setFilter(department)
    }

    function newTableHandler(t) {
        setCurrTables(state => ([
            ...state,
            t
        ]))
    }

    useEffect(() => {
        cleanUp()
        allTables(currDate)

        function cleanUp() {
            setCurrTables([])
        }
    }, [table])

    function addToTableOrder(order) {
        let allTables = currTables
        let tableIndex
        let totalAmount = 0

        allTables.forEach(element => {
            if (element[0] == table[0]) {
                tableIndex = allTables.indexOf(element);
            }
        });

        let selected = allTables.splice(tableIndex, 1)
        for (let i = 0; i < order.length; i++) {
            selected[0][1].push(order[i]);
        }

        for (const iterator of selected[0][1]) {
            let curPrice = iterator.count * iterator.price
            totalAmount += curPrice
        }

        let currTable = selected[0]
        let number = currTable[0]
        let curOrder = currTable[1]
        let details = currTable[2]

        currTable[2].amount += totalAmount;
        updateTable(number, curOrder, details)
        allTables.push(currTable)
        setCurrTables(allTables)
    }

    function selectTableHandler(select) {
        setTable(select)
    }

    function allTables(currDate) {
        getTables(currDate)

        async function getTables(date) {
            let result = await getDayTables(date)

            result.allOpenedTables.forEach(table => {
                setCurrTables(state => ([...state, table]))
            })

        }
    }

    function closeTableHandler() {
        setCurrTables([]);
        setTable([]);
    }

    return (
        <>
            <MainFilters handler={handleItemFilters} />
            <div className={styles.orderingScreen}>
                <LeftOrderSection table={table} filter={filter} handleNewOrder={addToTableOrder} />
                <RightOrderSection table={table} closeTableHandler={closeTableHandler} currTables={currTables} newTable={newTableHandler} selectTableHandler={selectTableHandler} />
            </div>
        </>
    )
}