import { Device } from "../device/device";

export interface Plan {
    id: number
    name: string
    monthlyCost: number
    devices: Device[]
}

export interface PlanDTO {
    name: string
    monthlyCost: number
}