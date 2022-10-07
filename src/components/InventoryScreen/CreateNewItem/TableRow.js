
export const TableRow = ({ item }) => {

    return (
        <tr>
            <td onClick >{item.Department}</td>
            <td>{item.ProductID}</td>
            <td>{item.ProductName}</td>
            <td>{item.ProductCode}</td>
            <td>{item.SellPrice}</td>
            <td>{item.RetailPrice}</td>
            <td>{item.SystemQuantity}</td>
        </tr>
    )
}