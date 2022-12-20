import { Person } from "./person.entity";

export interface Student extends Person{
    enrollment:number;
    level:string;
}