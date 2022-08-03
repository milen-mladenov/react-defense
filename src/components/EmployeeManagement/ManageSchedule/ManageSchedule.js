import { useState, useEffect } from 'react'

import styles from './ManageSchedule.module.css'
import moment from 'moment'
import { buildCalendar } from '../../utility/buildCalendar'
import { CreateWeek } from './CreateWeek/CreateWeek'
import schedule from '../../utility/schedule.json'
import { DaySchedule } from './DaySchedule/DaySchedule'
import { CreateSchedule } from './CreateSchedule/CreateSchedule'

let currDaySchedule;
export const ManageSchedule = () => {

    const [calendar, setCalendar] = useState([]);
    const [selectedDay, setSelectedDay] = useState(moment());
    const [showSchedule, setShowSchedule] = useState(false);
    const currDate = moment();
    
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

    function scheduleHandler(day) {
        const currDay = day.format("D/M/Y")
        currDaySchedule = schedule[currDay];
        if (currDaySchedule) {
            setShowSchedule(true)
        } else {
            closeSchedule()
        }
    }

    function closeSchedule() {
        setShowSchedule(false)
    }

    return (
        <div>
            <div>
                <h2>Current date: {currDate.format("D/M/Y")}</h2>
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
                    {calendar.map(week => <CreateWeek week={week} schedule={schedule} scheduleHandler={scheduleHandler} select={setSelectedDay} dayHandler={dayHandler} />)}
                </tbody>
            </table>
            <CreateSchedule />
            {showSchedule && <DaySchedule schedule={currDaySchedule} day={selectedDay} closeSchedule={closeSchedule}/>}
        </div>
    )
}

