import { TableRow } from "./TableRows/TableRow"
import styles from './TableOrder.module.css'
import { useEffect, useState } from "react"
import { getAllInventory } from "../../../../services/InventoryApi"


export const TableOrder = ({ order }) => {

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
                    {order.map(item => <TableRow key={order.length} item={item} />)}
                </tbody>
            </table>
        </div>
    )
}