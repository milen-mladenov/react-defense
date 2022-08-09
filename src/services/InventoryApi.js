import Parse from "parse";

const hostUrl = 'https://parseapi.back4app.com/';
const javaScriptKey = 'wvuiNL0w90RVGu802PTnvpstwer1jV8MFj1kw8oc';
const applicationId = 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I';

Parse.initialize(applicationId, javaScriptKey);
Parse.serverURL = hostUrl;
let item
async function request(url, method, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I',
            'X-Parse-REST-API-Key': 'GsS6idExCD7o9vIw1M4jH1c6aasAmhSXMSENJKCC'
        }
    };

    if (data !== undefined) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    try {

        const res = await fetch(hostUrl + url, options)

        if (res.ok == false) {
            const error = await res.json()
            throw new Error(error.message)
        }

        if (res.status == 204) {
            return res
        } else {
            return res.json()
        }
    } catch (err) {
        alert(err.message)
        throw err
    }
}

export async function getAllInventory() {
    let inventory = []

    const Inventory = Parse.Object.extend('Inventory');
    const query = new Parse.Query(Inventory);
    try {
        const results = await query.find();
        for (const object of results) {

            item = {
                'id': object.get('objectId'),
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

    console.log(inventory);
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
                    'id': object.get('objectId'),
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
                    'id': object.get('objectId'),
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




export async function post(data) {

    const newItem = new Parse.Object('Inventory');

    newItem.set('Department', data.department);
    newItem.set('ProductName', data.productName);
    newItem.set('ExpirationDate', new Date(data.expirationDate));
    newItem.set('Recipe', data.recipe);
    newItem.set('RetailPrice', data.retailPrice);
    newItem.set('SellPrice', data.sellPrice);
    newItem.set('SystemQuantity', data.systemQuant);
    newItem.set('ProductCode', data.productCode);
    newItem.set('ProductID', data.productId);
    newItem.set('Alcohol', data.alcohol);
    try {
        const result = await newItem.save();
        console.log('Inventory created', result);
    } catch (error) {
        console.error('Error while creating Inventory: ', error);
    }

    // return request(url, 'post', data)
}
export async function put(url, data) {
    return request(url, 'put', data)
}
export async function del(url) {
    return request(url, 'delete')
}