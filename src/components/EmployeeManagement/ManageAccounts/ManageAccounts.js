import { useState } from "react"
import { useEmployees } from '../../utility/hooks/useEmployees'
import { createEmployee } from '../../../services/EmployeeApi'
import styles from "./ManageAccounts.module.css"

import { ListItem } from "./ListItem"

export const ManageAccounts = () => {
    const [passwordType, setPassowrdType] = useState("password")
    const [form, setForm] = useState(false)
    const employees = useEmployees()

    function handlePassType(e) {
        e.preventDefault()
        if (passwordType !== "password") {
            setPassowrdType("password");
        } else {
            setPassowrdType("number")
        }
    }

    function createAccount(e) {
        e.preventDefault();
        let data = new FormData(e.target)
        let department = data.get("department");
        const employee = {
            "Position": data.get("position"),
            "Access": data.get("access"),
            "FirstName": data.get("fName"),
            "LastName": data.get("lName"),
            "Password": Number(data.get("password")),
            "Email": data.get("email"),
            "PhoneNumber": Number(data.get("phone")),
            "Note": data.get("note")
        }

        if (employee.Position == "" ||
            employee.Access == "" ||
            employee.FirstName == "" ||
            employee.LastName == "" ||
            employee.Password == "" ||
            employee.Email == "" ||
            employee.PhoneNumber == "") {
            alert("Please fill the required fields!")
            return
        }

        if (employee.Password !== Number(data.get("rePassword"))) {
            alert("Passwords don't match!")
            return
        }

        if (department == "servers") {
            department = "ServersEmployees"
        } else if (department == "bar") {
            department = "BarEmployees"
        } else if (department == "kitchen") {
            department = "KitchenEmployees"
        } else if (department == "managers") {
            department = "ManagersEmployees"
        }

        createEmployee(department, employee)

    }
    function closeForm() {
        setForm(!form)
    }

    return (
        <div>
            <h1>Accounts</h1>
            {!form && <button onClick={() => setForm(!form)}> Create New Employee</button>}
            <section className={styles.displayEmployees}>
                <div className={`${styles.employeeSection} ${styles.bar}`}>
                    <h2>Bar Employees</h2>
                    <ol className={styles.employeeList}>
                        {employees.barEmployees?.map(emp => <ListItem key={emp.FirstName + " " + emp.LastName} employee={emp} />)}
                    </ol>
                </div>
                <div className={`${styles.employeeSection} ${styles.kitchen}`}>
                    <h2>Kitchen Employees</h2>
                    <ol className={styles.employeeList}>
                        {employees.kitchenEmployees?.map(emp => <ListItem key={emp.FirstName + " " + emp.LastName} employee={emp} />)}
                    </ol>
                </div>
                <div className={`${styles.employeeSection} ${styles.servers}`}>
                    <h2>Servers Employees</h2>
                    <ol className={styles.employeeList}>
                        {employees.serverEmployees?.map(emp => <ListItem key={emp.FirstName + " " + emp.LastName} employee={emp} />)}
                    </ol>
                </div>
                <div className={`${styles.employeeSection} ${styles.managers}`}>
                    <h2>Managers</h2>
                    <ol className={styles.employeeList}>
                        {employees.managers?.map(emp => <ListItem key={emp.FirstName + " " + emp.LastName} employee={emp} />)}
                    </ol>
                </div>
            </section>
            {form && <div className={styles.employee_form}>
                <button className={styles.closeForm} onClick={closeForm}>X</button>
                <form onSubmit={createAccount} className={styles.create_employee}>
                    <div className={styles.dropdownInput}>
                        <label htmlFor="department"><span className={styles.required}>*</span> Department </label>
                        <select id="department" name="department">
                            <option value="servers">Servers</option>
                            <option value="bar">Bar</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="managers">Managers</option>
                        </select>
                    </div>
                    <div className={styles.dropdownInput}>
                        <label htmlFor="position"><span className={styles.required}>*</span> Position </label>
                        <select id="position" name="position">
                            <option value="rotation">Rotation</option>
                            <option value="senior">Senior</option>
                            <option value="trainer">Trainer</option>
                            <option value="training">Training</option>
                        </select>
                    </div>
                    <div className={styles.dropdownInput}>
                        <label htmlFor="access"><span className={styles.required}>*</span> Access </label>
                        <select id="access" name="access">
                            <option value="normal">Normal</option>
                            <option value="partial">Partial</option>
                            <option value="full">Full</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone"><span className={styles.required}>*</span> Phone number </label>
                        <input type="number" name="phone" id="phone" />
                    </div>
                    <div>
                        <label htmlFor="fName"><span className={styles.required}>*</span> First Name </label>
                        <input id="fName" type="text" name="fName" />
                    </div>
                    <div>
                        <label htmlFor="lName"><span className={styles.required}>*</span> Last Name </label>
                        <input type="text" name="lName" id="lName" />
                    </div>
                    <div>
                        <label htmlFor="password"><span className={styles.required}>*</span> Password </label>
                        <input type={passwordType} name="password" id="password" />
                        <button onClick={handlePassType}>show/hide</button>
                    </div>
                    <div>
                        <label htmlFor="rePassword"><span className={styles.required}>*</span> Repeat Password </label>
                        <input type={passwordType} name="rePassword" id="rePassword" />
                        <button onClick={handlePassType}>show/hide</button>
                    </div>
                    <div className={styles.emailInput}>
                        <label htmlFor="email"><span className={styles.required}>*</span> Email </label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className={styles.noteInput}>
                        <label htmlFor="note"> Note </label>
                        <textarea type="text" name="note" id="note" />
                    </div>

                    <button className={styles.createAccountButton}>Create</button>
                </form>
            </div>}
        </div>
    )
}