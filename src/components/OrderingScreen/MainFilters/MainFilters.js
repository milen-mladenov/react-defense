import styles from './MainFilters.module.css'
import { Button } from "./Button/Button"
import { filterButtons } from "../../utility/filters"

export const MainFilters = ({ handler }) => {

    return (
        <section id="navigation_buttons" className={styles.navigation_buttons}>
            <div id="section_buttons" className={styles.section_buttons}>
                <Button handler={handler} info={filterButtons.all} />
                <Button handler={handler} info={filterButtons.kitchen} />
                <Button handler={handler} info={filterButtons.bar} />
            </div>
        </section>
    )
}