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


    function onSubmit(e) {
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

                <h2>Schedule for: {day.format("DD/MM/YY")}</h2>
                <form onSubmit={onSubmit}>
                    <div className={styles.formSections}>
                        <h3>Bar Staff</h3>
                        {bar.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                    </div>
                    <div className={styles.formSections}>
                        <h3>Kitchen Staff</h3>
                        {kitchen.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                    </div>
                    <div className={styles.formSections}>
                        <h3>Server Staff</h3>
                        {servers.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                    </div>
                    <div className={styles.formSections}>
                        <h3>Managers</h3>
                        {managers.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)}
                    </div>

                    <button className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}