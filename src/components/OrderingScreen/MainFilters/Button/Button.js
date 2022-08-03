import styles from '../MainFilters.module.css'

export const Button = ({info}) => {
    return (
        <button className={styles.categorie_button} id="all_categories_button">{info.name}</button>
    )
}