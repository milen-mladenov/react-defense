import { useEffect, useState } from 'react'
import styles from './TableInformation.module.css'

export const TableInformation = ({ tableNumber, table }) => {
    const [am, setAmount] = useState(0)

    useEffect(() => {
        let tab = table[1] || []

        let total = 0
        tab.forEach(element => {
            total += element.price * element.count
        });
        setAmount(total)

    }, [table])


    return (
        <div id="order_table_top" className={styles.order_table_top}>
            <div id="table_name">
                <h2 id="selected_table_number">Поръчка за маса:</h2>
                <h2 id="selected_table_name">{tableNumber}</h2>
            </div>

            <div id="table_amount">
                <h2 id="selected_table_total_amount">{am.toFixed(2)}</h2>
                <h2 id="currency_type">лв.</h2>
            </div>
        </div>
    )
}