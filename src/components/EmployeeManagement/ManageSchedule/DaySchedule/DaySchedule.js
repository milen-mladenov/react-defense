import styles from './DaySchedule.module.css'


export const DaySchedule = ({ schedule, day, closeSchedule }) => {

    const kitchen = Object.entries(schedule.kitchen);
    const bar = Object.entries(schedule.bar);
    const floor = Object.entries(schedule.floor);
    const floorManagement = Object.entries(schedule.floorManagement);

    return (
        <article className={styles.daySchedule}>
            <button className={styles.closeSchedule} onClick={closeSchedule}>X</button>
            <h1 className={styles.title}>Schedule for {day.format("D/M/Y")}</h1>
            <div className={styles.content}>
                <div className={styles.bar}>
                    <h2>Bar</h2>
                    <ol>
                        {bar.map(employee => {
                            return <li>{employee[0]}: {employee[1]}</li>
                        })}
                    </ol>
                </div>
                <div className={styles.kitchen}>
                    <h2>Kitchen</h2>
                    <ol>
                        {kitchen.map(employee => {
                            return <li>{employee[0]}: {employee[1]}</li>
                        })}
                    </ol>
                </div>
                <div className={styles.servers}>
                    <h2>Servers</h2>
                    <ol>
                        {floor.map(employee => {
                            return <li>{employee[0]}: {employee[1]}</li>
                        })}
                    </ol>
                </div>
                <div className={styles.managers}>
                    <h2>Managers</h2>
                    <ol>
                        {floorManagement.map(employee => {
                            return <li>{employee[0]}: {employee[1]}</li>
                        })}
                    </ol>
                </div>
            </div>
        </article>
    )
}