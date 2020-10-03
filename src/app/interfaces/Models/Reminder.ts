import { Weather } from './Weather.model'

export class Reminder{
    id:number
    title:string
    city: string
    cityLat: number
    cityLong:number
    date: string
    startTime: string
    endTime: string
    reminderColor:string
    weather: Weather
}