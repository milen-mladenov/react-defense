import Parse from "parse";


const hostUrl = 'https://parseapi.back4app.com/';
const javaScriptKey = 'wvuiNL0w90RVGu802PTnvpstwer1jV8MFj1kw8oc';
const applicationId = 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I';

Parse.initialize(applicationId, javaScriptKey);
Parse.serverURL = hostUrl;


export async function createDaySchedule(schedule) {

    const myNewObject = new Parse.Object('Schedule');
    myNewObject.set('Bar', schedule.Bar);
    myNewObject.set('Kitchen', schedule.Kitchen);
    myNewObject.set('Servers', schedule.Servers);
    myNewObject.set('Managers', schedule.Managers);
    myNewObject.set('Date', schedule.Date);
    try {
        const result = await myNewObject.save();
        // Access the Parse Object attributes using the .GET method
        console.log('Schedule created', result);
    } catch (error) {
        console.error('Error while creating Schedule: ', error);
    }

}

export async function getSchedule() {
    const schedule = []
    const Schedule = Parse.Object.extend('Schedule');
    const query = new Parse.Query(Schedule);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
        const results = await query.find();
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            let daySchedule = {
                "Bar": object.get('Bar'),
                "Kitchen": object.get('Kitchen'),
                "Servers": object.get('Servers'),
                "Managers": object.get('Managers'),
                "Date": object.get('Date'),
            }
            schedule.push(daySchedule)
        }
    } catch (error) {
        console.error('Error while fetching Schedule', error);
    }

    return schedule
}