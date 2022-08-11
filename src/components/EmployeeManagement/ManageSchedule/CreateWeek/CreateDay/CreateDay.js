import { useEffect, useState } from "react";
import { useSchedule } from "../../../../utility/hooks/useSchedule";
import styles from "./CreateDay.module.css"
import moment from 'moment'

let bar;
let kitchen;
let servers;
let managers;

export const CreateDay = ({ day, dayHandler, scheduleHandler }) => {
    const [hasSchedule, setHasSchedule] = useState(false)
    const [dayState, setDayState] = useState("")
    const today = moment()
    const schedule = useSchedule()
    useEffect(() => {

        if (schedule.hasOwnProperty(day.format("DD/MM/YY"))) {
            setHasSchedule(true)
        } else {
            setHasSchedule(false)
        }
        if (day.isBefore(today.subtract(1, "day"))) {
            setDayState("past")
        } else if (day.isSame(today)) {
            setDayState("today")
        } else {
            setDayState("future")
        }
    }, [day, schedule])

    if (hasSchedule && schedule.hasOwnProperty(day.format("DD/MM/YY"))) {
        bar = Object.keys(schedule[day.format("DD/MM/YY")].Bar).length
        kitchen = Object.keys(schedule[day.format("DD/MM/YY")].Kitchen).length
        servers = Object.keys(schedule[day.format("DD/MM/YY")].Servers).length
        managers = Object.keys(schedule[day.format("DD/MM/YY")].Managers).length
    }

    function select() {
        dayHandler(day)
        scheduleHandler(day, hasSchedule);
    }

    return (
        <td>

            <div onClick={select} className={`${styles.dayBox} ${styles[dayState]}`}>
                <p className={styles.day}>{day.format("D")}</p>
                {hasSchedule ? <ul className={styles.staffList}>
                    {bar ? <li>Bar: {bar}</li> : ""}
                    {servers ? <li>Servers: {servers}</li> : ""}
                    {kitchen ? <li>Kitchen: {kitchen}</li> : ""}
                    {managers ? <li>Managers: {managers}</li> : ""}
                </ul> : <h3 className={styles.clearDay}>No schedule</h3>}
            </div>
        </td>
    )
}