import { useState, useEffect } from 'react'
import { useSchedule } from '../../utility/hooks/useSchedule'
import moment from 'moment'
import styles from './ManageSchedule.module.css'

import { buildCalendar } from '../../utility/buildCalendar'
import { CreateWeek } from './CreateWeek/CreateWeek'
import { DaySchedule } from './DaySchedule/DaySchedule'
import { CreateSchedule } from './CreateSchedule/CreateSchedule'

let currDaySchedule;

export const ManageSchedule = () => {
    const [calendar, setCalendar] = useState([]);
    const [selectedDay, setSelectedDay] = useState(moment());
    const [showSchedule, setShowSchedule] = useState(false);
    const [createSchedule, setCreateSchedule] = useState(false)
    const currDate = moment();
    const schedule = useSchedule()

    useEffect(() => {
        setCalendar(buildCalendar(selectedDay));
    }, [selectedDay]);

    function dayHandler(day) {
        setSelectedDay(day);
    }

    function prevMonth() {
        setSelectedDay(selectedDay.subtract(1, "month").clone());
    }

    function nextMonth() {
        setSelectedDay(selectedDay.add(1, "month").clone());
    }

    function scheduleHandler(day, hasSchedule) {
        const currDay = day.format("DD/MM/YY")

        currDaySchedule = schedule[currDay];

        if (currDaySchedule) {
            setShowSchedule(true)
        } else {
            closeSchedule()
        }
        if (day.isAfter(currDate) && !hasSchedule) {
            setCreateSchedule(true)
        } else {
            setCreateSchedule(false)
        }
    }

    function closeSchedule() {
        setShowSchedule(false)
        setCreateSchedule(false)
    }

    return (
        <div>

            <div>
                <h2>Current date: {currDate.format("DD/MM/YYYY")}</h2>
            </div>
            <div className={styles.months}>
                <h2 onClick={prevMonth} className={styles.monthButton}>Prev</h2>
                <h1>{selectedDay.format("MMMM Y")}</h1>
                <h2 onClick={nextMonth} className={styles.monthButton}>Next</h2>
            </div>
            <table className={styles.schedule_table_input}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    {calendar.map(week => <CreateWeek key={week[0].format("DD/MM/YY") + week[0]} week={week} scheduleHandler={scheduleHandler} select={setSelectedDay} dayHandler={dayHandler} />)}
                </tbody>
            </table>
            {createSchedule && <CreateSchedule day={selectedDay} closeSchedule={closeSchedule} />}
            {showSchedule && <DaySchedule schedule={currDaySchedule} day={selectedDay} closeSchedule={closeSchedule} />}
        </div>
    )
}

