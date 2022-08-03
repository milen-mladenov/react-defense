import { tab } from '@testing-library/user-event/dist/tab'
import styles from '../RightOrderSection.module.css'


export const Table = ({ table,selectTableHandler }) => {
    let tableNumber = table[0];
    let time = table[2].time;
    let tableMessage = table[2].note || ""
    let people = table[2].guests

    let currTimeHours = Math.floor(time / 60);
    let currTimeMinutes = Math.floor(time % 60);


    return (
        <div onClick={() => selectTableHandler(table)} className={styles.opened_table} data-table-number={tableNumber} data-own-table="false">
            <p className={styles.table_open_time}>{currTimeHours}:{currTimeMinutes} h</p>
            <p className={styles.table_n}>{tableNumber}</p>
            {people && <p className={styles.people}>x{people}</p>}
            {tableMessage !== "" && <p className={styles.table_message}>&#128172;</p>}
            <p className={styles.table_redact}>&#9998;</p>
        </div>
    )
}