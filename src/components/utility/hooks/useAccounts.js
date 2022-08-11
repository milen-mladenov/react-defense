import { useEffect, useState } from "react"
import { getAllEployees } from "../../../services/EmployeeApi"

export const useAccounts = () => {
    const [accounts, setAccounts] = useState({})

    useEffect(() => {
        getAccounts()
    }, [])

    async function getAccounts() {
        let [barPersonel, kitchenPersonel, serverPersonel, managerPersonel] =
            await Promise.all([
                getAllEployees("BarEmployees"),
                getAllEployees("KitchenEmployees"),
                getAllEployees("ServersEmployees"),
                getAllEployees("ManagersEmployees")
            ])

        kitchenPersonel.forEach(acc => {
            setAccounts(state => ({
                ...state,
                [acc.FirstName]:
                {
                    "password": acc.Password,
                    "access": acc.Access,
                    "department": "kitchen",
                    "position": acc.Position
                }
            }))
        });
        serverPersonel.forEach(acc => {
            setAccounts(state => ({
                ...state,
                [acc.FirstName]:
                {
                    "password": acc.Password,
                    "access": acc.Access,
                    "department": "servers",
                    "position": acc.Position
                }
            }))
        });
        managerPersonel.forEach(acc => {
            setAccounts(state => ({
                ...state,
                [acc.FirstName]:
                {
                    "password": acc.Password,
                    "access": acc.Access,
                    "department": "managers",
                    "position": acc.Position
                }
            }))
        });
        barPersonel.forEach(acc => {
            setAccounts(state => ({
                ...state,
                [acc.FirstName]:
                {
                    "password": acc.Password,
                    "access": acc.Access,
                    "department": "bar",
                    "position": acc.Position
                }
            }))
        });
    }

    return accounts
}