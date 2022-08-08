import { useState } from "react"
import { LeftOrderSection } from "./LeftOrderSection/LeftOrderSection"
import { MainFilters } from "./MainFilters/MainFilters"
import { RightOrderSection } from "./RightOrderSection/RightOrderSection"
import styles from './OrderingScreen.module.css'
export const OrderingScreen = () => {
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
            [16, {}, { id: "text" + Math.random(), server: "server 1", time: 30, amount: 142.70, note: "", guests: 2 }],
            [35, {}, { id: "text" + Math.random(), server: "server 2", time: 8, amount: 132.70, note: "", guests: 3 }],
            [8, {}, { id: "text" + Math.random(), server: "server 2", time: 19, amount: 12.70, note: "nothing", }],
            [12, {}, { id: "text" + Math.random(), server: "server 3", time: 205, amount: 122.70, note: "", guests: 4 }],
            [43, {}, { id: "text" + Math.random(), server: "server 1", time: 158, amount: 72.70, note: "nothing", guests: 4 }],
            [23, {}, { id: "text" + Math.random(), server: "server 1", time: 98, amount: 42.70, note: "nothing", guests: 5 }],
            [3, {}, { id: "text" + Math.random(), server: "server 3", time: 28, amount: 462.70, note: "", guests: 15 }],
            [13, {}, { id: "text" + Math.random(), server: "server 2", time: 198, amount: 32.70, note: "nothing", }],
            [16, {}, { id: "text" + Math.random(), server: "server 1", time: 30, amount: 142.70, note: "", guests: 2 }],
            [35, {}, { id: "text" + Math.random(), server: "server 2", time: 8, amount: 132.70, note: "", guests: 3 }],
            [8, {}, { id: "text" + Math.random(), server: "server 2", time: 19, amount: 12.70, note: "nothing", }],
            [12, {}, { id: "text" + Math.random(), server: "server 3", time: 205, amount: 122.70, note: "", guests: 4 }],
            [43, {}, { id: "text" + Math.random(), server: "server 1", time: 158, amount: 72.70, note: "nothing", guests: 4 }],
        ]);
    const [table, setTable] = useState(currTables[5])

    function newTableHandler(t) {
        setCurrTables(state => ([
            ...state,
            t
        ]))
    }

    function selectTableHandler(select) {
        setTable(select)
    }

    return (
        <>
            <MainFilters />
            <div className={styles.orderingScreen}>
                <LeftOrderSection table={table} />
                <RightOrderSection table={table} currTables={currTables} newTable={newTableHandler} selectTableHandler={selectTableHandler} />
            </div>
        </>
    )
}