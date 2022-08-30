import { Plan } from "../plan/plan";

export interface User {
    id: number
    name: string
    email: string
    plans: Plan[]
}