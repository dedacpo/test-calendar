import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { Weather } from 'src/app/interfaces/Models/Weather.model';
import { HelperService } from 'src/app/shared/services/helper/helper.service';

export function getDateTodayPlus(number) {
    let date = new Date()
    date.setDate(date.getDate() + number);
    return date;
}

export const remindersMock: Reminder[] = [
    {
        city: "Americana, Região Metropolitana de Campinas, Brasil",
        date: new HelperService().formatDateToyyyyMMdd(new Date()),
        endTime: "22:00",
        id: 1,
        reminderColor: "#29f1c3",
        startTime: "20:00",
        title: "Go to the mall and buy pants",
        cityLat: -7.857700,
        cityLong: 115.027200,
        weather: new Weather()
    },
    {
        city: "Hindu Point British Columbia CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(1)),
        endTime: "22:00",
        id: 2,
        reminderColor: "#eae11b",
        startTime: "20:00",
        title: "Pick grandma at the airport",
        cityLat: 51.095000,
        cityLong: -119.668600,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(1)),
        endTime: "22:00",
        id: 3,
        reminderColor: "#877adc",
        startTime: "20:00",
        title: "Apply for the job interview",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(1)),
        endTime: "22:00",
        id: 4,
        reminderColor: "#6c19e7",
        startTime: "20:00",
        title: "Eat sushi with college friends",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(1)),
        endTime: "22:00",
        id: 5,
        reminderColor: "#068363",
        startTime: "20:00",
        title: "Clean the house for visitation",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(3)),
        endTime: "22:00",
        id: 6,
        reminderColor: "#fa642f",
        startTime: "20:00",
        title: "Cancel gym's plan",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(3)),
        endTime: "22:00",
        id: 7,
        reminderColor: "#35b8c8",
        startTime: "20:00",
        title: "Buy some chocolate",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(3)),
        endTime: "22:00",
        id: 8,
        reminderColor: "#cf3a63",
        startTime: "20:00",
        title: "Take the car to the mechanic",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(3)),
        endTime: "22:00",
        id: 9,
        reminderColor: "#1d11be",
        startTime: "20:00",
        title: "Pay power bill",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(3)),
        endTime: "22:00",
        id: 10,
        reminderColor: "#1d11be",
        startTime: "20:00",
        title: "Invite over friends for the party",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 11,
        reminderColor: "#27fdea",
        startTime: "20:00",
        title: "Buy milk",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 12,
        reminderColor: "#5b4404",
        startTime: "20:00",
        title: "Throw away bad food at the fridge",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 13,
        reminderColor: "#d1f599",
        startTime: "20:00",
        title: "Visit grandma at the hospital",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 14,
        reminderColor: "#e68493",
        startTime: "20:00",
        title: "Watch world cup at boyfriend's house",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 15,
        reminderColor: "#cbc4e2",
        startTime: "20:00",
        title: "Pick up car at the mechanic",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 16,
        reminderColor: "#c1797e",
        startTime: "20:00",
        title: "Return the books to library",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 17,
        reminderColor: "#1192de",
        startTime: "20:00",
        title: "Buy a Harry Potter costume",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 18,
        reminderColor: "#764a5e",
        startTime: "20:00",
        title: "Study for English test",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 19,
        reminderColor: "#de394a",
        startTime: "20:00",
        title: "Go to doctor's appointment",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 19,
        reminderColor: "#42fcba",
        startTime: "20:00",
        title: "Do the English test",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 20,
        reminderColor: "#35b4e6",
        startTime: "20:00",
        title: "Buy new glasses",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 20,
        reminderColor: "#39e5c4",
        startTime: "20:00",
        title: "Buy new glasses",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 21,
        reminderColor: "#84b73d",
        startTime: "20:00",
        title: "Do my hair at my cousin's saloon",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 22,
        reminderColor: "#780c1e",
        startTime: "20:00",
        title: "Reserve some time for myself",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 23,
        reminderColor: "#c266ca",
        startTime: "20:00",
        title: "Try the nachos new recipe",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 24,
        reminderColor: "#747e1a",
        startTime: "20:00",
        title: "Buy lamps for the living room",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 25,
        reminderColor: "#2a6b94",
        startTime: "20:00",
        title: "Finish the paper for the theater class",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 26,
        reminderColor: "#3fa264",
        startTime: "20:00",
        title: "Go out with a long time friend",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    },
    {
        city: "Kunghit Island British Columbia Skeena-Queen Charlotte Regional District CA",
        date: new HelperService().formatDateToyyyyMMdd(getDateTodayPlus(5)),
        endTime: "22:00",
        id: 26,
        reminderColor: "#21411c",
        startTime: "20:00",
        title: "See the first episode of GOT",
        cityLat: 52.078800,
        cityLong: -131.032300,
        weather: new Weather()
    }
]