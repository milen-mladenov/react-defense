import Parse from "parse";


const hostUrl = 'https://parseapi.back4app.com/';
const javaScriptKey = 'wvuiNL0w90RVGu802PTnvpstwer1jV8MFj1kw8oc';
const applicationId = 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I';

Parse.initialize(applicationId, javaScriptKey);
Parse.serverURL = hostUrl;


export async function createNewTable(newTabte) {

    const myNewObject = new Parse.Object('Tables');
    myNewObject.set('Date', newTabte[2].Date);
    myNewObject.set('Order', newTabte[1]);
    myNewObject.set('TableNumber', newTabte[0]);
    myNewObject.set('Details', newTabte[2]);
    myNewObject.set('Status', newTabte[2].Status);
    try {
        const result = await myNewObject.save();

        console.log('Tables created', result);
    } catch (error) {
        console.error('Error while creating Tables: ', error);
    }

}

export async function getDayTables(date) {
    const dayTables = {
        allOpenedTables: [],
        allClosedTables: [],
    }

    const Tables = Parse.Object.extend('Tables');
    const query = new Parse.Query(Tables);
    query.equalTo('Date', date);

    try {
        const results = await query.find();
        for (const object of results) {
            let table = []

            const id = results[results.indexOf(object)].id;
            const Date = object.get('Date')
            const Order = object.get('Order')
            const TableNumber = object.get('TableNumber')
            const Details = object.get('Details')
            const Status = object.get('Status')

            Details.Status = Status;
            Details.Date = Date;
            Details.id = id

            table.push(TableNumber, Order, Details)
            if (Status) {
                dayTables.allOpenedTables.push(table)
            } else {
                dayTables.allClosedTables.push(table)
            }

        }
    } catch (error) {
        console.error('Error while fetching Tables', error);
    }

    return dayTables
}

export async function updateTable(tabmeNumber, order, details) {

    const Tables = Parse.Object.extend('Tables');
    const query = new Parse.Query(Tables);
    try {

        const object = await query.get(details.id);
        object.set('Date', details.Date);
        object.set('Order', order);
        object.set('TableNumber', tabmeNumber);
        object.set('Details', details);
        object.set('Status', details.Status);
        try {
            const response = await object.save();

        } catch (error) {
            console.error('Error while updating Tables', error);
        }
    } catch (error) {
        console.error('Error while retrieving object Tables', error);
    }

}