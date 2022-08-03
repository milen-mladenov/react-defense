import { useState } from "react"
import styles from "./ManageAccounts.module.css"


export const ManageAccounts = () => {
    const [passwordType, setPassowrdType] = useState("password")
    const [values, setValues] = useState({
        fName: "",
        lName: "",
        password: "",
        phone: "",
        email: "",
    });

    function handlePassType(e) {
        e.preventDefault()
        if (passwordType !== "password") {
            setPassowrdType("password");
        } else {
            setPassowrdType("number")
        }
    }

    function onInput(e) {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    function createAccount(e) {
        e.preventDefault();
        console.log(values);
        setValues({
            fName: "",
            lName: "",
            password: "",
            phone: "",
            email: "",
        })
    }


    return (
        <div>
            <h1>Accounts</h1>
            <div className={styles.employee_form}>
                <form onSubmit={createAccount} className={styles.create_employee}>
                    <div>
                        <label htmlFor="fName"> First Name </label>
                        <input type="text" name="fName" onChange={onInput} value={values.fName} />
                    </div>
                    <div>
                        <label htmlFor="lName"> Last Name </label>
                        <input type="text" name="lName" onChange={onInput} value={values.lName} />
                    </div>
                    <div>
                        <label htmlFor="password"> Password </label>
                        <input type={passwordType} name="password" onChange={onInput} value={values.password} />
                        <button onClick={handlePassType}>show/hide</button>
                    </div>
                    <div>
                        <label htmlFor="phone"> Phone number </label>
                        <input type="number" name="phone" onChange={onInput} value={values.phone} />
                    </div>
                    <div>
                        <label htmlFor="email"> Email </label>
                        <input type="text" name="email" onChange={onInput} value={values.email} />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}