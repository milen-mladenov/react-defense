import styles from './ManageAccounts.module.css'

export const ListItem = ({ employee }) => {

    return (
       
        <div className={styles.singleEmployee}>
            <ul>
                <li>First Name: {employee.FirstName}</li>
                <li>Last Name: {employee.LastName}</li>
                <li>Position: {employee.Position}</li>
                <li>Access: {employee.Access}</li>
                <li>Email {employee.Email}</li>
            </ul>
        </div>
    )
}