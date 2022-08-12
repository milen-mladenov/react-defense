import { useEffect, useState } from "react"
import styles from './OrderingScreen.module.css'
import { getDayTables, updateTablesStatus } from "../../services/TablesApi"
import moment from "moment"

import { MainFilters } from "./MainFilters/MainFilters"
import { LeftOrderSection } from "./LeftOrderSection/LeftOrderSection"
import { RightOrderSection } from "./RightOrderSection/RightOrderSection"

export const OrderingScreen = () => {
    const [filter, setFilter] = useState("All")

    const [currTables, setCurrTables] = useState
        ([
            [23, {}, { id: "text" + Math.random(), server: "server 1", time: 98, amount: 42.70, note: "nothing", guests: 5 }],
            [3, {}, { id: "text" + Math.random(), server: "server 3", time: 28, amount: 462.70, note: "", guests: 15 }],
            [13, {}, { id: "text" + Math.random(), server: "server 2", time: 198, amount: 32.70, note: "nothing", }],
            [16, {}, { id: "text" + Math.random(), server: "server 1", time: 30, amount: 142.70, note: "", guests: 2 }],
            [35, {}, { id: "text" + Math.random(), server: "server 2", time: 8, amount: 132.70, note: "", guests: 3 }],
            [8, {}, { id: "text" + Math.random(), server: "server 2", time: 19, amount: 12.70, note: "nothing", }],
            [12, {}, { id: "text" + Math.random(), server: "server 3", time: 205, amount: 122.70, note: "", guests: 4 }],
            [43, {}, { id: "text" + Math.random(), server: "server 1", time: 158, amount: 72.70, note: "nothing", guests: 4 }],
            [23, {}, { id: "text" + Math.random(), server: "server 1", time: 98, amount: 42.70, note: "nothing", guests: 5 }],
            [3, {}, { id: "text" + Math.random(), server: "server 3", time: 28, amount: 462.70, note: "", guests: 15 }],
            [13, {}, { id: "text" + Math.random(), server: "server 2", time: 198, amount: 32.70, note: "nothing", }],

        ]);
    const [closedTabtles, setClosedTables] = useState([])
    const [dayId, setDayId] = useState("")
    const [table, setTable] = useState([])

    const currDate = moment().format("DD/MM/YYYY")


    // useEffect(() => {
    //     getTables(currDate)
    // }, [])
    function handleItemFilters(department) {
        setFilter(department)
    }
    function newTableHandler(t) {
        setCurrTables(state => ([
            ...state,
            t
        ]))
    }

    async function getTables(date) {

        let tables = await getDayTables(date)

        setCurrTables(tables.allOpenedTables)
        setClosedTables(tables.allClosedTables)
        setDayId(tables.id)

    }

    function selectTableHandler(select) {
        setTable(select)
        console.log(select);
    }

    function test() {
        console.log(dayId);
        console.log(currTables);
        console.log(closedTabtles);
    }
    return (
        <>
            <button onClick={test}>test</button>
            <MainFilters handler={handleItemFilters} />
            <div className={styles.orderingScreen}>
                <LeftOrderSection table={table} filter={filter} />
                <RightOrderSection table={table} currTables={currTables} newTable={newTableHandler} selectTableHandler={selectTableHandler} />
            </div>
        </>
    )
}