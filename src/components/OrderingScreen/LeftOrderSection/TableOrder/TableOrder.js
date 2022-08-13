import { useEffect, useState } from "react"
import styles from './TableOrder.module.css'
import { TableRow } from "./TableRows/TableRow"


export const TableOrder = ({ order }) => {
    const [currOrder, setCurrOrder] = useState([])


    useEffect(() => {

        let items = order[0] || []

        setCurrOrder(items)

    }, [order])


    return (
        <div>
            <table id="order_table" className={styles.order_table}>
                <thead>
                    <tr id="order_table_head" className={styles.order_table_head}>
                        <th>
                            <p>Note</p>
                        </th>
                        <th>
                            <p>Product</p>
                        </th>
                        <th>
                            <p>Ordered</p>
                        </th>
                        <th>
                            <p>price/per</p>
                        </th>
                    </tr>
                </thead>

                <tbody className={styles.tableBody}>
                    {currOrder.map(item => <TableRow key={currOrder.length + item.product} item={item} />)}
                </tbody>
            </table>
        </div>
    )
}