import { CreateDay } from "./CreateDay/CreateDay"
import styles from '../ManageSchedule.module.css'

export const CreateWeek = ({ week, select, schedule, scheduleHandler }) => {

    return (
        <tr>
            {week.map(day => <CreateDay day={day} schedule={schedule} scheduleHandler={scheduleHandler} dayHandler={select} />)}
        </tr>
    )
}