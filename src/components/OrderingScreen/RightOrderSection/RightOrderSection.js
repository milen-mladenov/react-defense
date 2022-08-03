import styles from './RightOrderSection.module.css'
import { MoreOptions } from './MoreOptions/MoreOptions'
import { Table } from './Table/Table'
import { TableOptions } from './TableSelect_options/TableOptions'
import { useEffect, useState } from 'react'

export const RightOrderSection = ({ newTable, currTables, table, selectTableHandler }) => {

    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {
        setShowInfo(true)
    }, [table[0]])

    function openNewTable() {
        newTable("")
    }

    return (
        <>
            {!showInfo && <section className={styles.table_select_and_menu_section}>
                <div id="table_select_section" className={styles.table_select_section}>
                    <button id="open_new_table_button" onClick={openNewTable} className={styles.open_new_table_button}>Отвори нова маса</button>
                    <button onClick={() => setShowInfo(!showInfo)} >More Info</button>
                    <div className={styles.filters}>
                        <TableOptions />
                    </div>
                    <div className={styles.tables}>
                        <div className={styles.opened_tables}>
                            {currTables.map(table => <Table key={table[0]} selectTableHandler={selectTableHandler} table={table} />)}
                        </div>
                    </div>
                </div>
            </section>}

            {showInfo && <section className={styles.opened_table_section}>
                <div id="go_back_link" className={styles.go_back_link}>
                    <h2>&#10094;</h2>
                    <h2 onClick={() => setShowInfo(!showInfo)}>Обратно към отворените маси</h2>
                </div>
                <div id="opened_table_name_section" className={styles.opened_table_name_section}>
                    <h2>Детайли за маса №: <span>{table[0]}</span></h2>
                    <h2>{table[2].note}</h2>
                </div>
                <h3 className={styles.opened_table_server}>Сервитьор: {table[2].server}</h3>
                <div className={styles.opened_table_buttons}>
                    <button className={styles.opened_table_print}>Касова бележка</button>
                    <button className={styles.close_table}>Затвори масата</button>
                </div>
                <MoreOptions />
            </section>}
        </>
    )
}