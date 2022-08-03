import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ManageAccounts } from "./ManageAccounts/ManageAccounts"
import { ManageSchedule } from "./ManageSchedule/ManageSchedule";
import styles from './EmployeeManagement.module.css'
export const EmployeeManagement = () => {
    const [action, setAction] = useState("Accounts");


    function actionHandler(e) {
        setAction(e.target.textContent)
    }
    return (
        <>
            <div className={styles.emp_management_buttons}>
                <button onClick={actionHandler}>Accounts</button>
                <button onClick={actionHandler}>Schedule</button>
            </div>

            {action == "Accounts" && <ManageAccounts />}
            {action == "Schedule" && <ManageSchedule />}
        </>
    )
}