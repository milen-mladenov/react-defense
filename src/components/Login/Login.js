import { useState } from "react"

import { LoginBox } from "./LoginBox/LoginBox"
import { LoginNavigation } from "./LoginNavigation/LoginNavigation"


export const Login = ({ handle, user,state }) => {
    let users = {
        "admin": {
            password: 123456,
            access: "full",
        },
        "super": {
            password: 123321,
            access: "partial"
        },
        "serverOne": {
            password: 654321,
            access: "normal"
        },
        "serverTwo": {
            password: 1,
            access: "normal"
        }
    }
    return (
        <>
            {!state && <LoginBox users={users} handleLogin={handle} state={state} />}
            <LoginNavigation access={user.userAccess} />
        </>
    )
}