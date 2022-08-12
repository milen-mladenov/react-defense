export function getTablesData() {
    return JSON.parse(sessionStorage.getItem('tablesData'))
}

export function setTablesData(data) {
    sessionStorage.setItem('tablesData', JSON.stringify(data))
}

export function clearTablesData() {
    sessionStorage.removeItem('tablesData')
}