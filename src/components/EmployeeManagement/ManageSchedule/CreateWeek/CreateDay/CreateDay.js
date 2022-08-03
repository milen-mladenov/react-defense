import { useEffect, useState } from "react";
import { Staffer } from "../Staffer/Staffer"
import styles from "./CreateDay.module.css"
import moment from 'moment'

let bar;
let kitchen;
let servers;
let managers;

export const CreateDay = ({ day, schedule, dayHandler, scheduleHandler }) => {
    const [hasSchedule, setHasSchedule] = useState(false)
    const [dayState, setDayState] = useState("")
    const today = moment()

    useEffect(() => {
        if (schedule.hasOwnProperty(day.format("D/M/Y"))) {
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
    }, [day])


    if (hasSchedule && schedule.hasOwnProperty(day.format("D/M/Y"))) {
        bar = Object.keys(schedule[day.format("D/M/Y")].bar).length
        kitchen = Object.keys(schedule[day.format("D/M/Y")].kitchen).length
        servers = Object.keys(schedule[day.format("D/M/Y")].floor).length
        managers = Object.keys(schedule[day.format("D/M/Y")].floorManagement).length
    }

    function select() {
        dayHandler(day)
        scheduleHandler(day);
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