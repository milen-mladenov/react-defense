import styles from '../TableOrder.module.css'
import { useState } from "react"

export const TableRow = ({ item }) => {

    return (
        <tr>
            <td>
                <p>{item.Note}</p>
            </td>
            <td><p>{item.ProductName}</p></td>
            <td>
                <p>{item.CurrentCount}</p>
            </td>
            <td>
                <p>{item.SellPrice}</p>
            </td>
        </tr>
    )
}
