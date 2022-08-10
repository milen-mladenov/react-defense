import Parse from "parse";

const hostUrl = 'https://parseapi.back4app.com/';
const javaScriptKey = 'wvuiNL0w90RVGu802PTnvpstwer1jV8MFj1kw8oc';
const applicationId = 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I';

Parse.initialize(applicationId, javaScriptKey);
Parse.serverURL = hostUrl;
let item

export async function getAllInventory() {
    let inventory = []

    const Inventory = Parse.Object.extend('Inventory');
    const query = new Parse.Query(Inventory);
    try {
        const results = await query.find();
        for (const object of results) {
            item = {
                'objectId': results[results.indexOf(object)].id,
                'Department': object.get('Department'),
                'ProductName': object.get('ProductName'),
                'RetailPrice': object.get('RetailPrice'),
                'SellPrice': object.get('SellPrice'),
                'SystemQuantity': object.get('SystemQuantity'),
                'ProductCode': object.get('ProductCode'),
                'ProductID': object.get('ProductID'),
                'Alcohol': object.get('Alcohol'),
            }

            inventory.push(item)

        }
    } catch (error) {
        console.error('Error while fetching Inventory', error);
    }

    return inventory
}

export async function getAllBarItems() {
    const bar = []

    const Inventory = Parse.Object.extend('Inventory');
    const query = new Parse.Query(Inventory);
    query.equalTo('Department', 'Bar');
    try {
        const results = await query.find();
        for (const object of results) {

            item = {
                'objectId': results[results.indexOf(object)].id,
                'Department': object.get('Department'),
                'ProductName': object.get('ProductName'),
                'RetailPrice': object.get('RetailPrice'),
                'SellPrice': object.get('SellPrice'),
                'SystemQuantity': object.get('SystemQuantity'),
                'ProductCode': object.get('ProductCode'),
                'ProductID': object.get('ProductID'),
                'Alcohol': object.get('Alcohol'),
            }
            bar.push(item)
        }
    } catch (error) {
        console.error('Error while fetching Inventory', error);
    }
    return bar
}

export async function getAllKitchenItems() {
    const kitchen = []
    const Inventory = Parse.Object.extend('Inventory');
    const query = new Parse.Query(Inventory);
    query.equalTo('Department', 'Kitchen');
    try {
        const results = await query.find();
        for (const object of results) {

            item = {
                'objectId': results[results.indexOf(object)].id,
                'Department': object.get('Department'),
                'ProductName': object.get('ProductName'),
                'RetailPrice': object.get('RetailPrice'),
                'SellPrice': object.get('SellPrice'),
                'SystemQuantity': object.get('SystemQuantity'),
                'ProductCode': object.get('ProductCode'),
                'ProductID': object.get('ProductID'),
                'Alcohol': object.get('Alcohol'),
            }
            kitchen.push(item)

        }
    } catch (error) {
        console.error('Error while fetching Inventory', error);
    }
    return kitchen
}

export async function updateInventory(itemId, element) {

    const Inventory = Parse.Object.extend('Inventory');
    const query = new Parse.Query(Inventory);
    try {
        const object = await query.get(itemId);
        object.set('Department', element.Department);
        object.set('ProductName', element.ProductName);
        object.set('RetailPrice', element.RetailPrice);
        object.set('SellPrice', element.SellPrice);
        object.set('SystemQuantity', element.SystemQuantity);
        object.set('ProductCode', element.ProductCode);
        object.set('ProductID', element.ProductID);
        try {
            const response = await object.save();
            console.log('Inventory updated', response);
        } catch (error) {
            console.error('Error while updating Inventory', error);
        }
    } catch (error) {
        console.error('Error while retrieving object Inventory', error);
    }

}

export async function createNewItems(item) {
    
    const myNewObject = new Parse.Object('Inventory');
    myNewObject.set('Department', item.Department);
    myNewObject.set('ProductName', item.ProductName);
    myNewObject.set('RetailPrice', item.RetailPrice);
    myNewObject.set('SellPrice', item.SellPrice);
    myNewObject.set('SystemQuantity', item.SystemQuantity);
    myNewObject.set('ProductCode', item.ProductCode);
    myNewObject.set('ProductID', item.ProductID);
    try {
        const result = await myNewObject.save();
        // Access the Parse Object attributes using the .GET method
        console.log('Inventory created', result);
    } catch (error) {
        console.error('Error while creating Inventory: ', error);
    }

}