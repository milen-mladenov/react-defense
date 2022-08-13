import { getUserData } from "../../services/utility"
import { useAccounts } from "../utility/hooks/useAccounts"

import { LoginBox } from "./LoginBox/LoginBox"
import { LoginNavigation } from "./LoginNavigation/LoginNavigation"


export const Login = ({ handle, state }) => {
    const user = getUserData()
    let users = useAccounts()

    return (
        <>
            {!state && <LoginBox users={users} handleLogin={handle} state={state} />}
            <LoginNavigation access={user?.userAccess} />
        </>
    )
}