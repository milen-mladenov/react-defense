import { CreateDay } from "./CreateDay/CreateDay"
import styles from '../ManageSchedule.module.css'

export const CreateWeek = ({ week, select, scheduleHandler }) => {

    return (
        <tr>
            {week.map(day => <CreateDay day={day} scheduleHandler={scheduleHandler} dayHandler={select} />)}
        </tr>
    )
}