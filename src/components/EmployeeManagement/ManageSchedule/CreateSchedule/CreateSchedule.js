import { useEffect, useState } from "react"
import { createDaySchedule } from "../../../../services/ScheduleApi"
import { useEmployees } from "../../../utility/hooks/useEmployees"
import styles from './CreateSchedule.module.css'
import { ScheduleInput } from "./ScheduleInput"


export const CreateSchedule = ({ closeSchedule, day, }) => {
    const [bar, setBar] = useState([])
    const [kitchen, setKitchen] = useState([])
    const [servers, setServers] = useState([])
    const [managers, setManagers] = useState([])
    const [schedule, setSchedule] = useState({ Date: day.format("DD/MM/YY") })
    const employees = useEmployees()

    function submitBarSchedule(e) {
        e.preventDefault()
        handler("Bar", bar)
    }
    function handleBar(person) {
        setBar(state => ([...state, person]))
    }
    function submitKitchenSchedule(e) {
        e.preventDefault()
        handler("Kitchen", kitchen)
    }
    function handleKitchen(person) {
        setKitchen(state => ([...state, person]))
    }
    function submitServerSchedule(e) {
        e.preventDefault()
        handler("Servers", servers)
    }
    function handleServers(person) {
        setServers(state => ([...state, person]))
    }
    function submitManagerSchedule(e) {
        e.preventDefault()

        handler("Managers", managers)
    }
    function handleManagers(person) {
        setManagers(state => ([...state, person]))
    }

    function handler(dep, schedule) {
        setSchedule(state => ({ ...state, [dep]: schedule }))
    }

    function submitDay() {
        createDaySchedule(schedule)
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
                            {employees.barEmployees?.map(person => <ScheduleInput key={person.name} handler={handleBar} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Add Bar</button>
                    </form>
                </div>
                <div className={styles.kitchenForm}>
                    <form onSubmit={submitKitchenSchedule}>
                        <div className={styles.formSections}>
                            <h3>Kitchen Staff</h3>
                            {employees.kitchenEmployees?.map(person => <ScheduleInput key={person.name} handler={handleKitchen} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Add Kitchen</button>
                    </form>
                </div>
                <div className={styles.serversForm}>
                    <form onSubmit={submitServerSchedule}>
                        <div className={styles.formSections}>
                            <h3>Server Staff</h3>
                            {employees.serverEmployees?.map(person => <ScheduleInput key={person.name} handler={handleServers} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Add Servers</button>
                    </form>
                </div>
                <div className={styles.managersForm}>
                    <form onSubmit={submitManagerSchedule}>
                        <div className={styles.formSections}>
                            <h3>Managers</h3>
                            {employees.managers?.map(person => <ScheduleInput key={person.name} handler={handleManagers} person={person} />)}
                        </div>
                        <button className={styles.submitButton}>Add Managers</button>
                    </form>
                </div>
            </div>
            <button onClick={submitDay}>Submit day schedule</button>
        </div>
    )
}