import { useEffect, useState } from "react"


export const TableRow = ({ item }) => {

    return (
        <tr>
            <td>{item.ProductID}</td>
            <td>{item.ProductName}</td>
            <td>{item.ProductCode}</td>
            <td>{item.SellPrice}</td>
            <td>{item.RetailPrice}</td>
            <td>{item.SystemQuant}</td>
            <td>{item.Alcohol ? "Yes" : "No"}</td>
        </tr>
    )
}