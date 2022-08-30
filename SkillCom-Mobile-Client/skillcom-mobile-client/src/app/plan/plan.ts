import { Device } from "../device/device";

export interface Plan {
    id: number
    name: string
    minutes: number
    devices: Device[]
}