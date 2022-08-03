import { logDOM } from "@testing-library/react"
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import styles from './CreateSchedule.module.css'
import { ScheduleInput } from "./ScheduleInput"
import scheduleNames from '../../../utility/scheduleNames'


export const CreateSchedule = () => {
    const [bar, setBar] = useState(scheduleNames.bar)
    const [kitchen, setKitchen] = useState(scheduleNames.kitchen)
    const [servers, setServers] = useState(scheduleNames.servers)
    const [managers, setManagers] = useState(scheduleNames.managers)
    const [schedule, setSchedule] = useState(bar)


    function onSubmit(e) {
        e.preventDefault()

        console.log(bar);
        console.log(schedule);
    }

    function handler() {

    }

    return (
        <div>

            <div className={styles.scheduleInputWrapper}>
                <div className={styles.radioSelect}>
                    <input onClick={() => setSchedule(bar)}
                        type="radio"
                        name="schedule"
                        id="bar"
                        value="bar"
                    />
                    <label htmlFor="bar">Bar</label>

                    <input onClick={() => setSchedule(kitchen)}
                        type="radio"
                        name="schedule"
                        id="kitchen"
                        value="kitchen" />
                    <label htmlFor="kitchen">kitchen</label>

                    <input onClick={() => setSchedule(servers)}
                        type="radio"
                        name="schedule"
                        id="servers"
                        value="servers" />
                    <label htmlFor="servers">servers</label>

                    <input onClick={() => setSchedule(managers)}
                        type="radio"
                        name="schedule"
                        id="managers"
                        value="managers" />
                    <label htmlFor="managers">managers</label>

                </div>
                <form onSubmit={onSubmit}>
                    {schedule == bar &&
                        bar.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)
                    }
                    {schedule == kitchen &&
                        kitchen.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)
                    }
                    {schedule == servers &&
                        servers.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)
                    }
                    {schedule == managers &&
                        managers.map(person => <ScheduleInput key={person.name} handler={handler} person={person} />)
                    }
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}