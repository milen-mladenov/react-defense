

export const ArangeTableFilters = () => {
    return (
        <select name="table_select" id="arange_tables_by">
            <option value="all_opened">Най-дълго отворени</option>
            <option value="my_opened">Най-нови</option>
            <option value="my_closed">По номер голям-малък</option>
            <option value="all_closed">По номер малък-голям</option>
            <option value="all_not_my">Първо мой</option>
            <option value="all_tables_today">Последно мой</option>
        </select>
    )
}