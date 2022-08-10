import { useState } from 'react';

import styles from './LoginBox.module.css'



let maximum;
export const LoginBox = ({ users, state, handleLogin }) => {
    const [password, setPassword] = useState("")
    const [passwordType, setPassType] = useState("text")

    function passwordInput(e) {
        let input = e.target.value
        if (!isNaN(input[0])) {
            setPassType("password")
        } else {
            setPassType("text")
        }

        if (passwordType == "password") {
            maximum = 6
        } else {
            maximum = 12
        }
        setPassword(input)
    }

    function clear() {

        setPassword("")
    }

    function handleLoginAttempt() {
        login(password)
    }


    function login(pass) {
        let passedLogin = false;
        let currUser;
        let userAccess;
        let password;

        if (pass == "") {
            alert("Required field!")
            return
        }
        // check if the user can log in with name only 
        if (users.hasOwnProperty(pass)) {
            for (let [key, value] of Object.entries(users)) {
                let attributes = value
                currUser = key
                userAccess = attributes.access
                password = attributes.password

                if (currUser == pass && userAccess == "normal") {
                    passedLogin = true;
                    clear()
                    break
                } else if (currUser == pass && userAccess == "partial") {
                    alert("This user needs to login with a password!")
                    clear() // TO BE CHANGED LATER
                    break
                } else if (currUser == pass && userAccess == "full") {
                    alert("This user needs to login with a password!")
                    clear() // TO BE CHANGED LATER
                    break
                }
            }


        } else { //else the user needs to provide a valid password for a user
            for (let [key, value] of Object.entries(users)) {
                let attributes = value
                currUser = key
                password = attributes.password
                userAccess = attributes.access

                if (attributes.password == pass && attributes.access == "normal") {
                    passedLogin = true;
                    clear()
                    break
                } else if (attributes.password == pass && attributes.access == "partial") {
                    passedLogin = true;
                    clear()
                    break
                } else if (attributes.password == pass && attributes.access == "full") {
                    passedLogin = true;
                    clear()
                    break
                }

            }
        }

        if (passedLogin) {
            clear()
            handleLogin(currUser, userAccess)
            return
        }

    }

    return (
        <section id="login" className={styles.login}>
            <div id="login_screen" className={styles.login_screen}>
                <div>
                    <h2>Login:</h2>
                </div>
                <input type={passwordType} id="login_input" className={styles.login_input} maxLength={maximum} onInput={passwordInput} value={password} placeholder="******" />
                <div id="login_buttons" className={styles.login_buttons}>
                    <button id="clear_btn" onClick={clear} className={styles.clear_btn}>Clear</button>
                    <button id="login_btn" onClick={handleLoginAttempt} className={styles.login_btn}>Login</button>
                </div>
            </div>
        </section>
    )
}