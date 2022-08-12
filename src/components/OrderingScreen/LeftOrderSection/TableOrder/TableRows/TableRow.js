import styles from '../TableOrder.module.css'
import { useState } from "react"

export const TableRow = ({ item }) => {

    let note = item?.note || ""
    let product = item?.product || ""
    let count = item?.count || ""
    let price = item?.price || ""
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
