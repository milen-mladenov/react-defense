import { useEffect, useState } from 'react'
import moment from 'moment'
import styles from './RightOrderSection.module.css'
import closeMenu from '../../utility/svg/closeMenu.svg'
import { TableOptions } from './TableSelect_options/TableOptions'
import { MoreOptions } from './MoreOptions/MoreOptions'
import { Table } from './Table/Table'
import { getUserData } from '../../../services/utility'


export const RightOrderSection = ({ newTable, currTables, table, selectTableHandler }) => {

    const [showInfo, setShowInfo] = useState(false)
    const [createTable, setCreateTable] = useState(false)
    const currentUser = getUserData()
    const tableNumber = table[0] || "";
    const tableServer = table[2]?.server || "";
    const tableNote = table[2]?.note || ""
    // const tableNumber = 0;
    // const tableServer = "";
    // const tableNote = ""

    useEffect(() => {
        setShowInfo(true)
    }, [tableNumber])

    function openNewTable() {
        setCreateTable(true)
    }

    function handleCreateTable(e) {
        e.preventDefault()

        let currTime = moment().format("hh:mm:ss")
        let data = new FormData(e.target)

        let tableInfo = {
            id: `${currTime}/${data.get("tableNumber")}`,
            time: currTime,
            server: currentUser.userName,
            guests: data.get("numberOfGuests"),
            note: data.get("tableNote"),
        }

        let table = [Number(data.get("tableNumber")), {}, tableInfo]

        newTable(table)
        setCreateTable(false)
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
                            {currTables?.map(table => <Table key={table[2].id} selectTableHandler={selectTableHandler} table={table} />)}
                        </div>
                    </div>
                </div>
            </section>}

            {createTable && <section className={styles.newTableForm}>
                <div onClick={() => setCreateTable(false)} className={styles.closeBtn}>
                    <img src={closeMenu} />
                </div>
                <form onSubmit={handleCreateTable}>
                    <div className={styles.tableDetails}>
                        <div>
                            <label htmlFor='tableNumber'>
                                Table №:
                            </label>
                            <input name='tableNumber' type="number" />

                        </div>
                        <div>
                            <label htmlFor='numberOfGuests'>
                                Guests:
                            </label>
                            <input name='numberOfGuests' type="number" />
                        </div>
                    </div>
                    <div className={styles.tableNote}>
                        <label htmlFor='tableNote'>
                            Table Note:
                        </label>
                        <textarea name='tableNote' />
                    </div>
                    <button>Open</button>
                </form>
            </section>}

            {showInfo && <section className={styles.opened_table_section}>
                <div id="go_back_link" className={styles.go_back_link}>
                    <h2>&#10094;</h2>
                    <h2 onClick={() => setShowInfo(!showInfo)}>Обратно към отворените маси</h2>
                </div>
                <div id="opened_table_name_section" className={styles.opened_table_name_section}>
                    <h2>Детайли за маса №: <span>{tableNumber}</span></h2>
                    <h2>{tableNote}</h2>
                </div>
                <h3 className={styles.opened_table_server}>Сервитьор: {tableServer}</h3>
                <div className={styles.opened_table_buttons}>
                    <button className={styles.opened_table_print}>Касова бележка</button>
                    <button className={styles.close_table}>Затвори масата</button>
                </div>
                <MoreOptions />
            </section>}
        </>
    )
}