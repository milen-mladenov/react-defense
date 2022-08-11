import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ManageAccounts } from "./ManageAccounts/ManageAccounts"
import { ManageSchedule } from "./ManageSchedule/ManageSchedule";
import styles from './EmployeeManagement.module.css'
import { getAllEployees } from '../../services/EmployeeApi';
export const EmployeeManagement = () => {
    const [action, setAction] = useState("Accounts");
    const [employees, setEmployees] = useState({})
    async function getEmployees() {


        let [barPersonel, kitchenPersonel, serverPersonel, managerPersonel] =
            await Promise.all([
                getAllEployees("BarEmployees"),
                getAllEployees("KitchenEmployees"),
                getAllEployees("ServersEmployees"),
                getAllEployees("ManagersEmployees")
            ])

        setEmployees({
            "barEmployees": barPersonel,
            "kitchenEmployees": kitchenPersonel,
            "serverEmployees": serverPersonel,
            "managers": managerPersonel
        })

    }
    useEffect(() => {
        getEmployees()
    }, [])

    function actionHandler(e) {
        setAction(e.target.textContent)
    }
    return (
        <>
            <div className={styles.emp_management_buttons}>
                <button onClick={actionHandler}>Accounts</button>
                <button onClick={actionHandler}>Schedule</button>
            </div>

            {action == "Accounts" && <ManageAccounts employees={employees} />}
            {action == "Schedule" && <ManageSchedule employees={employees} />}
        </>
    )
}