import { logDOM } from "@testing-library/react"
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import styles from './CreateSchedule.module.css'
import { ScheduleInput } from "./ScheduleInput"
import scheduleNames from '../../../utility/scheduleNames'


export const CreateSchedule = ({ closeSchedule, day }) => {
    const [bar, setBar] = useState(scheduleNames.bar)
    const [kitchen, setKitchen] = useState(scheduleNames.kitchen)
    const [servers, setServers] = useState(scheduleNames.servers)
    const [managers, setManagers] = useState(scheduleNames.managers)
    const [schedule, setSchedule] = useState([])


    function submitBarSchedule(e) {
        e.preventDefault()

        console.log(day.format("DD/MM/YY"));
        console.log(schedule);
    }
    function submitKitchenSchedule(e) {
        e.preventDefault()

        console.log(day.format("DD/MM/YY"));
        console.log(schedule);
    }
    function submitServerSchedule(e) {
        e.preventDefault()

        console.log(day.format("DD/MM/YY"));
        console.log(schedule);
    }
    function submitManagerSchedule(e) {
        e.preventDefault()

        console.log(day.format("DD/MM/YY"));
        console.log(schedule);
    }

    function handler(person) {
        setSchedule(state => ([...state, person]))
    }

    return (
        <div>

            <div className={styles.scheduleInputWrapper}>
                <button className={styles.closeSchedule} onClick={closeSchedule}>X</button>
                <div className={styles.currentDate}>
                <h2>Schedule for: {day.format("DD/MM/YY")}</h2>
                </div>
                <div className={styles.barForm}>
                    <form onSubmit={submitBarSchedule}>
                        <div className={styles.formSections}>
                            <h3>Bar Staff</h3>
                            {bar.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Submit Bar</button>
                    </form>
                </div>
                <div className={styles.kitchenForm}>
                    <form onSubmit={submitKitchenSchedule}>
                        <div className={styles.formSections}>
                            <h3>Kitchen Staff</h3>
                            {kitchen.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Submit Kitchen</button>
                    </form>
                </div>
                <div className={styles.serversForm}>
                    <form onSubmit={submitServerSchedule}>
                        <div className={styles.formSections}>
                            <h3>Server Staff</h3>
                            {servers.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Submit Servers</button>
                    </form>
                </div>
                <div className={styles.managersForm}>
                    <form onSubmit={submitManagerSchedule}>
                        <div className={styles.formSections}>
                            <h3>Managers</h3>
                            {managers.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Submit Managers</button>
                    </form>
                </div>
            </div>
        </div>
    )
}