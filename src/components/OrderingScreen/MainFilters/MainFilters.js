import styles from './MainFilters.module.css'
import { Button } from "./Button/Button"
import { filterButtons } from "../../utility/filters"

export const MainFilters = () => {
    return (
        <section id="navigation_buttons" className={styles.navigation_buttons}>
        <div id="section_buttons" className={styles.section_buttons}>
            <Button info={filterButtons.all}/>
            <Button info={filterButtons.kitchen}/>
            <Button info={filterButtons.bar}/>
            <Button info={filterButtons.other}/>
            <Button info={filterButtons.menu}/>
        </div>
    </section>
    )
}