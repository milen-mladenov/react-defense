import styles from '../TableOrder.module.css'
import { useState } from "react"

export const TableRow = ({ item }) => {
    let note = item?.Note || ""
    let product = item?.ProductName || ""
    let count = item?.CurrentCount || ""
    let price = item?.SellPrice || ""
    return (
        <tr>
            <td>
                <p>{note}</p>
            </td>
            <td><p>{product}</p></td>
            <td>
                <p>{count}</p>
            </td>
            <td>
                <p>{price}</p>
            </td>
        </tr>
    )
}
