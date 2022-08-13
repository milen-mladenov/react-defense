import { CreateDay } from "./CreateDay/CreateDay"

export const CreateWeek = ({ week, select, scheduleHandler }) => {

    return (
        <tr>
            {week.map(day => <CreateDay key={day.format("DD/MM/YY")} day={day} scheduleHandler={scheduleHandler} dayHandler={select} />)}
        </tr>
    )
}