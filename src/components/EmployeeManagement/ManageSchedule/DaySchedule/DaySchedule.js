import styles from './DaySchedule.module.css'


export const DaySchedule = ({ schedule, day, closeSchedule }) => {

    return (
        <article className={styles.daySchedule}>
            <button className={styles.closeSchedule} onClick={closeSchedule}>X</button>
            <h1 className={styles.title}>Schedule for {day.format("D/M/Y")}</h1>
            <div className={styles.content}>
                <div className={styles.managers}>
                    <h2>Managers</h2>
                    <ol>
                        {schedule.Managers.map(employee => {
                            return <li key={employee.FirstName}><p>Name: {employee.FirstName}</p> <p>from: {employee.ShiftStart} to: {employee.ShiftEnd}</p></li>
                        })}
                    </ol>
                </div>
                <div className={styles.bar}>
                    <h2>Bar</h2>
                    <ol>
                        {schedule.Bar.map(employee => {
                            return <li key={employee.FirstName}><p>Name: {employee.FirstName}</p> <p>from: {employee.ShiftStart} to: {employee.ShiftEnd}</p></li>
                        })}
                    </ol>
                </div>
                <div className={styles.servers}>
                    <h2>Servers</h2>
                    <ol>
                        {schedule.Servers.map(employee => {
                            return <li key={employee.FirstName}><p>Name: {employee.FirstName}</p> <p>from: {employee.ShiftStart} to: {employee.ShiftEnd}</p></li>
                        })}
                    </ol>
                </div>
                <div className={styles.kitchen}>
                    <h2>Kitchen</h2>
                    <ol>
                        {schedule.Kitchen.map(employee => {
                            return <li key={employee.FirstName}><p>Name: {employee.FirstName}</p> <p>from: {employee.ShiftStart} to: {employee.ShiftEnd}</p></li>
                        })}
                    </ol>
                </div>
            </div>
        </article>
    )
}