import Parse from "parse";

const hostUrl = 'https://parseapi.back4app.com/';
const javaScriptKey = 'wvuiNL0w90RVGu802PTnvpstwer1jV8MFj1kw8oc';
const applicationId = 'ZzsEoelt01CRLQreVhYhwKuv5nFTZq8ml4fgmd0I';

Parse.initialize(applicationId, javaScriptKey);
Parse.serverURL = hostUrl;

export async function createEmployee(department, employee) {
    const myNewObject = new Parse.Object(department);
    let result;

    myNewObject.set('FirstName', employee.FirstName);
    myNewObject.set('LastName', employee.LastName);
    myNewObject.set('Email', employee.Email);
    myNewObject.set('PhoneNumber', employee.PhoneNumber);
    myNewObject.set('Password', employee.Password);
    myNewObject.set('Access', employee.Access);
    myNewObject.set('Position', employee.Position);
    if (employee.Note) {
        myNewObject.set('Note', employee.Note);
    }
    try {
        result = await myNewObject.save();
    } catch (error) {
        console.error('Error while creating BarEmployees: ', error);
    }

    return result
}