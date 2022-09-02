interface Grade{
    id:       string;
    name:     string;
    workingDay:     number | null;
    level: number | null;
    parallel: number | null;
    careerName : string;
    status : boolean;
    career : number | null
}

export { Grade};