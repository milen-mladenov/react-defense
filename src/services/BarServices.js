import * as api from './api'

//get all items 
export async function getAllBarItems() {
    return api.get('/Inventory/where=alcohol=true')
}

//get item by id
export async function getBarById(id) {
    return api.get('/Inventory' + id)
}

//create item
export async function create(item) {
    return api.post('/Inventory', item)
}

//edit item
export async function edit(id, item) {
    return api.put('/Inventory' + id, item)
}

//delete item
export async function deleteItem(id) {
    return api.del('/Inventory' + id)
}
