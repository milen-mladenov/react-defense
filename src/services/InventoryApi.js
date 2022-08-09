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
                'Department': object.get('Department'),
                'ProductName': object.get('ProductName'),
                'ExpirationDate': object.get('ExpirationDate'),
                'Recipe': object.get('Recipe'),
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
                'Department': object.get('Department'),
                'ProductName': object.get('ProductName'),
                'ExpirationDate': object.get('ExpirationDate'),
                'Recipe': object.get('Recipe'),
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
                'Department': object.get('Department'),
                'ProductName': object.get('ProductName'),
                'ExpirationDate': object.get('ExpirationDate'),
                'Recipe': object.get('Recipe'),
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


