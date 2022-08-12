import Parse from "parse";


const hostUrl = 'https://parseapi.back4app.com/';
const javaScriptKey = 'wvuiNL0w90RVGu802PTnvpstwer1jV8MFj1kw8oc';
const applicationId = 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I';

Parse.initialize(applicationId, javaScriptKey);
Parse.serverURL = hostUrl;


export async function createNewDayTables(newTabtes) {


    const myNewObject = new Parse.Object('Tables');
    myNewObject.set('Date', newTabtes.Date);
    if (newTabtes.Opened) {
        myNewObject.set('Opened', newTabtes.Opened);
    }
    myNewObject.set('Closed', []);
    try {
        const result = await myNewObject.save();
        // Access the Parse Object attributes using the .GET method
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
            const Id = results[results.indexOf(object)].id;
            const Opened = object.get('Opened');
            const Closed = object.get('Closed');

            if (Opened) {
                dayTables.allOpenedTables.push(Opened)
            }
            if (Closed) {
                dayTables.allClosedTables.push(Closed)
            }
            dayTables.id = Id

        }
    } catch (error) {
        console.error('Error while fetching Tables', error);
    }

    return dayTables
}

export async function updateTablesStatus(id, tables) {

    const Tables = Parse.Object.extend('Tables');
    const query = new Parse.Query(Tables);
    try {

        const object = await query.get(id);
        object.set('Date', tables.Date);
        object.set('Opened', tables.Opened);
        object.set('Closed', tables.Closed);
        try {
            const response = await object.save();

            console.log(response.get('Date'));
            console.log(response.get('Opened'));
            console.log(response.get('Closed'));
            console.log('Tables updated', response);
        } catch (error) {
            console.error('Error while updating Tables', error);
        }
    } catch (error) {
        console.error('Error while retrieving object Tables', error);
    }

}