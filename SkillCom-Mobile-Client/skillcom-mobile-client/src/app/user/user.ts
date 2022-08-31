import { Plan } from "../plan/plan";

export interface User {
    id: number
    name: string
    email: string
    plans: Plan[]
}

export interface UserDTO {
    name: string
    email: string
}