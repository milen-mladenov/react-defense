import { useEffect, useState } from "react"
import { getAllEployees } from "../../services/EmployeeApi"


export const useEmployees = () => {
    const [employees, setEmployees] = useState({})

    async function getEmployees() {

        let [barPersonel, kitchenPersonel, serverPersonel, managerPersonel] =
            await Promise.all([
                getAllEployees("BarEmployees"),
                getAllEployees("KitchenEmployees"),
                getAllEployees("ServersEmployees"),
                getAllEployees("ManagersEmployees")
            ])

        setEmployees({
            "barEmployees": barPersonel,
            "kitchenEmployees": kitchenPersonel,
            "serverEmployees": serverPersonel,
            "managers": managerPersonel
        })

    }
    useEffect(() => {
        getEmployees()
    }, [])

    return employees
}
