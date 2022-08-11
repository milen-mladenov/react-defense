import { useEffect, useState } from "react"
import styles from './CreateSchedule.module.css'
import circle from '../../../utility/svg/circle.svg'
import check from '../../../utility/svg/check.svg'


export const ScheduleInput = ({ person, handler }) => {
    const [employee, setEmployee] = useState({ "FirstName": person.FirstName, })
    const [submited, setSubmited] = useState(false)

    function inputHandler(e) {
        let name = e.target.name
        let value = e.target.value

        setEmployee(old => ({
            ...old,
            [name]: value
        }))

    }

    function submitPerson() {
        handler(employee)
        setSubmited(true)
    }

    return (
        <div className={styles.employeeField}>
            <p>{employee.FirstName}</p>
            {/* <input className={styles.employeeName}
                type="text"
                name="name"
                placeholder="employee"
                onChange={inputHandler}
                value={employee.FirstName} /> */}
            <div className={styles.employeeHours}>
                <input
                    type="text"
                    name="ShiftStart"
                    placeholder="from"
                    disabled={submited}
                    onChange={inputHandler}
                    value={employee.ShiftStart} />
                <p>-</p>
                <input
                    type="text"
                    name="ShiftEnd"
                    placeholder="to"
                    disabled={submited}
                    onChange={inputHandler}
                    value={employee.ShiftEnd} />
                {submited
                    ? <img className={styles.submitIcon} src={check} />
                    : <img className={styles.submitIcon} onClick={submitPerson} src={circle} />
                }


                {/* <button onClick={submitPerson}><img></img></button> */}
            </div>
        </div>
    )
}