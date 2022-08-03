import styles from '../RightOrderSection.module.css'

import { ArangeTableFilters } from "./ArangeTableFilters/ArangeTableFilters"
import { ShowTableFilters } from "./ShowTableFilters/ShowTableFilters"


export const TableOptions = () => {
    return (
        <div id="table_options" className={styles.table_options}>
            <h3>Филтрирай</h3>
            <div id="table_show" className={styles.table_show}>
                <p>Покажи:</p>
                <ShowTableFilters />
            </div>
            <div id="table_order" className={styles.table_order}>
                <p>Подреди по:</p>
                <ArangeTableFilters />
            </div>
        </div>
    )
}