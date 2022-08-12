import { TableRow } from "./TableRows/TableRow"
import styles from './TableOrder.module.css'
import { useEffect, useState } from "react"


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
                            <p>коментар</p>
                        </th>
                        <th>
                            <p>име артикул</p>
                        </th>
                        <th>
                            <p>поръчани</p>
                        </th>
                        <th>
                            <p>ед. сума</p>
                        </th>
                    </tr>
                </thead>

                <tbody className={styles.tableBody}>
                    {/* {order.map(arr=> arr.map(item => <TableRow key={currOrder.length + item.product} item={item} />))} */}
                    {currOrder.map(item => <TableRow key={currOrder.length + item.product} item={item} />)}
                </tbody>
            </table>
        </div>
    )
}