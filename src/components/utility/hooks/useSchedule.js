import { useEffect, useState } from 'react'
import { getSchedule } from '../../../services/ScheduleApi'


export const useSchedule = () => {
    const [schedule, setSchedule] = useState({})

    useEffect(() => {
        getDays()
    }, [])

    async function getDays() {
        let days = await getSchedule()
        days.forEach(day => {
            setSchedule(state => ({
                ...state,
                [day.Date]: {
                    "Bar": day.Bar,
                    "Kitchen": day.Kitchen,
                    "Servers": day.Servers,
                    "Managers": day.Managers
                }
            }))
        });
    }

    return schedule
}