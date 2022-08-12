import { getUserData } from '../../../../services/utility';
import styles from '../RightOrderSection.module.css'


export const Table = ({ table, selectTableHandler }) => {
    const user = getUserData()
    let tableNumber = table[0] || "";
    let time = table[2]?.time || "";
    let tableMessage = table[2]?.note || "";
    let people = table[2]?.guests || "";

    return (
        <div onClick={() => selectTableHandler(table)} className={styles.opened_table} data-table-number={tableNumber} data-own-table="false">
            <p className={styles.table_open_time}>{time} h</p>
            <p className={styles.table_n}>{tableNumber}</p>
            {people && <p className={styles.people}>x{people}</p>}
            {tableMessage !== "" && <p className={styles.table_message}>&#128172;</p>}
            {user.userAccess == "full" && <p className={styles.table_redact}>&#9998;</p>}
        </div>
    )
}