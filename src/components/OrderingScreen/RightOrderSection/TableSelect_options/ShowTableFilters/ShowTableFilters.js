


export const ShowTableFilters = () => {
    return (
        <select name="table_select" id="show_tables_menu">
            <option value="all_opened">Всички Отворени</option>
            <option value="my_opened">Мой Отворени</option>
            <option value="my_closed">Всички Затвори</option>
            <option value="all_closed">Мой Затвори</option>
            <option value="all_not_my">Всички не-мой</option>
            <option value="all_tables_today">Всички днешни маси</option>
        </select>
    )
}