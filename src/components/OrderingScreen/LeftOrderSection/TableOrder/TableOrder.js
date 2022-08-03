import { TableRow } from "./TableRows/TableRow"
import styles from './TableOrder.module.css'


export const TableOrder = () => {
    const items = {
        name: "name",
        note: "+",
        price: "2.25",
        count: "7",
        currentOrder: 0
    }

    return (
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
                        <p>добави</p>
                    </th>
                    <th>
                        <p>ед. сума</p>
                    </th>
                </tr>
            </thead>

            <tbody className={styles.tableBody}>
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />
                <TableRow items={items} />

            </tbody>
        </table>
    )
}