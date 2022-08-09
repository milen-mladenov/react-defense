import styles from '../MainFilters.module.css'

export const Button = ({ info, handler }) => {

    function getFilter() {
        handler(info.name)
    }

    return (
        <button onClick={getFilter} className={styles.categorie_button} id="all_categories_button">{info.name}</button>
    )
}