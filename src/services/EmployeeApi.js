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


export async function getAllEployees(department) {
    let employees = []
    const Employees = Parse.Object.extend(department);
    const query = new Parse.Query(Employees);

    try {
        const results = await query.find();
        for (const object of results) {

            const employee = {
                "FirstName": object.get('FirstName'),
                "LastName": object.get('LastName'),
                "Email": object.get('Email'),
                "PhoneNumber": object.get('PhoneNumber'),
                "Password": object.get('Password'),
                "Access": object.get('Access'),
                "Position": object.get('Position'),
                "Note": object.get('Note'),
            }

            employees.push(employee)
        }
    } catch (error) {
        console.error('Error while fetching BarEmployees', error);
    }

    return employees
}