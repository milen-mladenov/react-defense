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

        const employee = {
            "Position": data.get("Position"),
            "fName": data.get("fName"),
            "lName": data.get("lName"),
            "password": data.get("password"),
            "email": data.get("email"),
            "phone": data.get("phone"),
            "note": data.get("note")
        }

        console.log(employee);
    }


    return (
        <div>
            <h1>Accounts</h1>
            <div className={styles.employee_form}>
                <form onSubmit={createAccount} className={styles.create_employee}>
                    <div>
                        <label htmlFor="Position"> Position </label>
                        <select name="Position">
                            <option value="Servers">Servers</option>
                            <option value="Bar">Bar</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Managers">Managers</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone"> Phone number </label>
                        <input type="number" name="phone" />
                    </div>
                    <div>
                        <label htmlFor="fName"> First Name </label>
                        <input type="text" name="fName" />
                    </div>
                    <div>
                        <label htmlFor="lName"> Last Name </label>
                        <input type="text" name="lName" />
                    </div>
                    <div>
                        <label htmlFor="password"> Password </label>
                        <input type={passwordType} name="password" />
                        <button onClick={handlePassType}>show/hide</button>
                    </div>
                    <div>
                        <label htmlFor="rePassword"> Repeat Password </label>
                        <input type={passwordType} name="rePassword" />
                        <button onClick={handlePassType}>show/hide</button>
                    </div>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor="note"> Note </label>
                        <textarea type="text" name="note" />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}