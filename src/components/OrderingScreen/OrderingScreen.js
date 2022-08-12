import { useEffect, useState } from "react"
import styles from './OrderingScreen.module.css'
import moment from "moment"

import { MainFilters } from "./MainFilters/MainFilters"
import { LeftOrderSection } from "./LeftOrderSection/LeftOrderSection"
import { RightOrderSection } from "./RightOrderSection/RightOrderSection"
import { clearTablesData, getTablesData, setTablesData } from "../utility/tables"


export const OrderingScreen = () => {
    const [filter, setFilter] = useState("All")

    const [currTables, setCurrTables] = useState
        ([
            [23, [{ note: '', product: 'Product_3', count: 15, price: 1.2 }, { note: '', product: 'Product_12', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 1", time: "09:28:39", amount: 0, note: "nothing", guests: 5 }],
            [3, [{ note: '', product: 'Product_1', count: 1, price: 12 }, { note: '', product: 'Product_5', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 3", time: "19:30:09", amount: 0, note: "", guests: 15 }],
            [13, [{ note: '', product: 'Product_15', count: 5, price: 4.2 }, { note: '', product: 'Product_3', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 2", time: "12:28:10", amount: 0, note: "nothing", }],
            [16, [{ note: '', product: 'Product_7', count: 11, price: 7.2 }, { note: '', product: 'Product_21', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 1", time: "16:41:39", amount: 0, note: "", guests: 2 }],
            [35, [{ note: '', product: 'Product_4', count: 25, price: 12 }, { note: '', product: 'Product_1', count: 3, price: 2.6 }, { note: '', product: 'Product_7', count: 15, price: 12 }, { note: '', product: 'Product_21', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 2", time: "10:10:36", amount: 0, note: "", guests: 3 }],
            [8, [{ note: '', product: 'Product_27', count: 15, price: 8.2 }, { note: '', product: 'Product_22', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 2", time: "16:48:29", amount: 0, note: "nothing", }],
            [12, [{ note: '', product: 'Product_17', count: 1, price: 21.2 }, { note: '', product: 'Product_4', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 3", time: "12:28:59", amount: 0, note: "", guests: 4 }],
            [43, [{ note: '', product: 'Product_2', count: 8, price: 3.2 }, { note: '', product: 'Product_12', count: 3, price: 2.6 }], { id: "text" + Math.random(), server: "server 1", time: "06:48:39", amount: 0, note: "nothing", guests: 4 }],
        ]);

    const [closedTabtles, setClosedTables] = useState([])
    const [dayId, setDayId] = useState("")
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

        let tables = getTablesData()
        if(tables !== null){
            setCurrTables(tables)
        }
        
    }, [])


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


        clearTablesData()
        selected[0][2].amount += totalAmount;
        allTables.push(selected[0])
        setCurrTables(allTables)
        setTablesData(allTables)
    }

    function selectTableHandler(select) {
        setTable(select)
    }

    function test() {
        console.log(table);
        console.log(table[2].amount);
    }

    return (
        <>
            <MainFilters handler={handleItemFilters} />
            <button onClick={test}>show table</button>
            <div className={styles.orderingScreen}>
                <LeftOrderSection table={table} filter={filter} handleNewOrder={addToTableOrder} />
                <RightOrderSection table={table} currTables={currTables} newTable={newTableHandler} selectTableHandler={selectTableHandler} />
            </div>
        </>
    )
}