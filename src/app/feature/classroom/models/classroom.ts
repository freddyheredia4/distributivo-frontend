interface ClassRoom {
    id:       string;
    name:     string;
    type:     number | null;
    capacity: number;
    location: number | null;
    locationName: string | null;
    typeName : string | null;
    description : string | null;
}

export { ClassRoom };