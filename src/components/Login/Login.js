import { useState } from "react"
import { LoginBox } from "./LoginBox/LoginBox"
import { LoginNavigation } from "./LoginNavigation/LoginNavigation"


export const Login = ({ handle, user }) => {
    const [state, setState] = useState(false)


    let users = {
        admin: {
            password: 123456,
            access: "full",
        },
        super: {
            password: 123321,
            access: "partial"
        },
        serverOne: {
            password: 654321,
            access: "normal"
        },
        serverTwo: {
            password: 1,
            access: "normal"
        }
    }

    function loginHandler(u, a) {
        setState(true)
        handle(u, a)
    }
    function logoutHandler() {
        setState(false)
    }

    function test() {
        console.log(user.userAccess);
    }
    return (
        <>
            <button onClick={test} >showUser</button>
            {!state && <LoginBox users={users} handleLogin={loginHandler} state={state} />}
            <LoginNavigation access={user.userAccess} />
        </>
    )
}