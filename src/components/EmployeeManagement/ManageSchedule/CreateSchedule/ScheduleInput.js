import { useEffect, useState } from "react"
import styles from './CreateSchedule.module.css'


export const ScheduleInput = ({ person, handler }) => {
    const [employee, setEmployee] = useState(person)

    function inputHandler(e) {
        let name = e.target.name
        let value = e.target.value

        setEmployee(old => ({
            ...old,
            [name]: value
        }))

        console.log(employee);

    }

    return (
        <div className={styles.employeeField}>
            <input className={styles.employeeName}
                type="text"
                name="name"
                placeholder="employee"
                onChange={inputHandler}
                value={employee.name} />
            <div className={styles.employeeHours}>
                <input
                    type="text"
                    name="shiftStart"
                    placeholder="from"
                    onChange={inputHandler}
                    value={employee.shiftStart} />
                <p>-</p>
                <input
                    type="text"
                    name="shiftEnd"
                    placeholder="to"
                    onChange={inputHandler}
                    value={employee.shiftEnd} />
            </div>
        </div>
    )
}