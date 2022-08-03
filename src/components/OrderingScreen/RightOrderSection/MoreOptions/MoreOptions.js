import styles from '../RightOrderSection.module.css'

export const MoreOptions = () => {
    return (
        <select name="" id="more_table_options" className={styles.more_table_options}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    )
}