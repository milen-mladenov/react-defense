The project is created to be a part of a restaurant-management system.

The application is created with the idea that it will be a CLOSED system with limited access to the outside. 

Upon the initial load of the application you will need to login with a user (information on user login and how it works at the bottom)


The idea of it is to have:

1.A basic employee management.

2.Schedule management with a calendar display function:
  2.1 Dynamic generation of months with basic information that displayed how many employees are on the schedule for that day per/department
  2.2 Upon selecting a day you will be able to see the shifts per department 
  2.3 If you have access to create schedule: 
  2.3.1 You will be able to create a new schedule (for a day that does not have one)
  2.3.2 Update schedule for a day that has a schedule and is (current / future date)

3.Inventory management:
  3.1 Adding new items to the inventory
  3.2 Updating the current items (adding stock / updating stock values)
  3.3 Recieving basic information on sales/waste per item (for the month/year) >>> subject to change

4.Ordering screen.

This is the main part of the project. From this screen you will have the option to:

  4.1 Open new tables
  4.2 Manage currently opened tables:
  4.2.1 Add new items to the table order
  4.2.2 If the user has permitions(edit order/add a discount/delete item/delete table completely)
  4.2.3 Close the table
  4.2.4 In each of the tables you will be able to see who opened it, when, what are the items, what is the sum, if there are any notes for the table itself or on the items 
  4.3 Main filters (the top section of the application) that will change the content of the buttons for fast ordering (the left middle section under the items section)
  4.4 See a list with the open tables + individual information for them displayed within (number of guests if added), (options to edit if current user has access), (time the table has been opened) >>> subject to change
  4.5 Ways to filter and sort the opened tables for convenience


------------------------------------------------------------------------------------------------

<<<<< LOGIN INFORMATION >>>>>

The ways to login are based on a few things:
    - if you have supervisor/management authorization you will be REQUIRED to log in WITH a password.
    - if you are an employee with limited access you will be able to log in with either username or password (this is made for convenience / faster workflow)

THE PASSWORDS ARE NUMBERS ONLY!
THE USERNAMES ALWAYS START WITH A LETTER!

Based on the initial input the field will change if the login attempt is with a password or with a username.

Upon submit based on the information you will be checked for the type of access << most likely to change >>


Here are some default accounts for testing:
users = {
ManagerFour: {password: 4, access: 'partial', department: 'managers', position: 'rotation'}
ManagerOne: {password: 123456, access: 'full', department: 'managers', position: 'senior'}
ManagerTree: {password: 3, access: 'partial', department: 'managers', position: 'rotation'}
ManagerTwo: {password: 123321, access: 'full', department: 'managers', position: 'senior'}
bartenderFive: {password: 5555, access: 'partial', department: 'bar', position: 'senior'}
bartenderFour: {password: 1234, access: 'normal', department: 'bar', position: 'rotation'}
bartenderOne: {password: 123123, access: 'partial', department: 'bar', position: 'senior'}
bartenderTree: {password: 3, access: 'normal', department: 'bar', position: 'rotation'}
bartenderTwo: {password: 1, access: 'partial', department: 'bar', position: 'senior'}
cookEight: {password: 3337, access: 'normal', department: 'kitchen', position: 'rotation'}
cookFive: {password: 3334, access: 'normal', department: 'kitchen', position: 'rotation'}
cookFour: {password: 3333, access: 'normal', department: 'kitchen', position: 'rotation'}
cookOne: {password: 3330, access: 'partial', department: 'kitchen', position: 'senior'}
cookSeven: {password: 3336, access: 'normal', department: 'kitchen', position: 'rotation'}
cookSix: {password: 3335, access: 'normal', department: 'kitchen', position: 'rotation'}
cookTree: {password: 3332, access: 'partial', department: 'kitchen', position: 'senior'}
cookTwo: {password: 3331, access: 'partial', department: 'kitchen', position: 'senior'}
serverFive: {password: 5555, access: 'normal', department: 'servers', position: 'rotation'}
serverFour: {password: 1234, access: 'normal', department: 'servers', position: 'rotation'}
serverOne: {password: 654321, access: 'partial', department: 'servers', position: 'senior'}
serverTree: {password: 3, access: 'normal', department: 'servers', position: 'rotation'}
serverTwo: {password: 1, access: 'partial', department: 'servers', position: 'senior'}
}
  
