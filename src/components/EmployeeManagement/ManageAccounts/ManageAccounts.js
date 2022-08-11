import { useState } from "react"
import styles from "./ManageAccounts.module.css"


export const ManageAccounts = () => {
    const [passwordType, setPassowrdType] = useState("password")

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
            "Password": data.get("password"),
            "Email": data.get("email"),
            "PhoneNumber": data.get("phone"),
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

        if (employee.Password !== data.get("rePassword")) {
            alert("Passwords don't match!")
            return
        }

        if (department == "servers") {
            console.log("servers");
        } else if (department == "bar") {
            console.log("bar");
        } else if (department == "kitchen") {
            console.log("kitchen");
        } else if (department == "managers") {
            console.log("managers");
        }
        console.log(employee)
    }


    return (
        <div>
            <h1>Accounts</h1>
            <div className={styles.employee_form}>
                <form onSubmit={createAccount} className={styles.create_employee}>
                    <div>
                        <label htmlFor="department"><span className={styles.required}>*</span> Department </label>
                        <select id="department" name="department">
                            <option value="servers">Servers</option>
                            <option value="bar">Bar</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="managers">Managers</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="position"><span className={styles.required}>*</span> Position </label>
                        <select id="position" name="position">
                            <option value="rotation">Rotation</option>
                            <option value="senior">Senior</option>
                            <option value="trainer">Trainer</option>
                            <option value="training">Training</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="access"><span className={styles.required}>*</span> Access </label>
                        <select id="access" name="access">
                            <option value="normal">Normal</option>
                            <option value="partial">Partial</option>
                            <option value="full">Full</option>
                        </select>
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
                    <div>
                        <label htmlFor="email"><span className={styles.required}>*</span> Email </label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="phone"><span className={styles.required}>*</span> Phone number </label>
                        <input type="number" name="phone" id="phone" />
                    </div>
                    <div>
                        <label htmlFor="note"> Note </label>
                        <textarea type="text" name="note" id="note" />
                    </div>
                    <button className={styles.createAccountButton}>Create</button>
                </form>
            </div>
        </div>
    )
}