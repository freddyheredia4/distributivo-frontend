import { Location } from "./location"

interface LocationDto {
    total : number 
    page : number 
    count : number
    capacity : number 
    locations : Location[] 
}

export { LocationDto };